<template>
  <div class="nav-links hidden md:flex md:justify-between md:bg-transparent">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    <router-link to="/offers" class="nav-link">Offers</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
    <router-link to="/register" class="nav-link">Register</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavLinks',

    computed: {
      filteredRoutes() {
        return this.routes.filter(a => a.meta.displayInNavigation);
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
    @apply px-3 py-1 block mx-2 border-b border-b-2 border-transparent transition duration-100 ease-in;

    &:hover {
      @apply border-primary;
    }

    &.router-link-exact-active {
      @apply border-b border-b-2 border-secondary;
    }
  }
}
</style>