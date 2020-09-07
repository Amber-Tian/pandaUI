<template>
  <div>
    <p-button-group>
      <p-button icon="left">上一页</p-button>
      <p-button>更多</p-button>
      <p-button icon="right" class="icon-right">下一页</p-button>
    </p-button-group>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/button'
  export default {
    components: {
      'p-button-group': ButtonGroup,
      'p-button': Button
    },
    data() {
      return {
        content: `
          <p-button-group>
          <p-button icon="left">上一页</p-button>
          <p-button>更多</p-button>
          <p-button icon="right" class="icon-right">下一页</p-button>
          </p-button-group>
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>