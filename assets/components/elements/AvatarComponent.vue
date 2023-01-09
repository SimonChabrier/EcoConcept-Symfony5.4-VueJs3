<template>

<div :class="['avatar', size]">
   
    <span :class="{ 'active-icon': isActive, 'inactive-icon': !isActive }"></span>
    <img :src="image"> 

    <div class="username">
        {{ username.length > 10 ? username.substring(0, 10) + "..." : username }} 
    </div>

</div>

</template>

<script>
export default {

    name: 'AvatarComponent',
    
    props: {
        active: {
        type: Boolean,
        default: false,
        },
        image: {
        type: String,
        default: "https://picsum.photos/seed/picsum/150/150",
        },
        username: {
        type: String,
        default: "Username",
        },
        size: {
        type: String,
        default: '',
        validator: (value) => ['xs', 'lg', 'sm'].includes(value),
      },
    },

    data() {
        return {
        isActive: this.active,
        inactive: false,
        };
    },
    methods: {
        //
    },

    computed: {
        // active icon auto change
        activeIcon() {
            if (this.isActive) {
                return "active-icon";
            } else {
                return "inactive-icon";
            }
        },
    },

}
</script>

<style lang="scss" scoped>

.avatar, .lg, .sm, .xs {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: $gutterSmall;
  
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  & > .active-icon {
    position: absolute;
    width: 20%;
    height: 20%;
    background:$green;
    border-radius: 50%;
    left: 16px;
    border: 3px solid $lightWhite;
  }

  & > .inactive-icon {
    position: absolute;
    width: 20%;
    height: 20%;
    background:$red;
    border-radius: 50%;
    left: 16px;
    border: 3px solid $lightWhite;
  }

}

.username {
    text-transform: capitalize;
}
.lg {
  width: 140px;
  height: 140px;
}

.sm {
    width: 110px;
    height: 110px;
}

.xs {
    width: 85px;
    height: 85px
}

</style>