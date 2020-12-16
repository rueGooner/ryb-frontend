<template>
  <div class="selling-points">
    <div class="selling-point selling-point--find-barber">
      <h3>Find a Barber</h3>
      <p>Laboriosam distinctio quasi numquam consequatur aperiam at dolorem eum suscipit quam tempore maxime.</p>
    </div>
    <div class="selling-point selling-point--check-reviews">
      <h3>Read the Reviews</h3>
      <p>Nihil eligendi iste? Modi corrupti voluptatum dolorem officiis.</p>
    </div>
    <div class="selling-point selling-point--book-trim">
      <h3>Book your trim</h3>
      <p>Ipsum eos praesentium necessitatibus laborum expedita explicabo dolore illo maiores voluptatibus.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SellingPoints'
  }
</script>

<style lang="scss" scoped>
.selling-points {
  width: 100%;

  @apply flex flex-wrap justify-between;

  .selling-point {
    flex-basis: 100%;
    padding: 210px 40px 20px;

    @apply bg-white shadow flex flex-col items-center;

    &--find-barber {
      background: #fff url('../assets/images/find-barber.png') no-repeat center 30px;
    }

    &--check-reviews {
       background: #fff url('../assets/images/check-reviews.png') no-repeat center 30px;
    }

    &--book-trim {
       background: #fff url('../assets/images/book-app.png') no-repeat center 30px;
    }

    h3 {
      text-transform: uppercase;

      @apply text-primary font-bold mt-5 mb-2 text-xl;
    }

    p {
      @apply text-center text-sm;
    }
  }

  @media screen and (min-width: 768px) {
    .selling-point {
      flex-basis: calc(33% - 10px);
    }
  }
}
</style>