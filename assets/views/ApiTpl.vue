<template>

<div>
    
    <div v-if="pagePosts">

        <div class="pagination">
            <ButtonComponent class="paginationBtn" size="xs" @click="previousPage">Prev</ButtonComponent>
            <ButtonComponent class="paginationBtn" size="xs" @click="nextPage">Next</ButtonComponent>
        </div>

        <div v-for="post in pagePosts" :key="post.id">
            <transition name="fade">
                <section class="section appLight flexRow">
                    
                    <h3>N° {{ post.id }} - {{ post.title }}</h3>
               
                    <p class="postBody">{{ post.body }}</p>

                    <p class="postPara">Exemple : {{ post.exemple }}</p> 

                    <TagComponent v-if="post.mainTag === 'front'" class="primary" @click="filterByTag('front')"> {{ post.mainTag  }} </TagComponent> 
                    <TagComponent v-if="post.mainTag === 'back'" class="danger" @click="filterByTag('back')"> {{ post.mainTag  }}</TagComponent> 
                    
                    <ButtonComponent type="primary" size="sm">
                        <router-link :to="{ name: 'post_id', params: { id: post.id }}">Voir l'article</router-link>
                    </ButtonComponent>
  
                </section>
            </transition>
        </div>
        
        <div class="pagination">
            <ButtonComponent class="paginationBtn" size="xs" @click="previousPage">Prev</ButtonComponent>
            <ButtonComponent class="paginationBtn" size="xs" @click="nextPage">Next</ButtonComponent>
        </div>

    </div>

</div>

</template>

<script>
// import du store post
import { usePostStore } from '@/store/post';

import ButtonComponent from '@/components/elements/ButtonComponent.vue';
import TagComponent from '@/components/elements/TagComponent.vue';

export default {

    name: 'ApiTpl',

    components: {
        ButtonComponent,
        TagComponent,
    },

    data () {
      return {
        pages: [],
        pagePosts: [],
        totalPosts: '',
        currentPage: 0,
        itemsPerPage: 6,
        posts:[],
      }
    },

    // gestion du store que je retourne en entier dans ce contexte : this.postStore
    setup() {

        const postStore = usePostStore()   
        return { postStore }
    },
    
    methods: {

        async getData() {

        await this.postStore.fetchPosts() 
            console.log(this.postStore.posts);  
            this.posts = this.postStore.posts
            console.log(this.posts);
            this.totalPosts = this.posts.length
            this.setPages()
            this.appendPostsToPage()
        },

        // async getJsonData() {
            
        //     await this.postStore.fetchJsonPosts()
            
        //     this.posts = this.postStore.posts
        //     this.totalPosts = this.posts.length
        //     this.setPages()
        //     this.appendPostsToPage()
        // },

        //action de pagination
        nextPage() {
            this.currentPage++;
            this.appendPostsToPage();

            if(this.currentPage === this.pages.length - 1) {
                this.currentPage = -1;
            }
        },

        previousPage() {
            this.currentPage--;
            this.appendPostsToPage();

            if(this.currentPage === this.pages.length - 1) {
                this.currentPage = -1;
            }
        },

        setPages() {

            let index = 0;
            let numberOfPages = Math.ceil(this.totalPosts / this.itemsPerPage);

            for (index; index < numberOfPages; index++) {
                this.pages.push(index); 
            }
        },

        appendPostsToPage() {
            let startIndex = this.currentPage * this.itemsPerPage;
            let endIndex = startIndex + this.itemsPerPage - 1;
            this.pagePosts = this.posts.posts.slice(startIndex, endIndex);

            // afficher masquer les boutons suivant et précédent si on est au début ou à la fin
            // this.currentPage === 0 ? this.hidePreviousButton = true : this.hidePreviousButton = false;
            // endIndex >= this.totalPosts ? this.hideNextButton = true : this.hideNextButton = false;             
        },

        filterByTag(tag){
            this.postStore.filterPost(tag);
            window.scrollTo(0, 0);
        }
    },

    async mounted() {
        this.getData();
        //this.getJsonData();
        document.title = "Posts";  
    },
}
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}

.paginationBtn {
    margin: $gutterSmall!important;
}

.postPara {
    color:$red;
    margin-bottom: $gutterSmall!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

.postBody {
    color:$darkBlack;
    margin-bottom: $gutterSmall!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

// fade 
.fade-enter-active {
  transition: opacity .7s
}
.fade-leave-active {
    opacity: 0
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>