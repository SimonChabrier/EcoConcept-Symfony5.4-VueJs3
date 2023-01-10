<template>
    <div>
        <section class="section appLight flexRow">
            <span class="appSpan fill">Fetch article from Json File</span>
        </section>

        <section class="section appLight flexRow">

            <h3>{{ postStore.post.title }}</h3>

            <p class="postBody">{{ postStore.post.body }}</p>
            <p class="postPara">Exemple : {{ postStore.post.exemple }}</p> 

            <TagComponent v-if="postStore.post.tag === 'front'" class="primary"> {{ postStore.post.tag  }}</TagComponent> 
            <TagComponent v-if="postStore.post.tag === 'back'" class="danger"> {{ postStore.post.tag  }}</TagComponent> 
            
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
           //
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

        async getJsonData () {
            await this.postStore.findPost(parseInt(this.$route.params.id))
            document.title = `Article : ${this.postStore.post.title[0].toUpperCase() + this.postStore.post.title.substring(1)}`;
        }

        // async getApiData() {
        //     await this.postStore.fetchPost()
        //     document.title = `Article : ${this.postStore.post.title[0].toUpperCase() + this.postStore.post.title.substring(1)}`;
        // },

    },

    async mounted() {
        //this.getApiData();
        this.getJsonData();
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