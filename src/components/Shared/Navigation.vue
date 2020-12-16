<template>
  <nav
    class="absolute sm:relative flex w-full items-center justify-between px-6 h-20 text-gray-700 border-b border-gray-200 z-10"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center md:hidden">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex items-center justify-center">
      <img src="../../assets/images/ryb.png" alt="Logo" class="h-auto w-16" />
    </div>
    <NavLinks :routes="$router.options.routes" />

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
   <Sidebar :is-open="isOpen" />
    </div>
  </nav>
</template>

<script>
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';

export default {
  name: 'Navigation',

  components: {
    NavLinks,
    Sidebar
  },

  data: () => ({
    isOpen: false,
  }),

  props: {
    routes: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) document.body.style.setProperty('overflow', 'hidden');
        else document.body.style.removeProperty('overflow');
      },
    },
  },

  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
<style lang="scss" scoped>
</style>