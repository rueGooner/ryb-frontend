<template>
 <div class="main-banner">
   <div class="banner-text absolute">
      <div class="content">
        <h1>WELCOME</h1>
        <p>You will find and rate your barber, or find a new barber.</p>
      </div>
      <div class="search-wrap">
        <input placeholder="Search" />
        <button type="button" class="search-btn"><search-icon size="1x" class="icon"></search-icon></button>
      </div>
   </div>
    <picture class="banner-image">
      <source srcset="http://placebeard.it/1900x400" media="(m-width: 768px)">
      <img src="../assets/banner-mobile.png" alt="Apple Product" id="my-image-1" class="my_image" >
    </picture>
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
  @apply relative w-full flex items-center justify-center;

  .banner-text {
    top: 1vw;
    bottom: 1vw;
    left: 1vw;
    right: 1vw;
    // background-color: rgba(0, 0, 0, 0.4);

    @apply p-4 rounded-2xl font-normal flex flex-col items-center justify-center;

    h1, p {
      margin: 10px 0 15px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

      @apply text-white text-center;
    }
  }

  @media screen and (min-width: 400px) {
    .banner-overlay {
      @apply absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-l from-white to-transparent;
    }
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
      @apply absolute z-10 h-16 w-16 right-0 bg-primary rounded-tr-lg rounded-br-lg flex items-center justify-center;

      .icon {
        stroke: #ffffff;
      }
    }
  }
}
</style>