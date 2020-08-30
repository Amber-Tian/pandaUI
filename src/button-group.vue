<template>
  <div class="p-button-group">
    <slot />
  </div>
</template>

<script>
  export default {
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.log(`p-button-group 的子元素应该全部是 p-button, 但是你写的是 ${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'var';
  .p-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .p-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>