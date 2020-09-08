---
title: Toast - 消息提示
---

# Toast - 消息提示

全局展示操作反馈信息,是一种不打断用户操作的轻量级提示方式。

框架注册了一个 `$toast` 方法用于调用，toast 可以接收两个参数：

1. 字符串 message 为需要显示的提示内容；

2. 对象可选，包括：

  * `position` ：提示出现的位置，可选值 `'top'`（默认） `'middle'` `'bottom'`；
  * `autoClose` ：设置自动关闭时间，单位为秒（默认 3 ），可选值 `Boolean` 或 `Number`；
  * `closeText` ：设置手动关闭的文字提醒。

### 基础用法

信息提醒反馈，默认 3 秒后自动消失。

  <ClientOnly><toast-default/></ClientOnly>

    <template>
      <div>
        <p-button @click="open1">顶部提示</p-button>
        <p-button @click="open2">中间提示</p-button>
        <p-button @click="open3">底部提示</p-button>
      </div>
    </template>

    <script>
      export default {
        methods: {
          open1() {
            this.$toast('顶部的消息提示')
          },
          open2() {
            this.$toast('中间的消息提示', {
              position: 'middle'
            })
          },
          open3() {
            this.$toast('底部的消息提示', {
              position: 'bottom'
            })
          }
        }
      }
    </script>

### 可手动关闭

可定义手动关闭文字，更改自动关闭时间。

  <ClientOnly><toast-close/></ClientOnly>

    <template>
      <div>
        <p-button @click="open1">顶部提示</p-button>
        <p-button @click="open2">中间提示</p-button>
        <p-button @click="open3">底部提示</p-button>
      </div>
    </template>

    <script>
      export default {
        methods: {
          open1() {
            this.$toast('顶部的消息提示', {
              closeText: '关闭',
              autoClose: 5
            })
          },
          open2() {
            this.$toast('中间的消息提示', {
              position: 'middle',
              closeText: '知道了',
              autoClose: 5
            })
          },
          open3() {
            this.$toast('底部的消息提示', {
              position: 'bottom',
              closeText: '好的',
              autoClose: 5
            })
          }
        }
      }
    </script>