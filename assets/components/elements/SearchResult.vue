<template>

  <div class="main" v-if="postStore.results.length">
            <section class="section appLight flexRow" >
                <span class="appSpan">Resultats de recherche</span>
                
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
        </div>

</template>

<script>

import { usePostStore } from '@/store/post';
import ButtonComponent from '@/components/elements/ButtonComponent.vue';


export default {
    name: 'SearchResult',
    
    components: {
        ButtonComponent,
    },
    // store
    setup() {
        const postStore = usePostStore()
        // je souscrit aux mutations du store pour avoir les infos dynamiquement
        postStore.$subscribe((mutation) => {
        mutation.type // 'direct' | 'patch object' | 'patch function'
        })
        
        return { postStore };
    },

    methods: {
        async getJsonData() {
            await this.postStore.fetchJsonPosts()
            console.log(this.postStore.posts);
        },
    },
    // je récupère les datas si le composant est monté.
    async mounted () {
        this.getJsonData();
    }
}
</script>

<style>

</style>