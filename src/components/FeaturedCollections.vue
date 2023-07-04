<template>
  <h1 class="text-center mt-4">You May Also Like</h1>

  <HomePageCard></HomePageCard>

  <!-- <router-link to="/CardCatelog/Category1" class="text-decoration-none text-dark">
    <div class="container" style="padding-bottom: 100px;">
    <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
      <div class="col" v-for="(featuredCollection, index) in featuredCollections" :key="index">
        <div class="card">
          <img :src="featuredCollection.img">
        </div>
        <div class="px-1">
          <p class="m-0" style="font-size: 12px;">{{ featuredCollection.name }}</p>
          <div class="d-flex justify-content-between">
            <p class="m-0 fw-bold">₹{{ featuredCollection.price }}</p>
            <p class="m-0 fw-bold">{{ featuredCollection.moq }}pcs</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </router-link> -->
</template>
<script>
import HomePageCard from './Collection/HomePageCard.vue';
export default {
  name: "FeaturedCollections",
  computed: {
    featuredCollections() {
      return this.$store.getters.getfeaturedCollection;
    }
  },
  components: {
    HomePageCard
  }
};
</script>
