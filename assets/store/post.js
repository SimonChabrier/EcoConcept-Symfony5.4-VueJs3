import { defineStore } from 'pinia'
import axios from "axios"

const LOCATION = window.location.origin;
const API_ROOT_URL = `${LOCATION}/api/posts/`;

export const usePostStore = defineStore("post", {
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
      async fetchPosts() {
        try {
          this.posts  = (await axios.get(API_ROOT_URL)).data
          }
          catch (error) {
            console.log(error)
        }
        // if data are loaded, set ready to true
        this.ready = true
      },
      // fetch post by id from jsonplaceholder -> Pour l'utiliser, switcher de méthode dans ApiIdTpl.vue : getJsonData / getApiData()
      async fetchPost(id) {
        try {
          this.post  = (await axios.get(API_ROOT_URL + id)).data
          }
          catch (error) {
            console.log(error)
        }
        // if data are loaded, set ready to true
        this.ready = true
      },  
      // search post by title in posts array
      async searchPost(searchValue) {
        const MIN_SEARCH_LENGTH = 2;
        // clean title remove "s", accents, concat and lowercase string
        const cleanText = (text) => text.replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        // if search value length > 2, search in posts array
        if (searchValue.length > MIN_SEARCH_LENGTH) {
          const normalizedSearch = cleanText(searchValue);
          this.results = this.posts.posts.filter(
            (post) => cleanText(post.title).includes(normalizedSearch)
          );
          // if no results, display message
          if (this.results.length === 0) {
            this.message = `Aucun résultat trouvé pour : ${searchValue}`;
            console.log(this.message);
          } else {
            this.message = '';
          }
        // reset all if empty search
        } else if (searchValue === '') {
          this.message = '';
          this.results = [];
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
