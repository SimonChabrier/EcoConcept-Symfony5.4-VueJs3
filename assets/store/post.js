import { defineStore } from 'pinia'
import axios from "axios"


export const usePostStore = defineStore("user", {

    state: () => ({
        posts: [],
        post: {},
    }),

    getters: {
      getPosts : (state) => { return state.posts },
      getPost: (state) => (id) => { return state.posts.find(post => post.id === id) }
    },

    actions: {

      // fetch all posts from jsonplaceholder -> Pour utiliser, switcher de méthode dans ApiTpl.vue : getJsonData / getApiData() 
      async fetchPosts() {
        try {
          this.posts  = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data
          }
          catch (error) {
            console.log(error)
        }
      },

      // fetch post by id from jsonplaceholder -> Pour utiliser, switcher de méthode dans ApiIdTpl.vue : getJsonData / getApiData()
      async fetchPost(id) {
        try {
          this.post  = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
          }
          catch (error) {
            console.log(error)
        }
      },  
      
      // fetch all posts from json data
      async fetchJsonPosts() {
        try {
          this.posts  = (await axios.get('data.json')).data
          }
          catch (error) {
            console.log(error)
        }
      },

      // fetch post from json data
      async findPost(id) { 
        this.posts  = (await axios.get('data.json')).data
        this.post = this.posts.find(post => post.id === id)
      }
      
    },
})
