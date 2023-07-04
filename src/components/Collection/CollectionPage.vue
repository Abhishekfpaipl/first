<template>
  <!-- <div>
    <router-link to="/CategoryNew" class="text-decoration-none text-dark">
      <div class="banner" style="background-color: #f6f4f2;">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <h1 class="mt-4">Collections Starting At ₹199</h1>
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
          <router-link to="/CardCatelog/Category1" class="text-decoration-none text-dark">
            <div class="card rounded-0">
              <img :src="collection.img" alt="" style="width: 100%;">
            </div>
          </router-link>
          <p>₹{{ collection.price }}</p>
        </div>
      </div>
    </div>


    <div class="banner" style="background-color: #EFEFEF;">
      <div class="container">
        <div class="row">

          <div class="col-4">
            <img src="@/assets/Cbanner2.png" style="width:100%;" alt="">
          </div>
          <div class="col-8">
            <h1 class="mt-4">Collection Starting At ₹499</h1>
            <p>The most talked-about sets of the season!</p>
            <button class="btn btn-primary rounded">Shop Now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 mt-3">
      <div class="row row-cols-3 gx-2">
        <div class="col" v-for="(collection, index) in collectionsone" :key="index">
          <router-link to="/CardCatelog/Category1" class="text-decoration-none text-dark">
            <div class="card rounded-0">
              <img :src="collection.img" alt="" style="width: 100%;">
            </div>
          </router-link>
          <p>₹{{ collection.price }}</p>
        </div>
      </div>
    </div>



  </div> -->

  <div class="">
    <div v-for="(collect, index) in collections" :key="index" class="my-3">
      <div class="banner" style="background-color: #EFEFED;">
        <div class="container">
          <div class="row">
            <div class="col-8" :class="'order-'+ collect.order">
              <h1 class="mt-4">{{ collect.heading }}</h1>
              <p>{{ collect.text }}</p>
              <button class="btn btn-primary rounded mb-4">{{ collect.button }}</button>
            </div>
            <div class="col-4 ">
              <img :src="collect.img" style="width:100%; height: 100%; object-fit: fill;" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="container px-4 mt-3">
        <div class="row row-cols-3 gx-2">
          <div class="col" v-for="(first, key) in collect.one" :key="key">
            <router-link to="/CardCatelog/Category1" class="text-decoration-none text-dark">
              <div class="card rounded-0">
                <img :src="first.img" alt="" style="width: 100%;">
              </div>
            </router-link>
            <p>₹{{ first.price }}</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  name: "CollectionPage",
  data(){
    return{
      // publicPath: process.env.BASE_URL
    }
  },
  components: {
  },
  computed: {
    collections() {
      return this.$store.getters.getCollections
    },
  }
};
</script>
<style></style>
