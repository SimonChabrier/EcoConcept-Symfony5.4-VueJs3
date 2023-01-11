<template>
    <div>
        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch article from Json File</span>
        </section>

        <section class="section appLight flexRow" v-if="postStore.post.post">

            <h3>{{ postStore.post.post.title }}</h3>

            <p class="postBody">{{ postStore.post.post.body }}</p>
            <p class="postPara">Exemple : {{ postStore.post.post.exemple }}</p> 

            <TagComponent v-if="postStore.post.post.mainTag === 'front'" class="primary" @click="filterByTag('front')"> {{ postStore.post.post.mainTag  }} </TagComponent> 
            <TagComponent v-if="postStore.post.post.mainTag === 'back'" class="danger" @click="filterByTag('back')"> {{ postStore.post.post.mainTag  }}</TagComponent> 
            
            <ButtonComponent type="primary" size="sm" @click="previousPage">
                Retour
            </ButtonComponent>
        </section>
    </div>
</template>

<script>

// import du store post
import { usePostStore } from '@/store/post';
import ButtonComponent from '@/components/elements/ButtonComponent.vue';
import TagComponent from '@/components/elements/TagComponent.vue';



export default {

    name:'ApiIdTpl',

    components: {
        ButtonComponent,
        TagComponent,
    },

    data() {
        return {
         post:''
        }
    },

    // store
    setup() {
        const postStore = usePostStore()
        return { postStore };
    },

    methods: {
        previousPage() {
            this.$router.push({ name: 'api' })
        },

        // async getJsonData () {
        //     await this.postStore.findPost(parseInt(this.$route.params.id))
        //     document.title = `Article : ${this.postStore.post.title[0].toUpperCase() + this.postStore.post.title.substring(1)}`;
        // }

        async getApiData() {
            await this.postStore.fetchPost(parseInt(this.$route.params.id))
            document.title = `Article : ${this.postStore.post.post.title[0].toUpperCase() + this.postStore.post.post.title.substring(1)}`;
        },

        filterByTag(tag){
            this.postStore.filterPost(tag);
            window.scrollTo(0, 0);
        }

    },

    async mounted() {
        this.getApiData();
        //this.getJsonData();
    }
}


</script>

<style lang="scss" scoped>

.postPara {
    color:$red;
    margin-bottom: $gutterSmall!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}
.postBody {
    color:$darkBlack;
    margin-bottom: $gutterSmall!important;
    padding-bottom: 0!important;
    padding-top: 0!important;
}
</style>