import { defineStore } from 'pinia'
import axios from "axios"

const API_ROOT_URL = 'https://127.0.0.1:8000/api/posts/'

export const usePostStore = defineStore("user", {

    state: () => ({
        posts: [],
        post: {},
        results: [],
        message: '',
    }),

    getters: {
      getPosts : (state) => state.posts,
      getPost: (state) => (id) => { return state.posts.find(post => post.id === id) }
    },

    actions: {

      // fetch all posts from jsonplaceholder -> Pour l'utiliser, switcher de méthode dans ApiTpl.vue : getJsonData / getApiData() 
      async fetchPosts() {
        try {
          this.posts  = (await axios.get(API_ROOT_URL)).data
          }
          catch (error) {
            console.log(error)
        }
      },

      // fetch post by id from jsonplaceholder -> Pour l'utiliser, switcher de méthode dans ApiIdTpl.vue : getJsonData / getApiData()
      async fetchPost(id) {
        try {
          this.post  = (await axios.get(API_ROOT_URL + id)).data
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
