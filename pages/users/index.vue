<template>
  <div>
    <nuxt-link to="/">Trang chủ</nuxt-link>
    <h1>List User</h1>
    <div class="user border mt-2 rounded" v-for="user in users" :key="user.id">
      <div class="row">
        <div class="col-2">
          <img src="~/assets/images/logo.png" class="w-100" alt="">
        </div>
        <div class="col-10">
          <p>{{ user.name }}</p>
          <p>{{ user.phone }}</p>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params }) {
    const users = await $axios.$get(
      `https://jsonplaceholder.typicode.com/users?_limit=5`
    );
    // console.log(users);
    return { users };
  },
};
</script>
