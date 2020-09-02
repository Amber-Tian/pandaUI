import {describe, it} from 'mocha'

const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接受 gutter 属性', (done) => {
    Vue.component('p-row', Row)
    Vue.component('p-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <p-row gutter="20">
        <p-col span="12"></p-col>
        <p-col span="12"></p-col>
      </p-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).marginLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).marginRight).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
})