<template>
    <div>

        

        <div class="appHeader">

            <NavBarComp></NavBarComp>

        </div>

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


        <div v-else class="main">

            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                <component :is="Component"/>
                </transition>
            </router-view>

        </div>

        <div class="appFooter">

            <FooterComp ></FooterComp>

        </div>

        
        <BannerComponent text="© 2022 - Tous droits réservés" color="success" />

    </div>
    <BackTotop></BackTotop>
</template>

<script>

import NavBarComp from '@/components/NavBar.vue'
import FooterComp from '@/components/Footer.vue'
import BannerComponent from '@/components/elements/BannerComponent.vue'
import BackTotop from '@/components/elements/BackTotop.vue'

import { usePostStore } from '@/store/post';

export default {
    name: 'App',
    results: '',

     // store
     setup() {
        const postStore = usePostStore()
        postStore.$subscribe((mutation) => {
        mutation.type // 'direct' | 'patch object' | 'patch function'
        })
        return { postStore };
    },

    components: {
        NavBarComp,
        FooterComp,
        BannerComponent,
        BackTotop,
    },
    methods: {
        async getJsonData() {
            await this.postStore.fetchJsonPosts()
        },
    },
    computed: {
        results() {
            return this.postStore.results
        }
    },
    async mounted () {
        this.getJsonData();
    }
}
</script>

<style lang="scss">

#app {
    background: $creme;
}

.appHeader, .appFooter {
    color: $lightWhite;
    background: $mediumBlue;
    padding: $gutterBig;
}

.appHeader {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.main {
    padding: 50px 70px;
    //min-height: 76.5vh;
}


// Transition fade décommenter pour activer

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease;
// }
// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
//   transition: opacity 0.1s ease;
// }


// Transition slide

.fade-enter-active {
    transition: all 0.2s ease;
}
.fade-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}


// media queries

@media screen and (max-width: 820px) {

    .main {
        padding: 50px 20px;
    }
}






</style>