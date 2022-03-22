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
import UiButton from "@/components/UI/ui-button.vue";
import { TrashIcon } from "@iconicicons/vue";

export default {
  name: "weekday-header",

  components: {
    UiButton,
    TrashIcon,
  },

  props: {
    number: {
      type: Number,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    eraseIsDisabled: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    onErase() {
      if (!this.eraseIsDisabled) {
        this.$emit("onErase");
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