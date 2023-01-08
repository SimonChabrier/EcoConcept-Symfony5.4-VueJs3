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
            default: 'primary',
        },
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

.lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.xs {
  padding: .1rem .5rem;
  font-size: .75rem;
  line-height: 1.5;
  border-radius: .2rem;
}


</style>