import { defineStore } from 'pinia'
import axios from "axios"


export const usePostStore = defineStore("user", {

    state: () => ({
        posts: [],
    }),

    getters: {
      getPosts : (state) => { return state.posts },
      getPost: (state) => (id) => { return state.posts.find(post => post.id === id) }
    },

    actions: {

      async fetchPosts() {
        try {
          this.posts  = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },

      async fetchPost(id) {
        try {
          this.post  = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },      
    },
})
