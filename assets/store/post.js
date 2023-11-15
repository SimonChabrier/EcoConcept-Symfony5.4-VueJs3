import { defineStore } from 'pinia'
import axios from "axios"

const LOCATION = window.location.origin;
const API_ROOT_URL = `${LOCATION}/api/posts/`;
//const API_ROOT_URL = 'https://127.0.0.1:8001/api/posts/';

export const usePostStore = defineStore("user", {

    state: () => ({
        posts: [], 
        post: {},
        results: [],
        message: '',
        ready: false,
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
        // si les données sont chargées, on passe ready à true
        this.ready = true
        //console.log(this.posts)
      },
      // fetch post by id from jsonplaceholder -> Pour l'utiliser, switcher de méthode dans ApiIdTpl.vue : getJsonData / getApiData()
      async fetchPost(id) {
        try {
          this.post  = (await axios.get(API_ROOT_URL + id)).data
          }
          catch (error) {
            console.log(error)
        }
        // si les données sont chargées, on passe ready à true
        this.ready = true
      },  
      // search post by title in posts array
      async searchPost(searchValue) {

        // clean title remove "s", accents, concat and lowercase string
        if(searchValue.length > 2) {
        this.results = this.posts.posts.filter(post => post.title.replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchValue.replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()))
        this.message = ''
        }

        if (this.results.length === 0 && searchValue.length > 2) {
          
          this.message = "Aucun résultat trouvé pour : " + searchValue
          console.log(this.message)
        }

        if (this.results.length > 0 && searchValue.length > 2) {
          this.message = ''
        }

        if (searchValue === '') {
          this.message = ''
          this.results = []
        }
      },
      // filter post by tag
      async filterPost(tag) {
        this.results = this.posts.posts.filter(post => post.mainTag.includes(tag))
        if (this.results.length > 0) {
          this.ready = true
        }
      },
      // fetch all posts from json data --- NON UTILISE ACTUELLEMENT C'EST JUSTE POUR L'EXEMPLE C'ETAIT AVANT DE FAIRE L'API
      async fetchJsonPosts() {
        try {
          this.posts  = (await axios.get('data.json')).data
          }
          catch (error) {
            console.log(error)
        }
      },
      // fetch post from json data --- NON UTILISE ACTUELLEMENT C'EST JUSTE POUR L'EXEMPLE
      async findPost(id) { 
        this.posts  = (await axios.get('data.json')).data
        this.post = this.posts.find(post => post.id === id)
      },
    },
})
