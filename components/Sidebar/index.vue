<template>
  <aside class="sidebar">
    <ul class="sidebar__menu">
      <li class="sidebar__menu-item">
        <nuxt-link
          class="sidebar__menu-link"
          active-class="sidebar__menu-link--active"
          to="/schedule"
        >
          <calendar-icon class="sidebar__menu-icon" />
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { CalendarIcon } from '@iconicicons/vue';

export default {
  name: 'Sidebar',

  components: {
    CalendarIcon,
  },
};
</script>

<style scoped lang="sass">
@import 'assets/styles/variables'

.sidebar
  width: 50px
  height: 100vh
  background-color: $purple-1
  position: fixed
  left: 0
  top: 0
  display: flex

  &__menu
    display: grid
    width: 100%
    grid-template-columns: 100%
    grid-template-rows: 50px

    &-item
      color: $white-1
      display: flex
      justify-content: center
      align-items: center

    &-link,
    &-icon
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center

    &-link--active
      background-color: $white-1
      color: $black-1

    &-icon
      width: 40px
      height: 40px
</style>
