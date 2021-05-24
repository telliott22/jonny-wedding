<template>
  <div id="app">
    <div class="min-h-screen">
      <Nuxt />
    </div>

    <div class="fixed left-0 top-0 w-20 bg-border bg-contain h-full"></div>
    <div class="fixed right-0 top-0 w-20 bg-flowers bg-contain h-full"></div>
    <!-- <div class="fixed bottom-0 w-full bg-flowers bg-contain h-32"></div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#app {
  overflow: hidden;

  @screen md {
    overflow: initial;
  }
}
</style>
