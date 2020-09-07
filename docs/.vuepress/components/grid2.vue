<template>
  <div>
    <p-row class="row" gutter="40">
      <p-col span="12"><div class="colIn">col-12</div></p-col>
      <p-col span="12"><div class="colIn">col-12</div></p-col>
    </p-row>
    <p-row class="row" gutter="30">
      <p-col span="8"><div class="colIn">col-8</div></p-col>
      <p-col span="8"><div class="colIn">col-8</div></p-col>
      <p-col span="8"><div class="colIn">col-8</div></p-col>
    </p-row>
    <p-row class="row" gutter="20">
      <p-col span="6"><div class="colIn">col-6</div></p-col>
      <p-col span="6"><div class="colIn">col-6</div></p-col>
      <p-col span="6"><div class="colIn">col-6</div></p-col>
      <p-col span="6"><div class="colIn">col-6</div></p-col>
    </p-row>
    <p-row class="row" gutter="10">
      <p-col span="4"><div class="colIn">col-4</div></p-col>
      <p-col span="4"><div class="colIn">col-4</div></p-col>
      <p-col span="4"><div class="colIn">col-4</div></p-col>
      <p-col span="4"><div class="colIn">col-4</div></p-col>
      <p-col span="4"><div class="colIn">col-4</div></p-col>
      <p-col span="4"><div class="colIn">col-4</div></p-col>
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
  .row {height: 36px; margin-bottom: 16px;}
  .colIn {background: #e5e9f2; border-radius: 10px;
    text-align: center; line-height: 36px; color: #999;}
</style>