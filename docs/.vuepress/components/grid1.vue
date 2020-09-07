<template>
  <div>
    <p-row class="row">
      <p-col class="col" span="24">col-24</p-col>
    </p-row>
    <p-row class="row">
      <p-col class="col" span="12">col-12</p-col>
      <p-col class="col" span="12">col-12</p-col>
    </p-row>
    <p-row class="row">
      <p-col class="col" span="8">col-8</p-col>
      <p-col class="col" span="8">col-8</p-col>
      <p-col class="col" span="8">col-8</p-col>
    </p-row>
    <p-row class="row">
      <p-col class="col" span="6">col-6</p-col>
      <p-col class="col" span="6">col-6</p-col>
      <p-col class="col" span="6">col-6</p-col>
      <p-col class="col" span="6">col-6</p-col>
    </p-row>
    <p-row class="row">
      <p-col class="col" span="4">col-4</p-col>
      <p-col class="col" span="4">col-4</p-col>
      <p-col class="col" span="4">col-4</p-col>
      <p-col class="col" span="4">col-4</p-col>
      <p-col class="col" span="4">col-4</p-col>
      <p-col class="col" span="4">col-4</p-col>
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
  .row {height: 36px; margin-bottom: 16px;}
  .col {background: #e5e9f2; border-radius: 10px;
    text-align: center; line-height: 36px; color: #999;}
</style>