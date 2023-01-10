<template>
    
    <div :class="['banner', color]">
        {{ text }}
    </div>

</template>

<script>
export default {

    name: 'BannerComponent',

    components: {
        //
    },

    props: {
        text: {
            type: String,
            default: "© 2022 - Tous droits réservés"
        },
        color: {
            type: String,
            default: "dark"
        }
    }

}
</script>

<style lang="scss" scoped>
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $gutterSmall;
}
</style>