<template>
    <div>

        <section class="main">
            <h1>HOME TEMPLATE</h1>
            <p>Le contenu du template vient ici</p>

        <ButTest :size="'lg'" :type="'primary'">primary</ButTest>
        <ButTest :size="'lg'" :type="'secondary'">secondary</ButTest>
        <ButTest :size="'lg'" :type="'success'">success</ButTest>
        <ButTest :size="'lg'" :type="'danger'">danger</ButTest>
        <ButTest :size="'lg'" :type="'warning'">warning</ButTest>
        <ButTest :size="'lg'" :type="'info'">info</ButTest>
        <ButTest :size="'lg'" :type="'light'">light</ButTest>
        <ButTest :size="'lg'" :type="'dark'">dark</ButTest>

        <ButTest :size="'sm'" :type="'primary'">primary</ButTest>
        <ButTest :size="'sm'" :type="'secondary'">secondary</ButTest>
        <ButTest :size="'sm'" :type="'success'">success</ButTest>
        <ButTest :size="'sm'" :type="'danger'">danger</ButTest>
        <ButTest :size="'sm'" :type="'warning'">warning</ButTest>
        <ButTest :size="'sm'" :type="'info'">info</ButTest>
        <ButTest :size="'sm'" :type="'light'">light</ButTest>
        <ButTest :size="'sm'" :type="'dark'">dark</ButTest>
    
        </section>  

    </div>
</template>

<script>

import ButTest from '../components/elements/ButTest.vue';

export default {

    name: 'HomeTpl',

    components: {
        ButTest
    },

    data() {
        return {
            //
        }
    },

    methods: {
        //
    }

}



</script>

<style lang="scss" scoped>

</style>