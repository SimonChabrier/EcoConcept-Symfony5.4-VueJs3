<template>
  
  <div class="avatar">
    <img :src="image">
    <span :class="{ 'active-icon': isActive, 'inactive-icon': !isActive }"></span>
     {{ username }}
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
    },

    data() {
        return {
        isActive: this.active,
        inactive: false,
        };
    },

}
</script>

<style lang="scss" scoped>

.avatar {
    display: flex;
    padding: 16px;
    position: relative;
    flex-direction: column;
    align-items: center;
  
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: $gutter-small;
  }
  
  & > .active-icon {
    position: absolute;
    width: 32px;
    height: 32px;
    background:$green;
    border-radius: 50%;
    left: 16px;
    border: 4px solid $lightWhite;
  }

  & > .inactive-icon {
    position: absolute;
    width: 32px;
    height: 32px;
    background:$red;
    border-radius: 50%;
    left: 16px;
    border: 4px solid $lightWhite;
  }

}

</style>