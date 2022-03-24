<template>
  <div>
    <schedule-options
      :groups="groups"
      :selected-group="group"
      :selected-weekday="dayOfWeek"
      :selected-even="isEven"
      @onChangeOptions="updateScheduleSettings"
    />

    <div
      v-if="schedule && schedule.length"
      class="schedule__week"
    >
      <div
        v-for="(item, index) in schedule"
        :key="index"
      >
        <weekday
          v-bind="item"
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
import { FloppyDiscIcon } from '@iconicicons/vue';
import Weekday from '@/components/Weekday';
import ScheduleOptions from '@/components/Schedule/schedule-options';
import UiButton from '@/components/UI/ui-button';

export default {
  name: 'SchedulePage',

  components: {
    ScheduleOptions,
    UiButton,
    Weekday,
    FloppyDiscIcon,
  },

  data() {
    return {
      /**
       * Week is even
       * @type {'even' | 'odd'}
       */
      isEven: '',

      /**
       * Day of week in numeric format (from 0 to 6)
       * @type {number|null}
       */
      dayOfWeek: null,

      /**
       * Group name
       * @type {string}
       */
      group: '',

      /**
       * Schedule config
       * @type {[]}
       */
      schedule: [],

      /**
       * List of available groups
       * @type {[]}
       */
      groups: [],

      /**
       * True, if save button is active
       * @type {boolean}
       */
      saveBtnIsActive: false,
    };
  },

  created() {
    /** Get group list */
    this.$axios.$get('/group').then((response) => {
      this.groups = response.map((item) => ({ key: item.name, value: item.name }));
    });
  },

  methods: {
    /**
     * Save weekday item to schedule
     * @param {object} item - saved item
     * @param {number} index - position of saved item
     *
     * @returns {void}
     */
    saveToScheduleState(item, index) {
      this.schedule.splice(index, 1, item);

      this.saveBtnIsActive = true;
    },

    /**
     * Send schedule array to the server
     * @returns {void}
     */
    sendScheduleToServer() {
      this.$store.commit('toggleLoader', true);

      this.$axios
        .$post(
          `/schedule?even=${this.isEven}&weekday=${this.dayOfWeek}&group=${this.group}`,
          this.schedule,
        )
        .then(() => {})
        .finally(() => this.$store.commit('toggleLoader', false));
    },

    /**
     * Create full schedule
     * @param {*[]} targetSchedule - array, where must be inserting full schedule
     * @param {boolean} createNew - create new empty schedule
     *
     * @returns {*[]}
     */
    createFullSchedule(targetSchedule, createNew = false) {
      const fullSchedule = [];

      for (let i = 1; i <= 5; i++) {
        fullSchedule.push({
          name: '',
          number: i,
          cabinet: '',
          teacher: '',
          type: '',
        });
      }

      if (!createNew) {
        targetSchedule.forEach((item) => {
          fullSchedule.splice(item.number - 1, 1, item);
        });
      }

      return fullSchedule;
    },

    /**
     * Get schedule from the server
     * @returns {void}
     */
    getSchedule() {
      this.$store.commit('toggleLoader', true);

      this.schedule = [];

      this.$axios
        .$get(
          `/schedule?even=${this.isEven}&weekday=${this.dayOfWeek}&group=${this.group}`,
        )
        .then((response) => {
          this.schedule = this.createFullSchedule(
            response,
            response.status && response.status === 'EMPTY',
          );
          this.$store.commit('toggleLoader', false);
          this.saveBtnIsActive = false;
        });
    },

    /**
     * Update settings
     * @param {object} data
     */
    updateScheduleSettings(data) {
      this.isEven = data.isEven;
      this.dayOfWeek = data.weekday;
      this.group = data.group;

      this.getSchedule();
    },
  },
};
</script>

<style lang="sass" scoped>
@import 'assets/styles/variables'

.schedule
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
