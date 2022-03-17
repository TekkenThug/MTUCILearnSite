<template>
  <select
    class="ui-select"
    :value="value"
    @change="$emit('change', $event.target.value)"
  >
    <option
      v-if="placeholder"
      disabled
    >
     {{ placeholder }}
    </option>
    <option
      v-for="(item, index) in initialValues"
      :key="index"
      :value="item.key"
    >
      {{ item.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "ui-select",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      default: ''
    },
    initialValues: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      default: '',
    }
  },
}
</script>

<style lang="sass" scoped>
  @import "assets/styles/variables"

  .ui-select
    width: 100%
    padding: 7px 12px
    border: 2px solid $black-1
    border-radius: 10px
</style>
