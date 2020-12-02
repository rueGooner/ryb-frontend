<template>
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
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'ItemSlider',

  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped>
.ryb-slide {
  @apply mx-10 bg-white h-64 shadow-lg mb-10;
}
</style>