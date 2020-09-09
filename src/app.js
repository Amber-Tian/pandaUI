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
import plugin from './pluginToast'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collpase-item'

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
Vue.component('p-tabs', Tabs)
Vue.component('p-tabs-head', TabsHead)
Vue.component('p-tabs-body', TabsBody)
Vue.component('p-tabs-item', TabsItem)
Vue.component('p-tabs-pane', TabsPane)
Vue.component('p-popover', Popover)
Vue.component('p-collapse', Collapse)
Vue.component('p-collapse-item', CollapseItem)

new Vue({
  el: '#app'
})