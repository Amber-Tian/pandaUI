<template>
  <div>
    <p-layout class="layout">
      <p-header class="header">header</p-header>
      <p-content class="content">content</p-content>
      <p-footer class="footer">footer</p-footer>
    </p-layout>
    <p></p>
    <p-layout class="layout">
      <p-header class="header">header</p-header>
      <p-layout>
        <p-sider class="sider">sider</p-sider>
        <p-content class="content">content</p-content>
      </p-layout>
      <p-footer class="footer">footer</p-footer>
    </p-layout>

    <pre><code>{{content}}</code></pre>
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
    },
    data() {
      return {
        content: `
          <p-layout>
            <p-header>header</p-header>
            <p-content>content</p-content>
            <p-footer>footer</p-footer>
          </p-layout>
          <p-layout>
            <p-header>header</p-header>
            <p-layout>
              <p-sider>sider</p-sider>
              <p-content>content</p-content>
            </p-layout>
            <p-footer>footer</p-footer>
          </p-layout>
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    border: 1px solid #999;
  }
  .header {
    background: #ccc;
  }
  .content {
    background: #eee;
  }
  .sider {
    background: #666;
  }
  .footer {
    background: #aaa;
  }
</style>