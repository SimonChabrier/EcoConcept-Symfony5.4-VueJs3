<template>
    
    <div>

        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch data from Json Placeholder</span>
        </section>

        <div v-for="post in pagePosts" :key="post.id">

            <section class="section appLight flexRow">
                <h3>{{ post.title }}</h3>

                <p class="postPara">post id : {{ post.id }} </p>
                <p class="postPara">author Id : {{ post.userId }}</p>  
                
                <p> {{ post.body }}</p>
                
                <ButtonComponent type="primary" size="sm">
                    <router-link :to="{ name: 'post_id', params: { id: post.id }}">Voir l'article</router-link>
                </ButtonComponent>
            </section>

        </div>

        <div class="pagination">
            <ButtonComponent size="xs" @click="nextPage">Prev</ButtonComponent>
            <ButtonComponent size="xs" @click="previousPage">Next</ButtonComponent>
        </div>

    </div>



</template>

<script>
// import du store post
import { usePostStore } from '@/store/post';
// import du state du store
import { storeToRefs } from "pinia";

import ButtonComponent from '@/components/elements/ButtonComponent.vue';

export default {

    name: 'ApiTpl',

    components: {
        ButtonComponent,
    },

    data () {
      return {
        //allPosts: [],
        pages: [],
        pagePosts: [],
        totalPosts: this.posts.length,
        currentPage: 0,
        itemsPerPage: 3,
      }
    },

    setup() {
        // j'apelle le store avec son nom usePostStore
        const postStore = usePostStore()
        // j'apelle le state du store pour accèder aux données toujours mises à jour
        const { posts } = storeToRefs(postStore)
        // j'apelle la fonction fetchPosts
        postStore.fetchPosts()
        // je retourne les posts pour boucler dessus
        return { posts };
    },

    methods: {

        //action de pagination
        nextPage() {
            this.currentPage++;
            this.appendPostsToPage();
        },
        previousPage() {
            this.currentPage--;
            this.appendPostsToPage();
        },
        // calculer le nombre de pages et crée un tableau avec des index de 0 à n
        setPages() {
            let index = 0;
            let numberOfPages = Math.ceil(this.totalPosts / this.itemsPerPage);
            for (index; index < numberOfPages; index++) {
                this.pages.push(index); 
            }
        },
        // ajouter les recettes à la page courante en fonction du nombre de recettes par page : itemsPerPage
        // et de la valeur de la page courante : currentPage
        appendPostsToPage() {
            let startIndex = this.currentPage * this.itemsPerPage;
            let endIndex = startIndex + this.itemsPerPage;
            this.pagePosts = this.posts.slice(startIndex, endIndex);
            
            // afficher masquer les boutons suivant et précédent si on est au début ou à la fin
            // this.currentPage === 0 ? this.hidePreviousButton = true : this.hidePreviousButton = false;
            // endIndex >= this.totalPosts ? this.hideNextButton = true : this.hideNextButton = false; 
        }

    },

    mounted() {
        

        // si j'ai des posts 
        if (this.posts.length > 0 ) {
            this.totalPosts = this.posts.length;
            this.setPages();
            this.appendPostsToPage();
        } else {
            // sinon je les récupère
            // this.fetchPosts()
        }

        console.log(this.pagePosts)
        console.log(this.posts)
    }




}
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}

.postPara {
    color:$red;
    margin-bottom: 0!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

</style>