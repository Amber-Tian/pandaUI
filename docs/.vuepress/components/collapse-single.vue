<template>
  <div>
    <p-collapse single :selected.sync="selectedArray">
      <p-collapse-item name="1" title="title1">content1</p-collapse-item>
      <p-collapse-item name="2" title="title2">content2</p-collapse-item>
      <p-collapse-item name="3" title="title3">content3</p-collapse-item>
    </p-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse/collapse'
  import CollapseItem from '../../../src/collapse/collpase-item'

  export default {
    components: {
      'p-collapse': Collapse,
      'p-collapse-item': CollapseItem
    },
    data() {
      return {
        selectedArray: ['1']
      }
    }
  }
</script>