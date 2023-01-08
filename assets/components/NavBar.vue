<template>
    
        <nav class="navbar">

                <router-link @click="''" to="/">Home</router-link>
                <router-link @click="''" to="/test">Test</router-link>

        </nav>

        <form class="searchForm">
            <input class="input" type="search" placeholder="Rechercher" aria-label="Rechercher">
            <button class="btn" type="submit" @click.prevent="submit()">Rechercher</button>
        </form>

</template>

<script>


export default {

    name: 'NavBar',

    data() {
        return {
            toggle: false
        }
    },

    components: {
        //
    },

    methods: {
        submit() {
            console.log('submit');
        },
    }
}

</script>

<style lang="scss" scoped>

.navbar {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    a {
        color: $lightWhite;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 10px 20px;
        margin: 0 15px;
        border-radius: 5px;
        cursor: pointer;
        border : 1px solid transparent;
        position: relative;
        transition: $transition;

        &:hover::before {
            transition: $transition;
            //top: 7px;
            background-color: $green;
            
        }
        &::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: $lightWhite;
            top: 12px;
            left: 0px;
            transition: $transition;
            border-radius: 50%;
        }
    }
}
.searchForm {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: auto;
    transition: $transition;
    
    &:focus-within {
        box-shadow: $shadow-Xlight;
    }
}

.input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    min-width: 250px;
}

.btn {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: $darkBlue;
    color: $lightWhite;
    cursor: pointer;
    box-shadow: none!important;
}

</style>