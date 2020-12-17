<template>
  <div class="relative flex flex-col md:max-w-md mx-auto">
    <div class="search-wrap">
      <input placeholder="Start typing..." v-model="search" @input="handleSearch" />
      <search-icon size="18" class="icon"></search-icon>
    </div>
    <button type="button" class="search-btn">
      Search
    </button>
    <transition-group name="search-suggestions" tag="ul" v-if="displayResults" class="search-suggestions">
     <li v-for="(shop, shopIndex) in results" :key="shopIndex" class="search-suggestion">
       {{ shop }}
     </li>
    </transition-group>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons';

export default {
  name: 'Search',

  data: () => ({
    search: '',
    displayResults: false,
  }),

  components: {
    SearchIcon,
  },

  computed: {
    results() {
      return this.$store.getters.suggestions;
    }
  },

  methods: {
    handleSearch() {
      this.displayResults = true;
      this.filterSearchResults();
    },

    filterSearchResults() {
      if (this.search.length >= 1) {
        this.$store.dispatch('fetchShops', this.search);
      } else {
        this.displayResults = false;
        this.$store.dispatch('clearSearch');
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.search-wrap {
  @apply flex relative w-full items-center h-10;

  input {
    width: 100%;
    box-shadow: 0 0 50px -4px rgba(0, 0, 0, 0.25);

    @apply absolute w-full h-full bg-gray-100 px-5 rounded text-sm transition duration-150 ease-in-out outline-none;

    &:focus {
      @apply shadow-lg;
    }
  }

  .icon {
    right: 10px;

    stroke: #d2d2d2;

    @apply absolute z-10 rounded-tr-lg rounded-br-lg flex items-center justify-center;
  }

}

.search-btn {
  @apply bg-teal-400 rounded h-10 text-white py-3 px-10 mt-6 mx-auto transition duration-100 ease-in text-sm;

  &:hover {
    @apply bg-teal-300;
  }
}

.search-suggestions {
  padding: 0;
  margin: 0;
  height: 120px;
  overflow: auto;
  position: absolute;
  width: 100%;
  top: 45px;

  .search-suggestion {
    list-style: none;
    text-align: left;
    padding: 7px 10px;
    cursor: pointer;
    background-color: #fff;
    font-size: 1.1rem;
    border-bottom: 1px solid #efefef;

    &:hover {
      color: #4AAE9B;
      font-weight: bold;
      text-shadow: unset;
    }
  }
}

.search-suggestions-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.search-suggestions-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.search-suggestions-enter-to, .search-suggestions-leave {
   max-height: 100px;
   overflow: hidden;
}

.search-suggestions-enter, .search-suggestions-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>