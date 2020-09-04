import {describe, it} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'
Vue.component('p-tabs', Tabs)
Vue.component('p-tabs-head', TabsHead)
Vue.component('p-tabs-body', TabsBody)
Vue.component('p-tabs-item', TabsItem)
Vue.component('p-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.exist
  })
  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    vm.$destroy()
  })
  it('接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
    vm.$destroy()
  })
})

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <p-tabs selected="tab3">
        <p-tabs-head>
          <p-tabs-item name="tab1">tab1</p-tabs-item>
          <p-tabs-item name="tab2">tab2</p-tabs-item>
          <p-tabs-item name="tab3">tab3</p-tabs-item>
        </p-tabs-head>
        <p-tabs-body>
          <p-tabs-pane name="tab1">content1</p-tabs-pane>
          <p-tabs-pane name="tab2">content2</p-tabs-pane>
          <p-tabs-pane name="tab3">content3</p-tabs-pane>
        </p-tabs-body>
      </p-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name='tab3']`)
      expect(x.classList.contains('active')).to.be.true
      done()
      div.remove()
      vm.$destroy()
    })
  })
})