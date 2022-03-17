<template>
  <button
    class="ui-button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ui-button"
}
</script>

<style lang="sass" scoped>
  @import "assets/styles/variables"

  .ui-button
    border-radius: 5px
    background-color: $blue-1
    padding: 2px
    color: $white-1
    display: flex
    justify-content: center
    align-items: center
</style>
