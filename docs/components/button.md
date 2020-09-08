---
title: Button - 按钮
---

# Button - 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

  <ClientOnly><button-default/></ClientOnly>

  ```js
  <p-button>默认按钮</p-button>
  ```

### 禁用状态

按钮不可用状态。

  <ClientOnly><button-disabled/></ClientOnly>

  ```js
  <p-button disabled>默认按钮</p-button>
  ```

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

  <ClientOnly><button-icon/></ClientOnly>

  ```js
  <p-button icon="setting"></p-button>
  <p-button icon="setting">按钮</p-button>
  <p-button icon="setting" icon-position="right">按钮</p-button>
  ```

### 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。

loading 为 Boolean 类型，可以定义变量 loading1 来控制按钮状态。

  <ClientOnly><button-loading/></ClientOnly>

  ```js
  <p-button loading>加载中</p-button>
  <p-button :loading="loading1" @click="loading1=!loading1">点击加载</p-button>
  ```