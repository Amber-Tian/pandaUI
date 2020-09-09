<template>
  <div class="wrapper">
    <p-button @click="open1">顶部提示</p-button>
    <p-button @click="open2">中间提示</p-button>
    <p-button @click="open3">底部提示</p-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import Toast from '../../../src/toast'
  import pluginToast from '../../../src/pluginToast'
  import Vue from 'vue'
  Vue.use(pluginToast)

  export default {
    components: {
      'p-button': Button,
      'p-toast': Toast
    },
    methods: {
      open1() {
        this.$toast('顶部的消息提示', {
          closeText: '关闭',
          autoClose: 5
        })
      },
      open2() {
        this.$toast('中间的消息提示', {
          position: 'middle',
          closeText: '知道了',
          autoClose: 5
        })
      },
      open3() {
        this.$toast('底部的消息提示', {
          position: 'bottom',
          closeText: '好的',
          autoClose: 5
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    border: 1px solid #ddd;
    padding: 16px;
    > :nth-child(n) {margin-right: 8px;}
  }
</style>