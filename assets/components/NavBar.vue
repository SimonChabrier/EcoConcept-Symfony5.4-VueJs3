<template>
    
    <div class="content">

        <nav class="navbar">

            <div class="links" id="navbarNav">
                <router-link @click="''" to="/">Home</router-link>
                <router-link to="/test">Test</router-link>
            </div>

                <form class="form">
                    <input class="input" type="search" placeholder="Rechercher" aria-label="Rechercher">
                    <button class="btn" type="submit" @click.prevent="submit()">Rechercher</button>
                </form>

        </nav>

    </div>

</template>

<script>

export default {

    name: 'NavBar',

    data() {
        return {
            //
        }
    },

    components: {
        //
    },

    methods: {
        submit() {
            console.log('submit');
        }
    }
}

</script>

<style lang="scss" scoped>

.content {
    background-color: $lightblue;
    padding: $gutter-big;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.navbar {
    background: $lightWhite;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 20px;
    gap: 10px;
    
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
            background: $mediumBlue;
            color: $lightWhite;
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



</style>