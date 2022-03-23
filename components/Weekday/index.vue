<template>
  <div>
    <weekday-header
      :time="time"
      :number="number"
      :erase-is-disabled="cardIsEmpty"
      @onErase="eraseFields"
    />

    <ui-input
      v-model="weekdayData.name"
      placeholder="Название предмета"
      @input="onChange"
    />

    <ui-select
      v-model="weekdayData.type"
      placeholder="Тип предмета"
      :initial-values="subjectAvailableTypes"
      @change="onChange"
    />

    <ui-input
      v-model="weekdayData.cabinet"
      placeholder="Аудитория"
      @input="onChange"
    />

    <ui-input
      v-model="weekdayData.teacher"
      placeholder="Преподаватель"
      @input="onChange"
    />
  </div>
</template>

<script>
import UiSelect from '@/components/UI/ui-select';
import UiInput from '@/components/UI/ui-input';
import WeekdayHeader from './weekday-header';

export default {
  name: 'Weekday',

  components: {
    UiInput,
    UiSelect,
    WeekdayHeader,
  },

  props: {
    /**
     * Lesson name
     */
    name: {
      type: String,
      default: '',
    },

    /**
     * Lesson type
     */
    type: {
      type: String,
      default: '',
    },

    /**
     * Lesson teacher
     */
    teacher: {
      type: String,
      default: '',
    },

    /**
     * Lesson cabinet
     */
    cabinet: {
      type: String,
      default: '',
    },

    /**
     * Lesson number
     */
    number: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      /**
       * Weekday lesson data for work
       * @type {{ name: string, number: number, type: string, teacher: string, cabinet: string}}
       */
      weekdayData: {
        name: this.name,
        number: this.number,
        type: this.type,
        teacher: this.teacher,
        cabinet: this.cabinet,
      },

      /**
       * Available lesson times
       */
      timeForLessons: [
        '9:30-11:05',
        '11:20-12:55',
        '13:10-14:45',
        '15:25-17:00',
        '17:15-18:50',
      ],

      /**
       * Available subject types
       * @type {{ key: string, value: string }[]}
       */
      subjectAvailableTypes: [
        {
          key: 'Lecture',
          value: 'Лекция',
        },
        {
          key: 'Practice',
          value: 'Практика',
        },
        {
          key: 'Laboratory',
          value: 'Лабораторная',
        },
      ],
    };
  },

  computed: {
    /**
     * Returns lesson time
     * @returns {string}
     */
    time() {
      return this.timeForLessons[this.number - 1];
    },

    /**
     * Returns true, if weekday card is empty
     * @returns {boolean}
     */
    cardIsEmpty() {
      return !(this.weekdayData.name
          || this.weekdayData.type
          || this.weekdayData.teacher
          || this.weekdayData.cabinet);
    },
  },

  methods: {
    /**
     * Emit 'onChange' event
     * @returns {void}
     */
    onChange() {
      this.$emit('onChange', this.weekdayData);
    },

    /**
     * Erase fields in weekday card
     * @returns {void}
     */
    eraseFields() {
      const obj = { ...this.weekdayData };

      for (const key in obj) {
        obj[key] = '';
      }

      this.$emit('onChange', { ...obj, number: this.weekdayData.number });
      this.weekdayData = { ...obj, number: this.weekdayData.number };
    },
  },
};
</script>
