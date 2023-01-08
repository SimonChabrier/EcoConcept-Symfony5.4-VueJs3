<template>
    <div>

        <div class="appHeader">

            <NavBarComp></NavBarComp>

        </div>

        <div class="main">

            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                <component :is="Component"/>
                </transition>
            </router-view>

        </div>

        <div class="appFooter">

            <FooterComp ></FooterComp>

        </div>

    </div>

</template>

<script>

import NavBarComp from '@/components/NavBar.vue'
import FooterComp from '@/components/Footer.vue'

export default {
    name: 'App',

    components: {
        NavBarComp,
        FooterComp
    }
}
</script>

<style lang="scss">

#app {
    display: flex;
    margin: 0;
    flex-direction: column;
    background: lightblue;
    min-height: 100vh;
    min-width: 100%;
}

.appHeader, .appFooter {
    color: $lightWhite;
    background: $mediumBlue;
    padding: $gutter-big;
}

.appHeader {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.main {
    padding: 50px 100px;
}

.appFooter {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

// Transition fade

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

    .flexRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    }

}






</style>