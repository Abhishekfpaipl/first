<template>
  <ProductTopnav></ProductTopnav>
  <div class="">

    <div class="container " style="padding-bottom:80px">
      <div class="row">
        <div class="col-lg-5 d-flex prod-img px-0">
          <div class="d-flex flex-column prod-thumb" id="scroll">
            <img class="" :src="image" style="width: 60px" v-for="(image, index) in product.images" :key="index"
              v-on:click="selectImage(image)" />
          </div>
          <div class="main-img">
            <!-- <img :src="product.img" class="flex-fill" style="width: 100%;" /> -->
            <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
          </div>
        </div>
        <div class="container col-lg-7 px-3">
          <h1 class=" text-start mb-2 fs-5 py-1 text-dark text-muted">
            {{ product.name }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis
          </h1>
          <h1 class=" text-start mb-2 fs-5 py-1 text-muted fw-bold">
            {{ product.info }}
          </h1>
          <div class="">
            <div class=" w-100 d-flex  me-0">
              <div class="col-12 text-start d-flex align-items-center justify-content-between">
                <div>
                  <span class="me-2 text-dark fw-bold fs-1">₹ {{ product.price }} / pc</span>
                </div>
                <!-- <del class="text-secondary fs-5">₹ 1899</del> -->
                <!-- <span class="badge bg-danger ms-2">61%</span> -->
                <!-- <kbd>56%</kbd> -->

                <div>
                  <p class="fw-bold m-0">Wholesale Price</p>
                  <p class="fw-bold m-0">with {{ product.moq }}pcs MOQ</p>
                </div>
              </div>
            </div>
            <p class="fw-light mb-0">(inclusive of all taxes)</p>

            <!-- <div class="mb-3 mt-3">
            <h5 class="mb-4">Available Sizes</h5>
            <div class="d-flex">
              <div v-for="(size, index) in product.sizes" :key="index" class="">
                <input type="radio" class="btn-check" name="option" :id="'option' + size.id" autocomplete="off">
                <label class="btn btn-outline-success m-2 rounded-0" :for="'option' + size.id">{{ size.name }}</label>
              </div>
            </div>
          </div> -->

            <div class="my-3">
              <h6 class="">Available Sizes</h6>
              <div class="d-flex gap-2">
                <div v-for="(size, index) in product.sizes" :key="index" class="rounded-0 w-25"
                  @click="makeActiveSize(size)">
                  <input type="radio" class="btn-check" name="option" :id="'option' + index" autocomplete="off">
                  <label class="btn btn-outline-success m-2 rounded-0" :for="'option' + index">{{ size.name }}</label>
                </div>
              </div>
              <div class="row g-0 mt-2 w-100 " style="box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.075);">
                <div class="col-6 " v-for="(size, index) in activeSize.mesurements" :key="index">
                  <div class="border-start p-3">
                    <h6>{{ size.name }}:</h6>
                    <div class="text-muted"> {{ size.value }}</div>
                  </div>
                </div>
              </div>
            </div>



            <!-- <TableTest pieces="product"></TableTest> -->
            <PremiumTable></PremiumTable>

            <OrdinaryTable></OrdinaryTable>

            <!-- <div class="mb-3">
            <h5 class="mb-4">Available Colors</h5>
            <button v-for="(color, index) in product.colors" :key="index" class="btn rounded-circle me-4"
              :style="'height: 25px; width: 25px; background-color:' + color.name"></button>
          </div>

          <div class="d-flex flex-column text-start mb-3">
            <p class="text-center d-flex fw-bold">
              Select Qty
            </p>
            <div class="quantity-toggle d-flex align-items-center justify-content-start">
              <button @click="decrement" class="btn btn-light btn-sm border border-1">
                <i class="bi bi-dash"></i>
              </button>
              <input type="number" class="fw-bold form-control-sm px-2 text-center" v-model="quantity"
                style="width: 20%;" />
              <button @click="increment" class="btn btn-light btn-sm border border-1">
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <p class="fw-bold mt-3"> Total Amount :- ₹ {{ quantity * product.price }}</p>
          </div> -->


            <div class="mb-3 mt-3">
              <h5 class="">MOQ - {{ product.moq }} pcs</h5>
              <p class="m-0 fw-light">(You will get all trending Colors & Sizes)</p>
            </div>

            <p class="mb-3"><a href="#" class="text-start text-dark fs-4">Services & Policies</a></p>
            <div class="">
              <button class="py-1 text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Payment Mode:- Cash
                Payment
                Only</button>
              <button class="py-1 text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Delivery Mode:- Pickup
                Services Only</button>
              <button class="py-1 text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Exchange Policy:-
                Unavailable Services</button>
              <button class="py-1 text-dark bg-white border border-1 mt-2 mb-2 w-100 text-start">Return Policy:-
                Unavailable
                Services</button>
            </div>

            <div class=" mt-4 d-flex justify-content-center ">
              <p class="mb-1 fs-6">Couldn't find your size?</p>
            </div>


            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">
              <a href="" class=" text-center text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Request your size here
              </a>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Size Guide</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0240/6641/files/Main_Sizing_Chart-_Women_s_d624cf9c-29ed-4068-b9a0-85a45332df2d_1024x1024.png?v=1672094464"
                      alt="" style="width: 100%;">
                   
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProductBottomnav></ProductBottomnav>
  </div>
</template>

<script>
import OrdinaryTable from '@/components/ProductTable/OrdinaryTable.vue';
import PremiumTable from '@/components/ProductTable/PremiumTable.vue';
import ProductTopnav from '@/components/NavBar/ProductTopnav.vue';
import ProductBottomnav from '@/components/NavBar/ProductBottomnav.vue';

// import router from '../router';
// import TableTest from '@/components/TableTest.vue';
export default {
  name: "ProductPage",
  // props: ['piece'],
  data() {
    return {
      selectedImage: {},
      quantity: 0,
      activeSize: {},
    }

  },
  components: {
    PremiumTable,
    OrdinaryTable,
    ProductTopnav,
    ProductBottomnav
},
  mounted() {
    this.selectedImage = this.product.images[0];

  },
  computed: {

    product() {
      let productId = this.$route.params.productId;
      return this.$store.getters.getProduct(productId);
    }
    // product() {
    //   let product = this.$store.getters.getActiveProduct;
    //   if (!Object.keys(product).length) {
    //     router.push('/CardCatelog') 
    //   }
    //   return product;
    // },
    // products() {
    //   return this.$store.state.getProducts;
    // }
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
    },
    increment() {
      this.quantity = parseInt(this.quantity) + parseInt(this.product.moq);
    },
    decrement() {
      if (this.quantity > this.product.moq) {
        this.quantity = this.quantity - this.product.moq;
      }
    },
    addToCart() {
      this.$store.dispatch('addToCart', {
        product: this.product,
        quantity: this.quantity
      });
    },
    makeActiveSize(size) {
      this.activeSize = size;
    }
    // favs(id) {
    //   this.$store.commit("addToFav", id)
    //   this.$router.push({
    //     path: '/SavedProduct'
    //   })
    // }
  }
};
</script>


<style scoped>
@media (max-width:999px) {
  .prod-img {
    display: flex;
    flex-direction: column-reverse;
  }

  .prod-thumb {
    flex-direction: row !important;
    gap: 1rem;
    margin: 1rem 2rem 1rem 2rem;
    overflow: scroll;
  }

  .main-img {
    width: 100%;
    /* padding-right: 12px !important; */
    margin-right: 0.5rem !important;
  }
}

#scroll::-webkit-scrollbar {
  background-color: none;
  display: none;
}

.nav-bottom.justify-content-evenly{
  display: none !important;
}
/* nav.navbar.fixed-bottom.navbar-light.bg-light {
    display: none !important;
} */

</style>