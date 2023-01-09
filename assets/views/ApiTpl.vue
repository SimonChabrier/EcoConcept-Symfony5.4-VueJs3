<template>
    
    <div>

        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch data from Json Placeholder</span>
        </section>

        <div v-for="post in posts" :key="post.id">

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