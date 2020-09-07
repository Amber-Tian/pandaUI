<template>
  <div>
    <p-button loading>加载中</p-button>
    <p-button :loading="loading1" @click="loading1=!loading1">点击加载</p-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'p-button': Button
    },
    data() {
      return {
        loading1: false
      }
    }
  }
</script>