<template>
  <div class="schedule-options">
    <ui-select
      v-model="weekday"
      placeholder="Выберите день недели"
      :initial-values="weekdays"
      @change="changeOptions"
    />

    <ui-select
      v-model="group"
      placeholder="Выберите группу"
      :initial-values="groups"
      @change="changeOptions"
    />

    <div class="schedule-options__even">
      <ui-radio
        v-model="isEven"
        value="odd"
        label="Нечетная (Верхняя)"
        @change="changeOptions"
      />

      <ui-radio
        v-model="isEven"
        value="even"
        label="Четная (нижняя)"
        @change="changeOptions"
      />
    </div>
  </div>
</template>

<script>
import UiSelect from '@/components/UI/ui-select';
import UiRadio from '@/components/UI/ui-radio';

export default {
  name: 'ScheduleOptions',

  components: {
    UiRadio,
    UiSelect,
  },

  props: {
    /**
     * List of available groups
     */
    groups: {
      type: Array,
      default: () => ([]),
    },

    /**
     * Group name
     */
    selectedGroup: {
      type: String,
      default: null,
    },

    /**
     * Week is even
     */
    selectedEven: {
      type: String,
      default: '',
    },

    /**
     * Day of week in numeric format (from 0 to 6)
     */
    selectedWeekday: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      /**
       * List of weekdays
       * @type {{ key: number, value: string }[]}
       */
      weekdays: [
        {
          key: 0,
          value: 'Понедельник',
        },
        {
          key: 1,
          value: 'Вторник',
        },
        {
          key: 2,
          value: 'Среда',
        },
        {
          key: 3,
          value: 'Четверг',
        },
        {
          key: 4,
          value: 'Пятница',
        },
      ],

      /**
       * Weekday for actions
       */
      weekday: this.selectedWeekday,

      /**
       * Even for actions
       */
      isEven: this.selectedEven,

      /**
       * Group name for actions
       * @type {string}
       */
      group: '',
    };
  },

  methods: {
    /**
     * Emit schedule options
     * @returns {void}
     */
    changeOptions() {
      if (this.weekday && this.isEven && this.group) {
        this.$emit('onChangeOptions', {
          weekday: +this.weekday,
          isEven: this.isEven,
          group: this.group,
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.schedule-options
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-rows: repeat(2, 1fr)
  grid-column-gap: 15px
  grid-row-gap: 5px

  &__even
    grid-area: 2 / 1 / 3 / 3
    display: flex
    justify-content: flex-end
    align-items: center
    margin-right: auto

    > :first-child
      margin-right: 10px
</style>
