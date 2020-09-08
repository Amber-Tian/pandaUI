<template>
  <div class="panda-toast" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot></slot>
      </div>
      <div class="line" ref="line" v-if="closeText"></div>
      <div class="close" v-if="closeText" @click="close">
        {{closeText}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'pandaToast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 3,
        validator(value) {
          return value === false || typeof value === 'number'
        }
      },
      closeText: {
        type: String
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      updateStyles() {
        if (this.$refs.line) {
          this.$nextTick(() => {
            this.$refs.line.style.height =
              `${this.$refs.toast.getBoundingClientRect().height}px`
          })
        }
      },
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose*1000)
        }
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,.75);
  @keyframes slide-up {
    from {opacity: 0; transform: translateY(100%);}
    to {opacity: 1; transform: translateY(0%);}
  }
  @keyframes slide-down {
    from {opacity: 0; transform: translateY(-100%);}
    to {opacity: 1; transform: translateY(0%);}
  }
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  .panda-toast {
    z-index: 22;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    $animation-duration: 300ms;
    &.position-top {
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration linear;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration linear;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration linear;
      }
    }
  }
  .toast {
    font-size: $font-size; min-height: $toast-min-height;
    line-height: 1.8; display: flex; color: white;
    align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    .message {padding: 8px 0;}
    .close {padding-left: 16px; flex-shrink: 0; cursor: pointer;}
    .line {height: 100%; border-left: 1px solid #666; margin-left: 16px;}
  }
</style>