<template>
  <div>
    <div class="schedule__options">
      <ui-select
        v-model="dayOfWeek"
        placeholder="Выберите день недели"
        :initial-values="weekdays"
      />

      <div class="schedule__options-even">
        <ui-radio v-model="isEven" value="odd" label="Нечетная" />

        <ui-radio v-model="isEven" value="even" label="Четная" />
      </div>
    </div>

    <div v-if="schedule && schedule.length" class="schedule__week">
      <div v-for="(item, index) in schedule" :key="index">
        <weekday
          v-bind="item"
          :time="timeForLessons[index]"
          :number="index + 1"
          @onChange="saveToScheduleState($event, index)"
        />
      </div>

      <ui-button
        class="schedule__button"
        :disabled="!saveBtnIsActive"
        @click="sendScheduleToServer"
      >
        <floppy-disc-icon />
      </ui-button>
    </div>
  </div>
</template>

<script>
import Weekday from "@/components/Weekday";
import UiSelect from "@/components/UI/ui-select";
import UiRadio from "@/components/UI/ui-radio";
import { FloppyDiscIcon } from "@iconicicons/vue";
import UiButton from "@/components/UI/ui-button";

export default {
  name: "IndexPage",

  components: {
    UiButton,
    UiRadio,
    UiSelect,
    Weekday,
    FloppyDiscIcon,
  },

  data() {
    return {
      isEven: "",
      dayOfWeek: "",
      schedule: [],
      weekdays: [
        {
          key: "Mon",
          value: "Понедельник",
        },
        {
          key: "Tue",
          value: "Вторник",
        },
        {
          key: "Wed",
          value: "Среда",
        },
        {
          key: "Thu",
          value: "Четверг",
        },
        {
          key: "Fri",
          value: "Пятница",
        },
      ],
      timeForLessons: [
        "9:30-11:05",
        "11:20-12:55",
        "13:10-14:45",
        "15:25-17:00",
        "17:15-18:50",
      ],
      saveBtnIsActive: false,
    };
  },

  mounted() {
    this.$watch(
      (vm) => [vm.dayOfWeek, vm.isEven],
      (val) => {
        if (this.dayOfWeek && this.isEven) {
          this.$store.commit("toggleLoader", true);

          this.schedule = [];

          this.$axios.$get(`/schedule`).then((res) => {
            this.schedule = res.pairs;
            this.$store.commit("toggleLoader", false);
            this.saveBtnIsActive = false;
          });
        }
      },
      {
        immediate: false,
        deep: true,
      }
    );
  },

  methods: {
    saveToScheduleState(item, index) {
      this.schedule.splice(index, 1, item);

      this.saveBtnIsActive = true;
    },

    sendScheduleToServer() {
      this.$store.commit("toggleLoader", true);

      this.$axios.$post(`/schedule?even=${this.isEven}&weeekday=${this.dayOfWeek}`, this.schedule)
        .then(() => {})
        .finally(() => this.$store.commit("toggleLoader", false));
    },
  },
};
</script>

<style lang="sass" scoped>  
@import 'assets/styles/variables.sass'

.schedule
  &__options
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: 1fr
    grid-column-gap: 15px

    &-even
      display: flex
      justify-content: flex-end
      align-items: center

      >:first-child
        margin-right: 10px

  &__week
    margin-top: 15px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(2, 1fr)
    grid-column-gap: 15px
    grid-row-gap: 15px
    position: relative

    @media #{$mediaTablet}
      grid-template-columns: repeat(1, 1fr)

  &__button
    position: absolute
    bottom: 0
    right: 0

    @media #{$mediaTablet}
      position: relative
      width: 100%
      padding-top: 15px
      padding-bottom: 15px
</style>
