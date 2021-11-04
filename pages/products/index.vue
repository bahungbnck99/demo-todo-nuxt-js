<template>
  <div>
    <nuxt-link
      :to="product.url"
      v-for="product in products"
      :key="product.id"
      >{{ product.name }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.authenticated) {
      return redirect("/login");
    }
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Sản phẩm 1",
          url: "products/1",
        },
        {
          id: 1,
          name: "Sản phẩm 1",
          url: "products/1",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
