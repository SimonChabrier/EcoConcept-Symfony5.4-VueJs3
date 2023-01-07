<template>
    
    <transition name="fade" mode="out-in">
        <div v-if="showContent">
            <div class="main">
                <h1>TEST TEMPLATE</h1>
                <p>Le contenu du template vient ici</p>
            </div>  
        </div>
    </transition>

</template>

<script>
export default {
  data() {
    return {
      showContent: true
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
    background-color: $mediumBlue;
    padding: $gutter-big;
    text-align: center;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}


</style>