---
title: Input - 输入框
---

# Input - 输入框

通过鼠标或键盘输入字符。

## 基础用法

可以使用 placeholder 提示用户。

  <input-default></input-default>

    <p-input placeholder="请输入内容"></p-input>
    <p-input></p-input>

## 禁用状态

可以使用 value 显示内容，但是不可编辑。

  <ClientOnly>
  <input-disabled></input-disabled>
  </ClientOnly>

    <p-input disabled value="不可编辑"></p-input>