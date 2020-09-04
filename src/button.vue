<template>
  <button class="p-button"
          :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <p-icon class="icon" v-if="icon && !loading" :name="icon"></p-icon>
    <p-icon class="loading icon" v-if="loading" name="loading"></p-icon>
    <div class="p-button-content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      'p-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .p-button { font-size: $font-size; height: $button-height; cursor: pointer;
    padding: 0 1em; border-radius: $border-radius; background-color: $button-bg;
    border: 1px solid $border-color; display: inline-flex;
    vertical-align: middle; justify-content: center; align-items: center;
    &:hover {border-color: $border-color-hover; }
    &:active {background-color: $button-active-bg; }
    &:focus {outline: none; }
    > .p-button-content {order: 2; }
    > .icon {order: 1; margin-right: .5em; }

    &.icon-right {
      > .p-button-content {order: 1; }
      > .icon {order: 2; margin-right: 0; margin-left: .5em; }
    }

    > .loading {
      @include spin;
    }
  }
</style>