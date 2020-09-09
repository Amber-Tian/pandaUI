---
title: Popover - 弹出框
---

# Popover - 弹出框

### 基础用法

两种触发方式：鼠标移入和点击。

  <ClientOnly><popover-default/></ClientOnly>

  :::details 点击查看代码
  ```js
  <div>
    <p-popover>
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
    <p-popover trigger="click">
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>click激活</p-button>
    </p-popover>
  </div>
  ```
  :::

### 弹出位置

支持四个方向弹出。

  <ClientOnly><popover-position/></ClientOnly>

  :::details 点击查看代码
  ```js
  <div>
    <p-popover position="left">
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
    <p-popover>
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
    <p-popover position="bottom">
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
    <p-popover position="right">
      <div slot="content">
        <p>标题</p>
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
  </div>
  ```
  :::

### 嵌套关闭

可设置弹框内部关闭。

  <ClientOnly><popover-close/></ClientOnly>

  :::details 点击查看代码
  ```js
  <div>
    <p-popover>
      <div slot="content" slot-scope="{close}">
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
        <p-button @click="close">关闭</p-button>
      </div>
      <p-button>hover激活</p-button>
    </p-popover>
    <p-popover trigger="click">
      <div slot="content" slot-scope="{close}">
        <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
        <p-button @click="close">关闭</p-button>
      </div>
      <p-button>click激活</p-button>
    </p-popover>
  </div>
  ```
  :::