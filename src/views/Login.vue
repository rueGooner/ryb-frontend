<template>
  <div class="flex-container w-full px-10">
    <form class="login-form w-full md:w-1/4">
      <div class="input-wrap">
        <input v-model="user.email" type="email" placeholder="Type your email" />
        <at-sign-icon size="1x" class="icon"></at-sign-icon>
      </div>
      <div class="input-wrap">
        <input v-model="user.password" type="password" placeholder="Type your password" />
        <unlock-icon size="1x" class="icon"></unlock-icon>
      </div>
      <div class="action">
        <button type="button" class="btn btn--primary h-16" @click="handleLogin">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
import { AtSignIcon, UnlockIcon } from 'vue-feather-icons';

export default {
  name: 'Login',

  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),

  components: {
    AtSignIcon,
    UnlockIcon,
  },

  methods: {
    handleLogin() {
      this.$store.dispatch('handleLogin', this.user);
    }
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  background-image: url('../assets/logo-opacity.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
}
.login-form {
  @apply bg-white p-10 rounded-xl shadow-lg flex flex-col;

  .form-field {
    @apply flex items-center mb-3;
  }

  .input-wrap {
    @apply flex flex-col relative items-center mb-8;

    input {
      @apply w-full bg-gray-100 px-3 h-16 rounded-lg text-lg transition duration-150 ease-in-out;

      &:focus {
        @apply outline-none shadow;
      }

      &:focus + .icon {
        stroke: #ED6464;
      }
    }

    .icon {
      @apply mr-2 flex absolute h-full right-0 items-center justify-center;
    }

  }
}
</style>