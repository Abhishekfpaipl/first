<template>
  <div>
    <router-link to="/CategoryNew" class="text-dark" style="text-decoration: none;">
      <div class="banner" style="background-color: #f6f4f2;">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <h1 class="mt-4">Find your match</h1>
              <p>The most talked-about sets of the season!</p>
              <button class="btn btn-primary rounded">Shop Now</button>
            </div>
            <div class="col-4">

              <img src="../../assets/CollectionBanner.png" style="width:100%;" alt="">

            </div>
          </div>
        </div>
      </div>
    </router-link>

    <div class="container px-4 mt-3">
      <div class="row row-cols-3 gx-2">
        <div class="col" v-for="(collection, index) in collections" :key="index">
          <router-link to="/CategoryNew">
            <div class="card rounded-0">
              <img :src="collection.img" alt="" style="width: 100%;">
            </div>
          </router-link>
          <p>₹{{ collection.price }}</p>
        </div>
      </div>
    </div>

    <FeaturedCollections />

  </div>
</template>
<script>
import FeaturedCollections from '../FeaturedCollections.vue';
export default {
  name: "CollectionPage",
  components: {
    FeaturedCollections
  },
  computed: {
    collections() {
      return this.$store.getters.getCollections
    }
  }
};
</script>
<style></style>
