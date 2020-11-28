<template>
  <main class="home pt-20">
    <banner-search />
    <div class="container mx-auto">
      <carousel class="-mt-10">
        <slide class="ryb-slide">
          Slide 1 Content
        </slide>
        <slide class="ryb-slide">
          Slide 2 Content
        </slide>
        <slide class="ryb-slide">
          Slide 3 Content
        </slide>
        <slide class="ryb-slide">
          Slide 4 Content
        </slide>
        <slide class="ryb-slide">
          Slide 5 Content
        </slide>
        <slide class="ryb-slide">
          Slide 6 Content
        </slide>
        <slide class="ryb-slide">
          Slide 7 Content
        </slide>
        <slide class="ryb-slide">
          Slide 8 Content
        </slide>
        <slide class="ryb-slide">
          Slide 9 Content
        </slide>
        <slide class="ryb-slide">
          Slide 10 Content
        </slide>
      </carousel>
    </div>
  </main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import BannerSearch from '@/components/BannerSearch';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    BannerSearch
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply flex items-center flex-col min-h-screen;

  .ryb-slide {
    @apply mx-10 bg-white h-64 shadow-lg mb-10;
  }
}
</style>
