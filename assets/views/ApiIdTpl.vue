<template>
    <div>
        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch article from Json Placeholder</span>
        </section>

        <section class="section appLight flexRow">

            <h3>{{ post.title }}</h3>

            <p class="postPara">post id : {{ post.id }} </p>
            <p class="postPara">author Id : {{ post.userId }}</p>  
            
            <p> {{ post.body }}</p>
            
            <ButtonComponent type="primary" size="sm">
                <router-link :to="{ name: 'home'}">Home</router-link>
            </ButtonComponent>
        </section>
    </div>
</template>

<script>

// import du store post
import { usePostStore } from '@/store/post';
// import du state du store
import { storeToRefs } from "pinia";
// import de la route pour récupérer l'id de l'article
import { useRoute } from 'vue-router'

import ButtonComponent from '@/components/elements/ButtonComponent.vue';


export default {

    name:'ApiIdTpl',

    components: {
        ButtonComponent,
    },

    data() {
        return {
            id: this.$route.params.id,
        }
    },

    setup() {
        // j'apelle le store avec son nom usePostStore
        const postStore = usePostStore()
        // j'apelle le state du store pour accèder aux données toujours mises à jour
        const { post } = storeToRefs(postStore)
        // j'apelle la route pour récupérer l'id
        const route = useRoute() 
        // j'apelle la fonction fetchPosts
        postStore.fetchPost(route.params.id)
        // je retourne les posts pour boucler dessus
        return { post };
    },

    mounted() {
        document.title = `Article ${this.post.title}}`;
    }
}


</script>

<style lang="scss" scoped>

.postPara {
    color:$red;
    margin-bottom: 0!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

</style>