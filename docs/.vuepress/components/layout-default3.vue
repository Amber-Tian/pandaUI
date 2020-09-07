<template>
  <div class="wrapper">
    <p-layout>
      <p-header class="header">header</p-header>
      <p-layout>
        <p-sider class="sider">sider</p-sider>
        <p-content class="content">content</p-content>
        <p-sider class="sider">sider</p-sider>
      </p-layout>
      <p-footer class="footer">footer</p-footer>
    </p-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/layout/layout'
  import Header from '../../../src/layout/header'
  import Footer from '../../../src/layout/footer'
  import Sider from '../../../src/layout/sider'
  import Content from '../../../src/layout/content'
  export default {
    components: {
      'p-layout': Layout,
      'p-header': Header,
      'p-footer': Footer,
      'p-sider': Sider,
      'p-content': Content
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 40px;
    text-align: center;
  }
  .header {
    background: #b3c0d1;
    height: 60px;
    line-height: 60px;
  }
  .content {
    background: #e9eef3;
    height: 200px;
    line-height: 200px;
  }
  .sider {
    background: #d3dce6;
    height: 200px;
    line-height: 200px;
    width: 25%;
  }
  .footer {
    background: #b3c0d1;
    height: 60px;
    line-height: 60px;
  }
</style>