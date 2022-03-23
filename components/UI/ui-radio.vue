<template>
  <div class="ui-radio">
    <label>
      {{ label }}
      <input
        :value="value"
        :checked="isChecked"
        type="radio"
        @change="$emit('change', $event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiRadio',

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    /**
     * Radio button label
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * Radio button value (for v-model)
     */
    modelValue: {
      type: [String, Number],
      default: '',
    },

    /**
     * Radio button value (for binding)
     */
    value: {
      type: [String, Number],
      default: '',
    },
  },

  computed: {
    /**
     * Returns true, if radio button value is checked
     * @returns {boolean}
     */
    isChecked() {
      return this.modelValue === this.value;
    },
  },
};
</script>
