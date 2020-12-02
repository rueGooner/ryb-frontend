<template>
 <div class="main-banner">
   <div class="banner-text">
      <div class="content">
        <h2>Rate your Barber</h2>
        <p>You will find and rate your barber, or find a new barber.</p>
      </div>
      <Search />
   </div>
    <div class="banner-overlay"></div>
  </div>
</template>

<script>
import Search from '@/components/Search';

export default {
  name: 'Hero',

  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.main-banner {
  width: 100%;
  height: 450px;
  background: url('../assets/banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;

  @apply table bg-orange-600 bg-secondary;

  .banner-text {
    @apply table-cell align-middle p-10;

    h2,
    p {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

      @apply text-white font-semibold m-0 text-center;
    }

    h2 {
      @apply text-5xl;
    }

    p {
      @apply mb-4;
    }

    .content {
      @apply mb-10;
    }
  }

  @media screen and (min-width: 400px) {
    // .banner-overlay {
    //   @apply absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-l from-white to-transparent;
    // }
  }

  .banner-image {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>