<template>
  <div class="layout">
    <sidebar />

    <div class="layout__wrapper">
      <nuxt />
    </div>

    <loader v-show="hasLoader" />
  </div>
</template>

<script>
import Loader from '@/components/Loader';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'Default',

  components: {
    Loader,
    Sidebar,
  },

  computed: {
    /**
     * True, if loader, must be shown
     * @returns {boolean}
     */
    hasLoader() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style lang="sass" scoped>
.layout
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background-color: #FDFFFC

  &__wrapper
    border-radius: 8px
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px
    padding: 30px
    background-color: #ffffff
</style>
