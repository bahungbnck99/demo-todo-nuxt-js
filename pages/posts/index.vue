<template>
  <div class="container">
    <nuxt-link to="/" class="mt-4">Trang chủ</nuxt-link>
    <div class="card">
      <div class="card-header d-flex">
        <input type="text" class="form-control" v-model="title" />
        <button class="btn btn-primary btn-sm w-25" @click="savePost">
          Lưu lại
        </button>
      </div>

      <div class="card-body">
        <div class="row">
          <div class="col-2" v-for="post in posts" :key="post.id">
            <!-- <nuxt-link to="/posts/1"> -->
            <div class="box-post border p-2 position-relative">
              <div class="image">
                <img src="~/assets/images/logo.png" class="w-100" alt="" />
              </div>
              <p class="line-3">
                <nuxt-link to="/posts/1">
                  {{ post.title }}
                </nuxt-link>
              </p>
              <button
                class="btn btn-warning btn-sm edit position-absolute"
                @click="editPost(post.id)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm delete position-absolute"
                @click="deletePost(post.id)"
              >
                Delete
              </button>
            </div>
            <!-- </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  // layout:'index',
  // async asyncData({ $axios, params }) {
  //   const posts = await $axios.$get(
  //     `https://jsonplaceholder.typicode.com/posts?_limit=5`
  //   );
  //   console.log(posts);
  //   return { posts };
  // },
  data() {
    return {
      post: {
        id: "",
        title: "",
      },
      title: "",
    };
  },
  created() {
    this.getPosts();
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["getPosts", "deletePost", "updatePost", "addPost"]),
    async editPost(postId) {
      await this.$store.dispatch("editPost", postId);
      let postEdit = this.$store.state.postEdit;
      console.log(postEdit);
      this.title = postEdit.title;
      this.post.id = postEdit.id;
    },
    savePost() {
      console.log(this.title);
      if (this.post.id) {
        this.post.title = this.title;
        this.updatePost(this.post);
      } else {
        this.addPost({
          id: uuidv4(),
          title: this.title,
          body: this.title,
          userId: 1,
        });
      }
      this.title = "";
      this.id = "";
    },
  },
};
</script>
<style>
.delete {
  top: 10px;
  right: 10px;
}
.edit {
  top: 10px;
  left: 10px;
}
.line-3 {
  text-transform: capitalize;
  line-height: 1.25rem;
  height: 4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.8);
  /* font-size: 0.875rem; */
}
</style>
