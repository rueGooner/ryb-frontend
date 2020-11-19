<template>
  <div class="nav-links hidden md:flex md:justify-between md:bg-transparent">
    <router-link :key="routeIndex" v-for="(route, routeIndex) in routes" :to="route.path" class="nav-link">
      {{ route.name }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavLinks',

    props: {
      routes: {
        type: Array,
        default: () => []
      },

      sidebar: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
.nav-links {
  &--sidebar {
    @apply flex flex-col;
  }

  .nav-link {
    @apply p-3 block;
  }
}
</style>