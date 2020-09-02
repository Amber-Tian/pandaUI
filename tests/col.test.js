import {describe, it} from 'mocha'

const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })
  it('接受 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受 pad 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pad: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pad-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受 smallPc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        smallPc: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-small-pc-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受 pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('接受 bigPc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        bigPc: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-big-pc-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})