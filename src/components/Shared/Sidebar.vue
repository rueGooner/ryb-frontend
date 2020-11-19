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
      <div class="flex flex-col ml-5">
        <h4 class="font-bold text-base">Name</h4>
        <p class="text-base">Username</p>
      </div>
    </div>
    <div class="flex flex-row items-center px-4 mb-4">
      <p class="flex flex-row items-center mr-5 text-base"><strong>Shops Visited:</strong>: 21</p>
      <p class="flex flex-row items-center mr-5 text-base"><strong>Reviews left:</strong>: 7</p>
    </div>
    <div class="sidebar-item border-t border-gray-300 mt-3">
      <home-icon size="20" class="sidebar-item__icon"></home-icon>
      <router-link to="/" class="sidebar-item__link">Home</router-link>
    </div>
    <div class="sidebar-item">
      <user-icon size="20" class="sidebar-item__icon"></user-icon>
      <router-link to="/" class="sidebar-item__link">My Profile</router-link>
    </div>
    <div class="sidebar-item">
      <search-icon size="20" class="sidebar-item__icon"></search-icon>
      <router-link to="/" class="sidebar-item__link">Search Shops</router-link>
    </div>
    <div class="sidebar-item">
      <bell-icon size="20" class="sidebar-item__icon"></bell-icon>
      <router-link to="/" class="sidebar-item__link">Notifications</router-link>
    </div>
    <div class="sidebar-item">
      <star-icon size="20" class="sidebar-item__icon"></star-icon>
      <router-link to="/" class="sidebar-item__link">My Reviews</router-link>
    </div>
    <div class="sidebar-item border-b border-gray-300">
      <settings-icon size="20" class="sidebar-item__icon"></settings-icon>
      <router-link to="/" class="sidebar-item__link">Settings</router-link>
    </div>
    <div class="sidebar-item mt-auto border-b border-t border-gray-300">
      <log-out-icon size="20" class="sidebar-item__icon"></log-out-icon>
      <router-link to="/" class="sidebar-item__link">Sign Out</router-link>
    </div>
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
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  &-item {
    @apply flex items-center p-4 pb-5;
  }

  &-item__link {
    @apply ml-10 text-xl;
  }
}
</style>