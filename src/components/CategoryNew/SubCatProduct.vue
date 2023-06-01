<template>
    <div>
      <CatelogFilter></CatelogFilter>
  
      <div class="container pt-5">
        <div v-for="x in looper" :key="x">
            <p class="small mb-0">{{ x }}</p>
            <div class="row row-cols-2  row-cols-md-3 row-cols-xl-4 g-3">
              <div class="col mb-3" v-for="(SubCatProduct, index) in SubCatProducts" :key="index">
                <div class="card">
                  <img :src="SubCatProduct.img">
                </div>
                <div class="px-1">
                  <p class="m-0" style="font-size: 12px;">{{ SubCatProduct.name }}</p>
                  <p class="m-0 fw-bold">₹{{ SubCatProduct.price }}</p>
                  <div class="rounded-circle" :style="'background-color:' + SubCatProduct.color"
                    style="height:20px;width: 20px;border: 1px solid black;"></div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  import CatelogFilter from '../Catelog/CatelogFilter.vue';
  
  export default {
    name: "SubCatProduct",
    data() {
      return {
        looper: Array.from({ length: 10 })
      }
    },
    computed: {
      SubCatProducts() {
        return this.$store.getters.getSubCatProducts;
      }
    },
    mounted() {
      console.log(this.$route.params);
    },
    components: { CatelogFilter }
  }
  </script>
  
  <style lang="scss" scoped></style>
  