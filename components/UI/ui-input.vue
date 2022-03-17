<template>
  <div class="ui-input">
    <label>
      {{ label }}
      <input
        class="ui-input__field"
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "ui-input",

  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "assets/styles/variables"
  @import "assets/styles/mixins"

  .ui-input
    @include trans
    margin: 10px 0

    &__field
      padding: 5px 12px
      border-radius: 10px
      border: 2px solid $black-1

      &::placeholder
        font-size: 14px
</style>
