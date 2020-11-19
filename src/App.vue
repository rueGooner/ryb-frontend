<template>
  <div id="app">
    <Navigation v-if="$route.name !== 'Login'" :routes="$router.options.routes" />
    <router-view />
  </div>
</template>


<script>
import Navigation from '@/components/Shared/Navigation';

  export default {
    components: {
      Navigation,
    },
  }
</script>

<style lang="scss" scoped>

</style>
