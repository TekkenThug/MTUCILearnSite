<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${color}`
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ui-button",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: 'purple',
      validator: (value) => ['purple', 'red'].includes(value)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "assets/styles/variables"
  @import "assets/styles/mixins"

  .ui-button
    @include trans
    border-radius: 5px
    color: $white-1
    display: flex
    justify-content: center
    align-items: center

    &--purple
      background-color: $purple-1

    &--red
      background-color: $red-1

    &:disabled
      opacity: .3
      cursor: default
</style>

<style lang="sass">
  .ui-button
    padding: 2px
</style>
