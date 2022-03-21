<template>
  <div>
    <weekday-header
     :time="time"
     :number="number"
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
  name: "weekday",

  components: {
    UiInput,
    UiSelect,
    WeekdayHeader,
  },

  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    teacher: {
      type: String,
      default: '',
    },
    cabinet: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      required: true,
    }
  },

  data() {
    return {
      weekdayData: {
        name: this.name,
        type: this.type,
        teacher: this.teacher,
        cabinet: this.cabinet,
      },
      timeForLessons: [
        "9:30-11:05",
        "11:20-12:55",
        "13:10-14:45",
        "15:25-17:00",
        "17:15-18:50",
      ],
      subjectAvailableTypes: [
        {
          key: 'Lecture',
          value: 'Лекция'
        },
        {
          key: 'Practice',
          value: 'Практика'
        },
        {
          key: 'Laboratory',
          value: 'Лабораторная'
        }
      ]
    }
  },

  computed: {
    time() {
      return this.timeForLessons[this.number - 1]
    }
  },

  methods: {
    onChange() {
      this.$emit('onChange', this.weekdayData);
    }
  }
}
</script>
