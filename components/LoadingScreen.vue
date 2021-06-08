<template>
  <div
    id="overlay"
    class="
      h-screen
      w-screen
      bg-flowers-tile bg-green
      fixed
      top-0
      left-0
      z-20
      flex
      justify-center
      items-center
    "
  >
    <LazyLoadImage
      id="image"
      alt="Jonny and Tara"
      class="h-64 -rotate-30 transform"
      :desktop-image="'/faces.jpg'"
    />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "LoadingScreen",

  mounted() {
    const timeline = gsap.timeline({
      onComplete: () => {
        overlay.style.display = "none";
      },
    });

    const image = document.getElementById("image");
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");
    const cornerImageLeft = document.getElementById("cornerImageLeft");
    const cornerImageRight = document.getElementById("cornerImageRight");

    timeline
      .from(image, { opacity: 0, delay: 1.5 })
      .to(overlay, { opacity: 0, delay: 2 })
      .from(
        cornerImageLeft,
        { opacity: 0, x: -10, y: -10, delay: 0.2 },
        "cornerImage"
      )
      .from(
        cornerImageRight,
        { opacity: 0, x: 10, y: -10, delay: 0.2 },
        "cornerImage"
      )
      .from(main, { opacity: 0 });
  },
};
</script>
