<template>
    <div class="mainContent">

        <div class="appHeader">

            <NavBarComp></NavBarComp>

        </div>

        

        <div class="main">
            
            <SearchResult></SearchResult>

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
import SearchResult from '@/components/elements/SearchResult.vue' 

// import { usePostStore } from '@/store/post';

export default {
    name: 'App',

    components: {
        NavBarComp,
        FooterComp,
        BannerComponent,
        BackTotop,
        SearchResult,
    },
}
</script>

<style lang="scss" scoped>

#app {
    background: $creme;
}

.mainContent {
    margin-left: auto;
 	margin-right: auto;
 	background-color: #fff;
 	min-height: 100vh;
 	flex-direction: column;
 	display: flex;
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
 	flex-grow: 1;
}


// Transition fade décommenter pour activer

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.1s ease;
}


// Transition slide

// .fade-enter-active {
//     transition: all 0.2s ease;
// }
// .fade-enter-from {
//     transform: translateX(-100%);
//     opacity: 0;
// }
// .fade-leave-active {
//     transition: all 0.2s ease;
// }

// .fade-leave-to {
//     transform: translateX(100%);
//     opacity: 0;
// }


// media queries

@media screen and (max-width: 820px) {

    .main {
        padding: 50px 20px;
    }
}






</style>