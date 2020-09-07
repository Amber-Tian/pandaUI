<template>
  <div>
    <p-input success></p-input>
    <p-input error="输入内容不合规范"></p-input>
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