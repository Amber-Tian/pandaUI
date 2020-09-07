<template>
  <div>
    <p-row class="row" gutter="20">
      <p-col span="24"
          pad="12"
          small-pc="8"
          pc="4"
          big-pc="2">
        <div class="colIn">first</div>
      </p-col>
      <p-col span="24"
          pad="12"
          small-pc="16"
          pc="20"
          big-pc="22">
        <div class="colIn">second</div>
      </p-col>
    </p-row>
  </div>
</template>

<script>
  import Row from '../../../src/grid/row'
  import Col from '../../../src/grid/col'

  export default {
    components: {
      'p-row': Row,
      'p-col': Col
    }
  }
</script>

<style scoped lang="scss">
  * {box-sizing: border-box;}
  .row {height: 36px; margin-bottom: 70px;}
  .col {margin-top: 10px;}
  .colIn {background: #e5e9f2; border-radius: 10px;
    text-align: center; line-height: 36px; color: #999;}
</style>