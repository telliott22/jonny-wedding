<template>
  <picture>
    <source
      v-if="mobileImage"
      :srcset="mobileImage"
      media="(max-width: 769px)"
    />
    <source
      :srcset="portableTextImageUrl || desktopImage"
      media="(min-width: 770px)"
    />
    <img :lazy="lazySource" :alt="alt" />
  </picture>
</template>

<script>
export default {
  name: "LazyLoadImage",
  props: {
    desktopImage: { type: String, default: "" },
    mobileImage: { type: String, default: "" },
    alt: { type: String, default: "" },
    asset: { type: Object, default: () => {} },
  },
  data() {
    return {
      lazySource: "",
    };
  },
  computed: {
    //If we're using this component in a sanity portable text block, get image url
    portableTextImageUrl() {
      if (this.asset) {
        return this.$getImageUrl(this.asset);
      }
      return null;
    },
  },
  watch: {
    desktopImage(newVal) {
      if (newVal) {
        this.lazySource = newVal;
      }
    },
    asset(newVal) {
      if (newVal) {
        this.lazySource = newVal;
      }
    },
  },
  mounted() {
    this.lazySource = this.portableTextImageUrl || this.desktopImage;
    this.initLazyLoadObserver();
  },
  methods: {
    applyLazy(el) {
      const imageUrl = el.getAttribute("lazy");
      if (el instanceof window.HTMLImageElement) {
        el.onload = function () {
          el.setAttribute("loaded", true);
        };

        el.setAttribute("src", imageUrl);

        // Set to loaded after 500ms anyway. This kills me but wasn't working in safari, will revisit
        setTimeout(() => {
          el.setAttribute("loaded", true);
        }, 2000);
      } else if (el instanceof window.HTMLSourceElement) {
        el.setAttribute("srcset", imageUrl);
        el.setAttribute("loaded", true);

        el.onload = function () {};
      } else {
        el.style.backgroundImage = `url(${imageUrl})`;

        el.onload = function () {
          el.setAttribute("loaded", true);
        };
      }
      return true;
    },
    initLazyLoadObserver() {
      const $this = this;
      const lazyLoadObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              $this.applyLazy(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const sources = this.$el.querySelectorAll("[lazy]");

      sources.forEach((source) => {
        lazyLoadObserver.observe(source);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
picture {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  transition: opacity 0.5s;
  will-change: opacity;
  width: 100%;
  max-height: 100%;
  object-fit: contain;

  &[lazy] {
    opacity: 0;
  }

  &[loaded] {
    opacity: 1;
  }
}
</style>
