<template>
  <aside
      class="sidebar transform top-0 left-0 w-2/3 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 p-4 flex flex-col"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
    <div
      @click="isOpen = false"
      class="flex flex-row w-full items-center p-4"
    >
      <img src="../../assets/logo-primary.png" alt="Logo" class="h-auto w-12 rounded-full" />
      <div class="flex flex-col ml-5 leading-snug">
        <h4 class="font-bold text-base">{{ authUser.name }}</h4>
        <p class="text-base">{{ authUser.username }}</p>
      </div>
    </div>
    <div class="flex flex-row items-center px-4 mb-4">
      <p class="flex flex-row items-center mr-5 text-base"><strong>Shops Visited:</strong>: 21</p>
      <p class="flex flex-row items-center mr-5 text-base"><strong>Reviews left:</strong>: 7</p>
    </div>
    <router-link to="/" class="sidebar-link border-t border-gray-300 mt-3">
      <home-icon size="20" class="sidebar-link__icon"></home-icon>
      <span class="sidebar-link__text">Home</span>
    </router-link>
    <router-link to="/me" class="sidebar-link">
      <user-icon size="20" class="sidebar-link__icon"></user-icon>
      <span class="sidebar-link__text">My Profile</span>
    </router-link>
    <router-link to="/" class="sidebar-link">
      <search-icon size="20" class="sidebar-link__icon"></search-icon>
      <span class="sidebar-link__text">Search Shops</span>
    </router-link>
    <router-link to="/" class="sidebar-link">
      <bell-icon size="20" class="sidebar-link__icon"></bell-icon>
      <span class="sidebar-link__text">Notifications</span>
    </router-link>
    <router-link to="/" class="sidebar-link">
      <star-icon size="20" class="sidebar-link__icon"></star-icon>
      <span class="sidebar-link__text">My Reviews</span>
    </router-link>
    <router-link to="/" class="sidebar-item border-b border-gray-300">
      <settings-icon size="20" class="sidebar-link__icon"></settings-icon>
      <span class="sidebar-link__text">Settings</span>
    </router-link>
    <router-link to="/" class="sidebar-item mt-auto border-b border-t border-gray-300">
      <log-out-icon size="20" class="sidebar-link__icon"></log-out-icon>
      <span class="sidebar-link__text">Sign Out</span>
    </router-link>
  </aside>
</template>

<script>
import { HomeIcon, UserIcon, SearchIcon, BellIcon, StarIcon, SettingsIcon, LogOutIcon } from 'vue-feather-icons';

export default {
  name: 'Sidebar',

  components: {
    HomeIcon,
    UserIcon,
    SearchIcon,
    BellIcon,
    StarIcon,
    SettingsIcon,
    LogOutIcon
  },

  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    authUser() {
      return this.$store.getters.authUser;
    }
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  &-item {
    @apply flex items-center p-4 pb-5;
  }

  &-link {
    @apply flex items-center p-4 mb-2;

    &__text {
      @apply ml-5 text-xl flex-grow;
    }
  }
}
</style>