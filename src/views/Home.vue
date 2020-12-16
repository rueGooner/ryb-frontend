<template>
  <main class="home">
    <Hero />
    <div class="container">
      <SellingPoints />
      <ItemSlider />
    </div>
  </main>
</template>

<script>
import Hero from '@/components/Hero';
import ItemSlider from '@/components/Shared/ItemSlider';
import SellingPoints from '@/components/SellingPoints';

export default {
  name: 'Home',
  components: {
    Hero,
    ItemSlider,
    SellingPoints
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply flex items-center flex-col min-h-screen bg-background;
}
</style>
