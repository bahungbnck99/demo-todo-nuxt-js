<template>
  <div class="container">
    <h1>Trang chủ</h1>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link to="/posts" class="nav-link">Bài viết</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/users" class="nav-link">Người dùng</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {

    console.log('Log asyncData');
  },
};
</script>
