<template>
    

        <nav class="navbar">

            <div>


                    <router-link @click="''" to="/">Home</router-link>

                    <router-link @click="''" to="/test">Test</router-link>


            </div>

                <form class="form">
                    <input class="input" type="search" placeholder="Rechercher" aria-label="Rechercher">
                    <button class="btn" type="submit" @click.prevent="submit()">Rechercher</button>
                </form>

        </nav>


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
    justify-content: space-between;
    align-items: center;
    height: 100px;

    a {
        color: $mediumBlack;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 10px 20px;
        margin: 0 5px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            color: $red;
            box-shadow: $shadow-light;
        }
        &::before {
            content: "➜";
            margin-right: 5px;
        }
    }
}
.form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
}

.input {
    padding: 10px;
    border: none;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    width: 250px;
}

.btn {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: $green;
    color: white;
    cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
}



</style>