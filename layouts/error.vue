<template>
  <div>
    <div class="min-h-screen">
      <div
        class="
          container
          mx-auto
          text-center
          flex
          align-center
          justify-center
          flex-col
          min-h-screen
          pt-32
        "
      >
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else-if="$root.context.isDev">An error occurred {{ error }}</h1>
        <NuxtLink to="/">Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, default: () => {} },
  },
};
</script>
