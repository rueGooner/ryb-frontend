<template>
  <div class="home">
    <div class="main-banner">
      <img src="http://placebeard.it/1900x400" />
      <div class="banner-overlay"></div>
    </div>
    <carousel>
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
      <slide>
        Slide 4 Content
      </slide>
      <slide>
        Slide 5 Content
      </slide>
      <slide>
        Slide 6 Content
      </slide>
      <slide>
        Slide 7 Content
      </slide>
      <slide>
        Slide 8 Content
      </slide>
      <slide>
        Slide 9 Content
      </slide>
      <slide>
        Slide 10 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply flex items-center flex-col min-h-screen;

  .main-banner {
    @apply relative;
  }

  .banner-overlay {
    @apply absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-white to-transparent;
  }
}
</style>
