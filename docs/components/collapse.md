---
title: Collapse - 折叠面板
---

# Collapse - 折叠面板

通过折叠面板收纳内容区域。

`<p-collapse>`：外层容器，接受两个属性：selected 表示默认展开哪几项；single 表示每次只展开一项。

`<p-collapse-item>`：必须置于 `<p-collapse>` 内，必须给两个属性：name 区别于兄弟；title 该项标题。

### 基础用法

可同时展开多个面板，面板之间不影响。

  <ClientOnly><collapse-default></collapse-default></ClientOnly>

    <div>
      <p-collapse :selected.sync="selectedArray">
        <p-collapse-item name="1" title="title1">content1</p-collapse-item>
        <p-collapse-item name="2" title="title2">content2</p-collapse-item>
        <p-collapse-item name="3" title="title3">content3</p-collapse-item>
      </p-collapse>
    </div>

### 手风琴效果

每次只能展开一个面板

  <ClientOnly><collapse-single></collapse-single></ClientOnly>

    <div>
      <p-collapse single :selected.sync="selectedArray">
        <p-collapse-item name="1" title="title1">content1</p-collapse-item>
        <p-collapse-item name="2" title="title2">content2</p-collapse-item>
        <p-collapse-item name="3" title="title3">content3</p-collapse-item>
      </p-collapse>
    </div>