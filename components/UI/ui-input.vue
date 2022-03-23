<template>
  <div class="ui-input">
    <label>
      {{ label }}
      <input
          class="ui-input__field"
          :type="type"
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
    /**
     * Input value
     */
    value: {
      type: String,
      default: ''
    },

    /**
     * Input placeholder
     */
    placeholder: {
      type: String,
      default: ''
    },

    /**
     * Input label
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * Input type
     */
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'password'].includes(value)
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
    border: 2px solid $purple-1
    width: 100%

    &::placeholder
      font-size: 14px
</style>
