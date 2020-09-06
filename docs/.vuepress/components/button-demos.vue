<template>
  <div>
    hello world
    <p-popover>
      <div slot="content" slot-scope="{close}">
        内容
        <p-button @click="close">关闭</p-button>
      </div>
      <button>点击</button>
    </p-popover>
<!--    <p-button>默认按钮</p-button>-->
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  export default {
    components: {
      'p-popover': Popover
    }
  }
</script>