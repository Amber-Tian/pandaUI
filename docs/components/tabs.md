---
title: Tabs - 标签页
---

# Tabs - 标签页

分隔内容上有关联但属于不同类别的数据集合。

`<p-tabs>`：整个标签页的容器，子组件只能是 `<p-tabs-head>` 和 `<p-tabs-body>`，需要接受一个 selected 参数来确定默认选中哪一项。

`<p-tabs-head>`：标题栏的容器，子组件为 `<p-tabs-item>` 留有一个 name 为 actions 的插槽可以添加附加操作。

`<p-tabs-body>`：内容部分的容器，子组件为 `<p-tabs-pane>` 。

`<p-tabs-item>`：标题应放在此处，必须接受一个 name 属性，用以区别兄弟；可接受 disabled 属性表示是否可选。

`<p-tabs-pane>`：内容应放在此处，必须接受一个 name 属性，用以关联标题。

### 基础用法

基础的简洁的标签页。

  <ClientOnly><tabs-default/></ClientOnly>

  ::: details 点击查看代码
  ```js
  <p-tabs selected="tab1">
    <p-tabs-head>
      <p-tabs-item name="tab1">tab1</p-tabs-item>
      <p-tabs-item name="tab2">tab2</p-tabs-item>
      <p-tabs-item name="tab3">tab3</p-tabs-item>
    </p-tabs-head>
    <p-tabs-body>
      <p-tabs-pane name="tab1">content1</p-tabs-pane>
      <p-tabs-pane name="tab2">content2</p-tabs-pane>
      <p-tabs-pane name="tab3">content3</p-tabs-pane>
    </p-tabs-body>
  </p-tabs>
  ```
  :::

### 页签禁用

在对应的 `<p-tabs-item>` 标签上给 disabled 属性即可禁用此项。

  <ClientOnly><tabs-disabled/></ClientOnly>

  ::: details 点击查看代码
  ```js
  <p-tabs selected="tab1">
    <p-tabs-head>
      <p-tabs-item name="tab1">tab1</p-tabs-item>
      <p-tabs-item name="tab2" disabled>tab2</p-tabs-item>
      <p-tabs-item name="tab3">tab3</p-tabs-item>
    </p-tabs-head>
    <p-tabs-body>
      <p-tabs-pane name="tab1">content1</p-tabs-pane>
      <p-tabs-pane name="tab2">content2</p-tabs-pane>
      <p-tabs-pane name="tab3">content3</p-tabs-pane>
    </p-tabs-body>
  </p-tabs>
  ```
  :::

### 附加内容

可以在页签右边添加附加操作。

  <ClientOnly><tabs-actions/></ClientOnly>

  ::: details 点击查看代码
  ```js
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
  ```
  :::


