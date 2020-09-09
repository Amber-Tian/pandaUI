# 熊猫UI - 一个 Vue UI 组件库

[![Build Status](https://www.travis-ci.org/Amber-Tian/pandaUI.svg?branch=master)](https://www.travis-ci.org/Amber-Tian/pandaUI)

## 介绍

## 开始使用

1. 添加 CSS 样式
    
    使用前请在 CSS 中开启 border-box
    
    ~~~
    *,*::before,*::after{box-sizing: border-box;}
    ~~~
    
    IE 8 及以上浏览器都支持此样式。
    
2. 安装

    ~~~
    npm i --save panda-ui-amber
    ~~~
   
    ~~~
    yarn add panda-ui-amber
    ~~~

3. 引入
    ~~~
    import {Button, ButtonGroup} from 'panda-ui-amber'
    import 'panda-ui-amber/dist/index.css'
   
    export default {
        name: 'app',
        components: {
          'p-button': Button,
          'p-button-group': ButtonGroup
        }
    }
    ~~~

    Toast引入方式：
    ~~~
    import Vue from 'vue'
    import {pluginToast} from 'panda-ui-amber'
    Vue.use(pluginToast)
    ~~~
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

