<template>
  <div>
    <p-button icon="setting">按钮</p-button>
    <p-button icon="setting" class="icon-right">按钮</p-button>
    <p-button loading>按钮</p-button>
    <p-button disabled>按钮</p-button>

    <pre><code>{{content}}</code></pre>
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
        content: `
          <p-button icon="setting">按钮</p-button>
          <p-button icon="setting" class="icon-right">按钮</p-button>
          <p-button loading>按钮</p-button>
          <p-button disabled>按钮</p-button>
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>