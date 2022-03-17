<template>
  <div>
    <ui-input
      v-model="weekdayData.subjectTitle"
      placeholder="Название предмета"
    />

    <ui-select
      v-model="weekdayData.subjectType"
      placeholder="Тип предмета"
      :initial-values="subjectAvailableTypes"
    />

    <ui-input
      v-model="weekdayData.placeCode"
      placeholder="Аудитория"
    />

    <ui-input
      v-model="weekdayData.teacherName"
      placeholder="Преподаватель"
    />
  </div>
</template>

<script>
import UiSelect from '@/components/UI/ui-select';
import UiInput from '@/components/UI/ui-input';

export default {
  name: "weekday",
  components: {
    UiInput,
    UiSelect,
  },
  data() {
    return {
      weekdayData: {
        subjectTitle: '',
        subjectType: '',
        teacherName: '',
        placeCode: '',
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
}
</script>
