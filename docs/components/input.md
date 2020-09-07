---
title: Input - 输入框
---

# Input - 输入框

通过鼠标或键盘输入字符。

## 基础用法

可以使用 placeholder 提示用户。

  <ClientOnly>
  <input-default></input-default>
  </ClientOnly>

    <p-input placeholder="请输入内容"></p-input>
    <p-input></p-input>

## 禁用状态

可以使用 value 显示内容，但是不可编辑。

  <ClientOnly>
  <input-disabled></input-disabled>
  </ClientOnly>

    <p-input disabled value="不可编辑"></p-input>

## 带提示的输入框

可以提醒用户输入内容是否规范

  <ClientOnly>
  <input-tip></input-tip>
  </ClientOnly>

    <p-input success></p-input>
    <p-input error="输入内容不合规范"></p-input>

## 其他输入框
支持密码、日期等原生输入框

  <ClientOnly>
  <input-type></input-type>
  </ClientOnly>

    <p-input type="password" placeholder="请输入密码"></p-input>
    <p-input type="date"></p-input>
    <p-input type="number" placeholder="请输入数字"></p-input>