<template>
  <button
    class="ui-button"
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
    background-color: $blue-1
    padding: 2px
    color: $white-1
    display: flex
    justify-content: center
    align-items: center

    &:disabled
      opacity: .3
      cursor: default
</style>
