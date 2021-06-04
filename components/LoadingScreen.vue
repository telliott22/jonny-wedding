<template>
  <div
    id="overlay"
    class="
      h-screen
      w-screen
      bg-flowers-tile
      fixed
      top-0
      left-0
      z-10
      flex
      justify-center
      items-center
    "
  >
    <img
      id="image"
      class="h-64 -rotate-30 transform"
      src="/faces.jpg"
      alt="Jonny and Tara"
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
      .to(overlay, { opacity: 0, delay: 1.5 })
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
