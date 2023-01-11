<template>

    <section v-if="postStore.results.length" class="results">
        <span class="appSpan primary">{{ postStore.results.length > 1 ? `${postStore.results.length}` + ' resultats' : `${postStore.results.length}` + ' resultat' }} </span>

        <!-- J'utilise l'index pour ne pas avoir de doublon de :key si les resultats sont affichés au dessus de la liste de post qui ont déjà une :key -->
        <div v-for="( post, index ) in postStore.results" :key="index">
            <transition name="fade" mode="out-in">
                <section class="section appDark flexRow">
                    
                    <h3>N° {{ post.id }} - {{ post.title }}</h3>
               
                    <p class="postBody">{{ post.body }}</p>

                    <p class="postPara">Exemple : {{ post.exemple }}</p> 

                    <TagComponent v-if="post.mainTag === 'front'" class="primary"> {{ post.mainTag  }}</TagComponent> 
                    <TagComponent v-if="post.mainTag === 'back'" class="danger"> {{ post.mainTag  }}</TagComponent> 

                    <ButtonComponent type="primary" size="sm" @click="resetSearch">
                        <router-link :to="{ name: 'post_id', params: { id: post.id }}">Voir l'article</router-link>
                    </ButtonComponent>
  
                </section>
            </transition>
        </div>
    </section>

    <section v-if="postStore.message" class="results">

        <span class="appSpan warning">{{ postStore.message }}</span>

    </section>

</template>

<script>

import { usePostStore } from '@/store/post';
import ButtonComponent from '@/components/elements/ButtonComponent.vue';
import TagComponent from '@/components/elements/TagComponent.vue';

export default {
    name: 'SearchResult',
    
    components: {
        ButtonComponent,
        TagComponent,
    },


    // store
    setup() {
        const postStore = usePostStore()        
        return { postStore };
    },

    methods: {
        resetSearch() {
            this.postStore.results = [];
            this.postStore.message = '';
            document.getElementById('searchInput').value = '';
        }
    },

    // je récupère les datas si le composant est monté.
    async mounted () {
        
        //this.getJsonData();
        // this.getDatas();
    }
}
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}
.results {
    padding:$gutterXBig;
    background-color: $creme;
    border-radius: $radius;
}

.postPara {
    color:$lightWhite;
    margin-bottom: $gutterSmall!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

.postBody {
    color:$lightWhite;
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