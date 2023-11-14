<template>

        <div class="footerContent">
            <ul class="footer_ul">
                <li><a href="#">Footer link 1</a></li>
                <li><a href="#">Footer link 2</a></li>
                <li><a href="#">Footer link 3</a></li>
            </ul>
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

li a {
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: $creme!important;
    }
}

// ul li 

.footerContent {
  display: flex;
}

.footer_ul {
  display: flex;
}

.footer_ul li {
  list-style: none !important;
}



</style>