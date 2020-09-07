<template>
  <div>
    <p-input type="password" placeholder="请输入密码"></p-input>
    <p-input type="date"></p-input>
    <p-input type="number" placeholder="请输入数字"></p-input>
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