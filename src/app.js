import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Layout from './layout/layout'
import Header from './layout/header'
import Footer from './layout/footer'
import Sider from './layout/sider'
import Content from './layout/content'
import Col from './grid/col'
import Row from './grid/row'
import Toast from './toast'
import plugin from './plugin'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', ButtonGroup)
Vue.component('p-input', Input)
Vue.component('p-layout', Layout)
Vue.component('p-header', Header)
Vue.component('p-footer', Footer)
Vue.component('p-sider', Sider)
Vue.component('p-content', Content)
Vue.component('p-row', Row)
Vue.component('p-col', Col)
Vue.component('p-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  },
  created() {
    this.$toast('更新成功', {
      autoClose: false,
      closeButton: {text: '知道了'},
      position: 'top'
    })
  }
})