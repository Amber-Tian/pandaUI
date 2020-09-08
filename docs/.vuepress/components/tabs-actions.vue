<template>
  <div class="wrapper">
    <p-tabs selected="tab1">
      <p-tabs-head>
        <p-tabs-item name="tab1">tab1</p-tabs-item>
        <p-tabs-item name="tab2">tab2</p-tabs-item>
        <p-tabs-item name="tab3">tab3</p-tabs-item>
        <template slot="actions">
          <p-button icon="setting">设置</p-button>
        </template>
      </p-tabs-head>
      <p-tabs-body>
        <p-tabs-pane name="tab1">content1</p-tabs-pane>
        <p-tabs-pane name="tab2">content2</p-tabs-pane>
        <p-tabs-pane name="tab3">content3</p-tabs-pane>
      </p-tabs-body>
    </p-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs/tabs'
  import TabsHead from '../../../src/tabs/tabs-head'
  import TabsBody from '../../../src/tabs/tabs-body'
  import TabsItem from '../../../src/tabs/tabs-item'
  import TabsPane from '../../../src/tabs/tabs-pane'
  import Button from '../../../src/button'

  export  default {
    components: {
      'p-tabs': Tabs,
      'p-tabs-head': TabsHead,
      'p-tabs-body': TabsBody,
      'p-tabs-item': TabsItem,
      'p-tabs-pane': TabsPane,
      'p-button': Button
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    border: 1px solid #eee;
    box-shadow: 0 0 3px #ddd;
    padding: 20px;
  }
</style>