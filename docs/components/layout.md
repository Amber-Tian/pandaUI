---
title: Layout - 布局
---

# Layout - 布局

用于布局的容器组件，方便快速搭建页面的基本结构：

`<p-layout>`：外层容器。当子元素中包含 `<p-sider>` 时，全部子元素会水平左右排列，否则会垂直上下排列。

`<p-header>`：顶栏容器。

`<p-sider>`：侧边栏容器。

`<p-content>`：主要区域容器。

`<p-footer>`：底栏容器。

请根据需求自行设置容器的宽高等样式。

### 常见页面布局

  <ClientOnly>
  <layout-default></layout-default>
  </ClientOnly>

    <p-layout>
      <p-header class="header">header</p-header>
      <p-content class="content">content</p-content>
      <p-footer class="footer">footer</p-footer>
    </p-layout>

  <ClientOnly>
  <layout-default2></layout-default2>
  </ClientOnly>

    <p-layout>
      <p-header class="header">header</p-header>
      <p-layout>
        <p-sider class="sider">sider</p-sider>
        <p-content class="content">content</p-content>
      </p-layout>
      <p-footer class="footer">footer</p-footer>
    </p-layout>

  <ClientOnly>
  <layout-default3></layout-default3>
  </ClientOnly>

    <p-layout>
      <p-header class="header">header</p-header>
      <p-layout>
        <p-sider class="sider">sider</p-sider>
        <p-content class="content">content</p-content>
        <p-sider class="sider">sider</p-sider>
      </p-layout>
      <p-footer class="footer">footer</p-footer>
    </p-layout>

  <ClientOnly>
  <layout-default4></layout-default4>
  </ClientOnly>

    <p-layout>
      <p-header class="header">header</p-header>
      <p-layout>
        <p-sider class="sider">sider</p-sider>
        <p-layout>
          <p-content class="content">content</p-content>
          <p-footer class="footer">footer</p-footer>
        </p-layout>
      </p-layout>
    </p-layout>

  <ClientOnly>
  <layout-default5></layout-default5>
  </ClientOnly>

    <p-layout>
      <p-sider class="sider">sider</p-sider>
      <p-layout>
        <p-header class="header">header</p-header>
        <p-content class="content">content</p-content>
        <p-footer class="footer">footer</p-footer>
      </p-layout>
    </p-layout>