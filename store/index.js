// export const state = () => ({
//   someValue: ''
// })

// export const actions = {
//   setSomeValueToWhatever({ commit }) {
//     this.$hello('store action')
//     const newValue = 'whatever'
//     commit('changeSomeValue', newValue)
//   }
// }
import axios from "axios";

import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      postEdit: {
        id: "",
        tittle: "",
        userId: "",
        body: "",
      },
    },
    mutations: {
      async ADD_POST(state, newPost) {
        state.posts.unshift(newPost);
      },
      SET_POSTS(state, posts) {
        state.posts = posts;
      },
      DELETE_POST(state, postId) {
        state.posts = state.posts.filter((post) => post.id !== postId);
      },
      EDIT_POST(state, postEdit) {
        let postId = postEdit;
        state.posts.filter((post) => {
          if (post.id == postId) {
            state.postEdit = post;
            console.log(state.postEdit);
          }
        });
      },
      UPDATE_POST(state, postEdit) {
        state.posts.filter((post) => {
          if (post.id === postEdit.id) {
            post.title = postEdit.title;
          }
          return post;
        });
      },
    },
    actions: {
      async addPost({ commit }, newPost) {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        axios
          .post(url, newPost)
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
              commit("ADD_POST", newPost);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      },
      async editPost({ commit }, postId) {
        commit("EDIT_POST", postId);
        // const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        // await axios
        //   .get(url)
        //   .then(res => {
        //     if (res.status === 200) {
        //       console.log(res);
        //       commit("EDIT_POST", res.data);
        //     }
        //   })
        //   .catch(err => {
        //     console.error(err);
        //   });
      },
      async updatePost({ commit }, post) {
        commit("UPDATE_POST", post);

        //
      },
      async deletePost(context, postId) {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        axios
          .delete(url)
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              // commit("DELETE_POST", res.data);
              context.commit("DELETE_POST", postId);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      },
      async getPosts(vuexContext) {
        const url = "https://jsonplaceholder.typicode.com/posts?_limit=4";
        axios
          .get(url)
          .then((res) => {
            console.log(res);
            vuexContext.commit("SET_POSTS", res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
    getters: {
      posts: (state) => state.posts,
    },
  });
};
export default createStore;
