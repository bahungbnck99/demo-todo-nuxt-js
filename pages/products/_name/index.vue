<template>
  <div>
    <h1>product page is name {{ $route.params.name }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$post("mounted");
    // will console.log 'post mounted!'
  },
  asyncData({ app, $post }) {
    $post("asyncData");
    // If using Nuxt <= 2.12, use 👇
    app.$post("asyncData");
  },
};
</script>

<style scoped></style>
