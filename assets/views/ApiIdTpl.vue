<template>
    <div>
        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch article from Json Placeholder</span>
        </section>

        <section class="section appLight flexRow">

            <h3>{{ postStore.post.title }}</h3>

            <p class="postPara">post id : {{ postStore.post.id }} </p>
            <p class="postPara">author Id : {{ postStore.post.userId }}</p>  
            
            <p> {{ postStore.post.body }}</p>
            
            <ButtonComponent type="primary" size="sm" @click="back">
                Retour
            </ButtonComponent>
        </section>
    </div>
</template>

<script>

// import du store post
import { usePostStore } from '@/store/post';
// import du state du store
// import { storeToRefs } from "pinia";
// import de la route pour récupérer l'id de l'article
// import { useRoute } from 'vue-router'

import ButtonComponent from '@/components/elements/ButtonComponent.vue';


export default {

    name:'ApiIdTpl',

    components: {
        ButtonComponent,
    },

    data() {
        return {
           //
        }
    },

    setup() {
 
        const postStore = usePostStore()
        return { postStore };
    },

    methods: {
        back() {
            this.$router.push({ name: 'api' })
        },
        async getDatas() {
            await this.postStore.fetchPost(this.$route.params.id)
        }
    },

    async mounted() {
        this.getDatas();
        document.title = `Article ${this.postStore.post.title}`;
    }
}


</script>

<style lang="scss" scoped>

.postPara {
    color:$red;
    margin-bottom: 0!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

</style>