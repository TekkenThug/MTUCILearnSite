<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="validationRules"
  >
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

      <span class="ui-input__error">{{ errors[0] }}</span>
    </div>
  </validation-provider>
</template>

<script>
import { extend } from 'vee-validate';

export default {
  name: 'UiInput',

  props: {
    /**
     * Input value
     */
    value: {
      type: String,
      default: '',
    },

    /**
     * Input placeholder
     */
    placeholder: {
      type: String,
      default: '',
    },

    /**
     * Input label
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * Validation rules (from vee-validate)
     */
    rules: {
      type: Array,
      default: () => ([]),
    },

    /**
     * Input type
     */
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'password'].includes(value),
    },
  },

  computed: {
    /**
     * Returns validation rules string (for vee validate)
     * @return {string}
     */
    validationRules() {
      return this.rules.join('|');
    },
  },

  async created() {
    /** Register validation rules */
    if (this.rules.length) {
      const rules = await import('vee-validate/dist/rules');

      this.rules.forEach((item) => {
        extend(item, rules[item]);
      });
    }
  },
};
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

  &__error
    margin-top: 20px
    color: $red-1
    font-weight: 500
    font-size: 14px
</style>
