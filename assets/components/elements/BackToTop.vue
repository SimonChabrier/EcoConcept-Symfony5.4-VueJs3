<template>
  
  <transition name="fade">
    <div id="pagetop" class="position" v-show="scY > 500" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
           stroke="#4a5568"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </transition>

</template>

<script>

export default {

    name: 'BackToTop',

    data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },

}
</script>

<style lang="scss">

.position {

    position: fixed;
    bottom: 400px;
    right: 18px;
    z-index: 1000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $lightWhite;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: $transition-slow;
    
    svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: $darkGray;
        stroke-width: 1;
        stroke-linecap: square;
        stroke-linejoin: arcs;
    }
    
    &:hover {
        transform: scale(1.05);
        transition: $transition-fast;
    }
}

</style>