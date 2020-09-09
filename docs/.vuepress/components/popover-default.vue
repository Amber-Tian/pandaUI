<template>
  <div class="wrapper">
    <p-popover>
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
    <p-popover trigger="click">
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>click激活</p-button>
    </p-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    components: {
      'p-popover': Popover,
      'p-button': Button
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    border: 1px solid #ddd;
    padding: 16px;
    > :nth-child(n) {margin-right: 8px;}
  }
  p {font-size: 14px; color: #333;}
</style>