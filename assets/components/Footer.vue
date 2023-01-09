<template>

        <div class="footerContent">

        <div class="footer-col">
            <h3>Colonne 1</h3>
            <ul>
                <li><a href="#">Lien 1</a></li>
                <li><a href="#">Lien 2</a></li>
                <li><a href="#">Lien 3</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Colonne 2</h3>
            <ul>
                <li><a href="#">Lien 1</a></li>
                <li><a href="#">Lien 2</a></li>
                <li><a href="#">Lien 3</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Colonne 3</h3>
            <ul>
                <li><a href="#">Lien 1</a></li>
                <li><a href="#">Lien 2</a></li>
                <li><a href="#">Lien 3</a></li>
            </ul>
        </div>

    </div>

</template>

<script>

export default {

    name: 'FooterComponent',

    components: {
        //
    },

}
</script>

<style lang="scss" scoped>

.footerContent {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
}
.footer-col {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

li a {
    text-decoration: none;
    font-size: 1.2rem;
    margin: 10px 0;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: $creme!important;
    }

}

</style>