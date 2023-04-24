<template>
  <div>
    <router-link to="/CollectionGrid"  class="text-dark" style="text-decoration: none;">
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
    <FeaturedCollections/>
    <FeaturedCollections/>
    <FeaturedCollections/>
  </div>
</template>
<script>
import FeaturedCollections from '../FeaturedCollections.vue';
export default {
  name: "CollectionPage",
  components:{
    FeaturedCollections
  }
};
</script>
<style></style>
