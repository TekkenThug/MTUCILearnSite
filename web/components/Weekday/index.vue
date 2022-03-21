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
    time: {
      type: String,
      required: true,
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

  methods: {
    onChange() {
      this.$emit('onChange', this.weekdayData);
    }
  }
}
</script>
