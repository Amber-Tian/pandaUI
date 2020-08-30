<template>
  <svg class="p-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    props: ['name']
  }
</script>

<style lang="scss" scoped>
  .p-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
  }
</style>