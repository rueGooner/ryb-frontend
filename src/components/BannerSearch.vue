<template>
 <div class="main-banner">
   <div class="banner-text">
      <div class="content">
        <h1>WELCOME</h1>
        <p>You will find and rate your barber, or find a new barber.</p>
      </div>
      <div class="search-wrap">
        <input placeholder="Search" />
        <button type="button" class="search-btn"><search-icon size="1x" class="icon"></search-icon></button>
      </div>
   </div>
    <div class="banner-overlay"></div>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons';

export default {
  name: 'BannerSearch',

  components: {
    SearchIcon,
  },
};
</script>

<style lang="scss" scoped>
.main-banner {
  height: 450px;
  background: url('../assets/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @apply table bg-orange-600 bg-primary;

  .banner-text {
    @apply table-cell align-middle p-10;

    h1, p {
      margin: 5px 0;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

      @apply text-white text-center font-semibold;
    }

     p {
       @apply leading-7 mb-4;
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

  .search-wrap {
    @apply flex relative w-full items-center h-16;

    input {
      width: 100%;
      box-shadow: 0 0 50px -4px rgba(0, 0, 0, 0.25);

      @apply absolute w-full h-full bg-gray-100 px-5 rounded-lg text-lg transition duration-150 ease-in-out outline-none;

      &:focus {
        @apply shadow-lg;
      }
    }


    .search-btn {
      @apply absolute z-10 h-16 w-16 right-0 bg-teal-300 rounded-tr-lg rounded-br-lg flex items-center justify-center;

      .icon {
        stroke: #ffffff;
      }
    }
  }
}
</style>