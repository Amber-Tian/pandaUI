<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'PandaCol',
    props: {
      span: {type: [Number, String]},
      pad: {type: [Number, String]},
      smallPc: {type: [Number, String]},
      pc: {type: [Number, String]},
      bigPc: {type: [Number, String]}
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let {span, pad, smallPc, pc, bigPc} = this
        return [
          span && `col-${span}`,
          pad && `col-pad-${pad}`,
          smallPc && `col-small-pc-${smallPc}`,
          pc && `col-pc-${pc}`,
          bigPc && `col-big-pc-${bigPc}`
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    @for $n from 1 through 24 {
      &.col-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @media (min-width: 577px) {
      @for $n from 1 through 24 {
        &.col-pad-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) {
      @for $n from 1 through 24 {
        &.col-small-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      @for $n from 1 through 24 {
        &.col-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      @for $n from 1 through 24 {
        &.col-big-pc-#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
  }
</style>