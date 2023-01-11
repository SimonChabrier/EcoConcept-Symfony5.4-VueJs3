<template>
    
        <nav class="navbar">

                <router-link @click="''" to="/">App Elements</router-link>
                <router-link @click="''" to="/article">Article Exemple</router-link>
                <router-link @click="''" to="/api">API Get</router-link>

        </nav>

        <form class="searchForm">
            <input class="input" id="searchInput" type="search" placeholder="Rechercher" aria-label="Rechercher" v-model="searchValue" @input="search()">
            <button class="btn" type="submit" @click.prevent="reset()">Reset</button>
        </form>

</template>

<script>

import { usePostStore } from '@/store/post';

export default {

    name: 'NavBar',

    data() {
        return {
            toggle: false,
            searchValue: '',
        }
    },

    // store
    setup() {
        const postStore = usePostStore()
        return { postStore };
    },

    components: {
        //
    },

    computed: {

    },

    methods: {

        reset() {
            console.log('reset search');
            const input = document.getElementById('searchInput');
            input.value = '';
            this.postStore.results = [];
        },

        // on gère le chnagement du state en fonciton de la recher ici et l'affichage des résultats dans le template App.vue
        search(){
            if(!this.searchValue) {
                this.postStore.results = [];
                this.postStore.message = '';
                return;
            }
            if(this.searchValue.length > 1 && this.postStore.results.length === 0) {
                this.postStore.message = 'Pas de résultat !';
            }
            this.postStore.results = this.postStore.posts.posts.filter((post) => {
                return post.body.toLowerCase().includes(this.searchValue.toLowerCase());
            });   
        },

        // async getJsonData() {
        //     await this.postStore.fetchJsonPosts()
        // },

        async getDatas(){
            await this.postStore.fetchPosts()
            console.log(this.postStore.posts);
        }
    },

    async mounted(){
        
        //this.getJsonData();
        this.getDatas();
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
            background-color: $orange;
            
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
    //box-shadow: none!important;
}

// media queries

@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;
        height: auto;
        padding: 0!important;
        margin: $gutterMedium 0 0 0!important;
    }
    .searchForm {
        flex-direction: column;
        align-items: center;
        padding: 0!important;
        margin: $gutterMedium 0 0 0!important;
    }
    .input {
        margin-right: 0;
        margin-bottom: 10px;
    }
    .btn {
        width: -webkit-fill-available;
        margin: 0 0 $gutterMedium 0!important;
        padding: 12px;
    }
}

</style>