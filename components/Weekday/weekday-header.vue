<template>
  <div class="weekday-header">
    <div class="weekday-header__info">
      <strong>#{{ number }}</strong> {{ time }}
    </div>

    <ui-button
      class="weekday-header__erase"
      color="red"
      :disabled="eraseIsDisabled"
      @click="onErase"
    >
      <trash-icon />
    </ui-button>
  </div>
</template>

<script>
import { TrashIcon } from '@iconicicons/vue';
import UiButton from '@/components/UI/ui-button.vue';

export default {
  name: 'WeekdayHeader',

  components: {
    UiButton,
    TrashIcon,
  },

  props: {
    /**
     * Number of weekday
     */
    number: {
      type: Number,
      required: true,
    },

    /**
     * Pair time
     */
    time: {
      type: String,
      required: true,
    },

    /**
     * True, if erase fields is disabled
     */
    eraseIsDisabled: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    /**
     * Emit 'onErase' event
     * @returns {void}
     */
    onErase() {
      if (!this.eraseIsDisabled) {
        this.$emit('onErase');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.weekday-header
  display: flex
  justify-content: space-between

  &__erase
    width: 25px
    height: 25px
</style>
