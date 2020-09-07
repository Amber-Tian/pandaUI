<template>
  <div class="div">
    <p-input disabled value="不可编辑"></p-input>
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