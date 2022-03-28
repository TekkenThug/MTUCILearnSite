<template>
  <validation-observer v-slot="{ handleSubmit }">
    <div class="auth">
      <div class="auth__content">
        <form
          class="auth__form"
          @submit.prevent
        >
          <div class="auth__logo">
            <img
              src="~/assets/images/mtuci-logo.png"
              alt="Logo"
            >
          </div>

          <div class="auth__header">
            <h1>MTUCILearn</h1>
            <span>Educational portal</span>
          </div>

          <ui-input
            v-model="email"
            placeholder="E-mail"
            :rules="['email', 'required']"
          />

          <ui-input
            v-model="password"
            placeholder="Пароль"
            type="password"
            :rules="['required']"
          />

          <ui-button
            class="auth__button"
            @click="handleSubmit(signIn)"
          >
            Войти
          </ui-button>
        </form>
      </div>

      <div class="auth__image" />
    </div>
  </validation-observer>
</template>

<script>
import UiInput from '@/components/UI/ui-input.vue';
import UiButton from '@/components/UI/ui-button.vue';

export default {
  name: 'AuthPage',

  components: {
    UiInput,
    UiButton,
  },

  layout: 'fullpage',

  data() {
    return {
      /**
       * Input email
       * @type {string}
       */
      email: '',

      /**
       * Input password
       * @type {string}
       */
      password: '',
    };
  },

  methods: {
    /**
     * Send sign in request to the server
     */
    signIn() {
    },
  },
};
</script>

<style lang="sass" scoped>
@import "assets/styles/variables"

.auth
  display: flex
  height: 100%

  &__image
    flex: 1 1 60%
    background-color: $purple-1
    background-image: url('~/assets/images/mtuci-bg.jpg')
    background-size: cover
    position: relative

    &::before
      position: absolute
      content: ''
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba($purple-1, .4)

  &__content
    display: flex
    align-items: center
    flex: 0 0 380px
    padding: 20px 40px

  &__form
    flex-basis: 100%
    margin-bottom: 30px

  &__logo
    display: flex
    justify-content: center
    margin: 0 auto 20px
    padding: 0 100px
    flex-direction: column
    position: relative

    &::before,
    &::after
      content: ""
      position: absolute
      top: 50%
      background-color: $black-2
      width: 80px
      height: 1px

    &::after
      right: 0

    &::before
      left: 0

  &__header
    margin-bottom: 30px
    color: $purple-1
    text-align: center

    h1
      font-size: 36px
      line-height: 40px
      font-weight: 600

    span
      font-weight: 500
      font-size: 18px

  &__button
    padding: 5px 20px
    width: 100%
</style>
