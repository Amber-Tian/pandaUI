<template>
  <div class="wrapper" :class="{error}">
    <input :type="type" :value="value" :disabled="disabled" :success="success"
           :placeholder="placeholder"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <icon name="error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
    <icon v-if="success" name="success"></icon>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'PandaInput',
    components: {Icon},
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      },
      success: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "var";
  .wrapper {font-size: $font-size; display: inline-flex; align-items: center;
    > :not(:last-child) {margin-right: .5em;}
    > input {height: $input-height; padding: 0 8px; font-size: inherit;
      border: 1px solid $border-color; border-radius: $border-radius;
      &:hover {border-color: $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 3px $box-shadow-color; outline: none;}
      &[disabled] {border-color: #bbb; color: #bbb; cursor: not-allowed;}
    }
    &.error {
      > input {border-color: $red;}
    }
    .errorMessage {color: $red;}
  }
</style>