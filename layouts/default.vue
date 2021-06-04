<template>
  <div id="app">
    <div class="min-h-screen">
      <Nuxt />
    </div>

    <LoadingScreen />

    <div
      id="cornerImageLeft"
      class="
        corner-image
        fixed
        left-0
        top-0
        w-32
        bg-flowers-corner bg-no-repeat bg-contain
        h-32
      "
    ></div>
    <div
      id="cornerImageRight"
      class="
        corner-image
        fixed
        right-0
        top-0
        w-32
        bg-flowers-corner bg-no-repeat bg-contain
        h-32
        flip-image
      "
    ></div>

    <div class="w-screen bg-flowers h-24"></div>
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen";

export default {
  components: {
    LoadingScreen,
  },
};
</script>

<style lang="scss" scoped>
#app {
  overflow: hidden;

  @screen md {
    overflow: initial;
  }
}

.flip-image {
  transform: scaleX(-1);
}
</style>
