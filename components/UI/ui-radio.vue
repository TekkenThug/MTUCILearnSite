<template>
  <div class="ui-radio">
    <label>
      {{ label }}
      <input
        @change="$emit('change', $event.target.value)"
        :value="value"
        :checked="isChecked"
        type="radio"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "ui-radio",

  model: {
    prop: 'modelValue',
    event: 'change'
  },

  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      default: ''
    },
    value: {
      type: [String, Number],
      default: '',
    }
  },

  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  }
}
</script>
