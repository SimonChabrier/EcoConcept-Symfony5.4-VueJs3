<template>
    <div class="tag" :class="color" @click="onClick()">
        <slot></slot>
    </div>
</template>

<script>
export default {

    name: 'TagComponent',

    props: {
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
        onClick(event) {
        this.$emit('click', event);
        console.log('click');
      },
    }

}
</script>

<style lang="scss" scoped>

.tag {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 25px 0 25px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  border: none !important;
  width: fit-content;
  cursor: pointer;
  transition: $transition-slow;

    &:hover {
        transform: scale(1.05);
        transition: $transition-fast;
    }

    &::before {
        background: $lightWhite;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        left: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }
    &::after {
        background: $lightWhite;
        border-radius: 10px;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
        content: '';
        height: 6px;
        right: 10px;
        position: absolute;
        width: 6px;
        top: 10px;
    }

}



</style>