---
title: Grid - 栅格
---

# Grid - 栅格

通过基础的 24 分栏，迅速简便地创建布局。

`<p-row>`：每一行的容器，可接受一个属性 gutter 用来设置每一列间的间距。

`<p-col>`：必须放在 `<p-row>` 内，你的内容应当放置于 `<p-col>` 里面，


**请根据需求自行设置容器的宽高等样式。**

### 基础布局

使用单一分栏创建基础的栅格布局。

  <ClientOnly><grid1></grid1></ClientOnly>

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

### 分栏间隔
分栏之间间隔可以通过给 `<p-row>` 加 gutter 属性实现。

  <ClientOnly><grid2></grid2></ClientOnly>

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

### 响应式布局

参照了 Bootstrap 的响应式设计，预设了五个响应尺寸：span、pad、small-pc、pc 和 big-pc。

  <ClientOnly><grid3></grid3></ClientOnly>

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