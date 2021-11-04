<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3>Chi tiết bài viết</h3>
      </div>
      <div class="card-body">
        <h3>{{ post.title }}</h3>
        <div class="row">
          <div class="col-6 m-auto">
            <img src="~/assets/images/logo.png" class="w-100" alt="" />
          </div>
        </div>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
    console.log(post);
    return { post };
  },
};
</script>

<style scoped></style>
