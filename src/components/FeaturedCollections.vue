<template>
  <h3 class="text-start m-4">You may also like</h3>
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
</template>
<script>
export default {
  name: "FeaturedCollections",
  computed: {
    featuredCollections() {
      return this.$store.getters.getfeaturedCollection;
    }
  }
};
</script>
