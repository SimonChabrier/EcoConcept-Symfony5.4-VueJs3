<template>
    <div class="card" :class="color">
            <h3>{{ title }}</h3>
            <p>
                <slot></slot>
            </p>
    </div>
</template>

<script>
export default {

    name: 'CardComponent',

    props: {
        title: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: 'dark',
        }
    },

    data() {
        return {
            //
        }
    },

    components: {
        //
    },

    methods: {
        //
    }

}
</script>

<style lang="scss" scoped>

.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 46%;
    border-radius: $radiusBig;
    position: relative;
    padding: $gutterBig!important;
    margin: $gutterMedium !important;

    & h3 {

        margin-bottom: 0!important;

        &::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: $lightWhite;
            top: 52px;
            left: 24px;
            border-radius: 50%;
        }
    }

    & p {

        //padding: 0 $gutterBig $gutterBig $gutterBig!important;
        //margin: $gutterBig $gutterBig 0 $gutterBig!important;
        
        font-size: 1rem!important;
        line-height: 25px!important;
    }
}


@media screen and (max-width: 820px) {

    .card {
        max-width: 100%;
    }
}

</style>