<template>
  <div>
    <p-input placeholder="请输入内容"></p-input>
    <p-input></p-input>
  </div>
</template>

<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'p-input': Input
    }
  }
</script>