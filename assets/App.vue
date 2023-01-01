<template>
    <div id="app">
        <NavBarComp></NavBarComp>
        <router-view></router-view>
        <FooterComp></FooterComp>
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

#app {
    background-color:$red;
}

h1 {
    font-size: 2em;
    text-align: center;
    color: #2c3e50;
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
    color: $green;
}





</style>