<template>
  <div>
    <p-input disabled value="张三"></p-input>
    <p-input value="李四"></p-input>
    <p-input success value="王五"></p-input>
    <p-input error="用户名不能为空"></p-input>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Input from '../../../src/input'
  export default {
    components: {
      'p-input': Input
    },
    data() {
      return {
        content: `
          <p-input disabled value="张三"></p-input>
          <p-input value="李四"></p-input>
          <p-input success value="王五"></p-input>
          <p-input error="用户名不能为空"></p-input>
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>