<template>
    <div>

        <div class="header">

            <NavBarComp></NavBarComp>

        </div>

        <div class="content">

            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                <component :is="Component"/>
                </transition>
            </router-view>

        </div>

        <div class="footer">

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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 2rem!important;
    margin: $gutter-big!important;
}

h2 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1.3rem!important;
    margin: $gutter-big!important;
}

h3 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1.1rem!important;
    margin: $gutter-medium!important;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: $lightWhite!important;
    &:hover {
        color: $orange!important;
    }
}

p {
    font-size: 1.2rem!important;
    font-weight: 200!important;
    line-height: 30px!important;
}

#app {
    display: flex;
    margin: 0;
    flex-direction: column;
    background: lightblue;
    min-height: 100vh;
    min-width: 100%;
}

.header, .footer {
    color: $lightWhite;
    background: $mediumBlue;
    padding: $gutter-big;
}


.header {
    justify-content: center;
    align-items: center;
}

.content {
    //position: relative;
    padding: 50px 100px;
}

.footer {
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






</style>