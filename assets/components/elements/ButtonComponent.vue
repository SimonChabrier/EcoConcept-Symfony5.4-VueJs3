<template>
    <button :class="[type, size]">
      <slot></slot>
    </button>
  </template>

  <script>
  export default {
    name: 'ButtonComponent',
    props: {
      type: {
        type: String,
        default: 'success',
        validator: (value) => [
          'primary', 
          'secondary', 
          'success', 
          'danger', 
          'warning', 
          'info', 
          'light', 
          'dark'].includes(value),
      },
      size: {
        type: String,
        default: '',
        validator: (value) => ['xs', 'lg', 'sm'].includes(value),
      },
    },
    methods: {
      // click() {
      //   this.$emit('click');
      // },
    },
  };
  </script>
  
  <style lang="scss" scoped>

button {
    border: 1px solid transparent;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
    margin: $gutterSmall $gutterBig $gutterSmall $gutterBig;
    border: none;
    color: $lightWhite;
    transition: $transition-slow;
    max-width: fit-content;

    // cliqué
    &:focus {
        outline: none;
        background: $orange;
    }

    // survol
    &:hover {
        transform: scale(1.05);
        transition: $transition-fast;
    }
}
  
.primary {
background-color: $mediumBlue;
}

.secondary {
background-color: $darkGray;
}

.success {
background-color: $green;
}

.danger {
background-color: $red;
}

.warning {
  color: $darkBlack;
  background-color: $yellow;

  &:focus {
        color: $lightWhite;
    }
}

.info {
  background-color: $azure;
}

.light {
  color: $darkBlack;
  background-color: $lightWhite;

  &:focus {
        color: $lightWhite;
    }
}

.dark {
  background-color: $mediumBlack;
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

  