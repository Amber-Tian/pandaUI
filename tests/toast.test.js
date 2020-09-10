import {describe, it} from 'mocha'

const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })
  it('可以接受 autoClose.', (done) => {
    let div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: 1
      }
    }).$mount(div)
    vm.$on('close', () => {
      expect(document.body.contains(vm.$el)).to.eq(false)
      done()
      vm.$destroy()
    })
  })
  it('可以接受 closeText.', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        closeText: '知道了'
      }
    }).$mount()
    let closeButton = vm.$el.querySelector('.close')
    expect(closeButton.textContent.trim()).to.eq('知道了')
    vm.$destroy()
  })
  it('可以接受 position', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: 'bottom'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    vm.$destroy()
  })
})