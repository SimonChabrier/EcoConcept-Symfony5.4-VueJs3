<template>

    <section v-if="postStore.results.length">
        <span class="appSpan primary">Resultats de recherche</span>

        <div v-for="( post, index ) in postStore.results" :key="index">
            <transition name="fade" mode="out-in">
                <section class="section appDark flexRow">
                    
                    <h3>N° {{ post.id }} - {{ post.title }}</h3>
               
                    <p class="postBody">{{ post.body }}</p>

                    <p class="postPara">Exemple : {{ post.exemple }}</p> 
                    <TagComponent color="dark">{{ post.tag }}</TagComponent> 
                    <ButtonComponent type="primary" size="sm" @click="resetSearch">
                        <router-link :to="{ name: 'post_id', params: { id: post.id }}">Voir l'article</router-link>
                    </ButtonComponent>
  
                </section>
            </transition>
        </div>
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
        resetSearch() {
            this.postStore.results = [];
            const input = document.getElementById('searchInput');
            input.value = '';
        }
    },

    // je récupère les datas si le composant est monté.
    async mounted () {
        this.getJsonData();
    }
}
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
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