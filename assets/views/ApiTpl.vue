<template>
    
    <div>

        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch data from Json Placeholder</span>
        </section>

        <section class="section appDark flexRow" v-if="postStore.results.length">
            <span class="appSpan">Resultats</span>
            
            <div v-for="(post, index) in postStore.results" :key="index">
                <transition name="fade" mode="out-in">
                    <section class="section appLight flexRow">
                        <h3>{{ post.title }}</h3>
                        <p> {{ post.body }}</p>
                        <p class="postPara">Tag : {{ post.tag }} </p>
                        <p class="postPara">Exemple : {{ post.exemple }}</p> 

                        <ButtonComponent type="primary" size="sm">
                            <router-link :to="{ name: 'post_id', params: { id: post.id }}">Voir l'article</router-link>
                        </ButtonComponent>
                    </section>
                </transition>
                </div>
        </section>


    
        <div v-for="post in pagePosts" :key="post.id">
            <transition name="fade" mode="out-in">
                <section class="section appLight flexRow">
                    <h3>{{ post.title }}</h3>
                    <p> {{ post.body }}</p>
                    <p class="postPara">Tag : {{ post.tag }} </p>
                    <p class="postPara">Exemple : {{ post.exemple }}</p> 

                    <ButtonComponent type="primary" size="sm">
                        <router-link :to="{ name: 'post_id', params: { id: post.id }}">Voir l'article</router-link>
                    </ButtonComponent>
                </section>
        </transition>
        </div>
    

        <div class="pagination">

            <ButtonComponent size="xs" @click="previousPage">Prev</ButtonComponent>
            <ButtonComponent size="xs" @click="nextPage">Next</ButtonComponent>

        </div>

    </div>



</template>

<script>
// import du store post
import { usePostStore } from '@/store/post';

import ButtonComponent from '@/components/elements/ButtonComponent.vue';

export default {

    name: 'ApiTpl',

    components: {
        ButtonComponent,
    },

    data () {
      return {
        pages: [],
        pagePosts: [],
        totalPosts: '',
        currentPage: 0,
        itemsPerPage: 7,

        posts:[]

      }
    },

    // gestion du store que je retourne en entier dans ce contexte : this.postStore
    setup() {
        const postStore = usePostStore()   

        // subscribe to store mutations
            postStore.$subscribe((mutation) => {
            mutation.type // 'direct' | 'patch object' | 'patch function'
        })

        
        return { postStore }
    },

    
    

    methods: {

        // async getApiData() {
            
        //     await this.postStore.fetchPosts()
            
        //     this.posts = this.postStore.posts
        //     this.totalPosts = this.posts.length
        //     this.setPages()
        //     this.appendPostsToPage()
        // },

        async getJsonData() {
            
            await this.postStore.fetchJsonPosts()
            
            this.posts = this.postStore.posts
            this.totalPosts = this.posts.length
            this.setPages()
            this.appendPostsToPage()
        },

        //action de pagination
        nextPage() {
            this.currentPage++;
            this.appendPostsToPage();
        },

        previousPage() {
            this.currentPage--;
            this.appendPostsToPage();
        },

        setPages() {
            let index = 0;
            let numberOfPages = Math.ceil(this.totalPosts / this.itemsPerPage);
            console.log(numberOfPages);
            for (index; index < numberOfPages; index++) {
                this.pages.push(index); 
            }
        },

        appendPostsToPage() {
            let startIndex = this.currentPage * this.itemsPerPage;
            let endIndex = startIndex + this.itemsPerPage - 1;
            this.pagePosts = this.posts.slice(startIndex, endIndex);

            // afficher masquer les boutons suivant et précédent si on est au début ou à la fin
            // this.currentPage === 0 ? this.hidePreviousButton = true : this.hidePreviousButton = false;
            // endIndex >= this.totalPosts ? this.hideNextButton = true : this.hideNextButton = false;             
        },
    },

    async mounted() {
        // this.getApiData();
        this.getJsonData();
        document.title = "Posts";        
    },
}
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}

.postPara {
    color:$red;
    margin-bottom: $gutterSmall!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

// fade 

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.1s ease;
}

</style>