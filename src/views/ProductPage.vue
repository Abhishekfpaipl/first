<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-5 d-flex prod-img">
        <div class="d-flex flex-column prod-thumb">
          <img
            class="mb-2"
            :src="image"
            style="width: 60px"
            v-for="(image, index) in images"
            :key="index"
            v-on:click="selectImage(image)"
          />
        </div>
        <div class="ms-2 main-img">
          <img :src="selectedImage" class="flex-fill" style="width: 100%" />
        </div>
      </div>
      <div class="col-lg-7">
        <h2 class="fw-bold text-start fs-5 mt-2">
          Medium Impact Padded Racerback Sports Bra in Yellow
        </h2>
        <hr />
        <div class="">
          <div class="row w-100 d-flex">
            <div class="col text-start d-flex justify-content-between">
              <div>
                <span class="me-2 text-dark fw-bold fs-4">₹ 458</span
                ><del class="text-secondary fs-5">₹ 1199</del>
                <!-- <span class="badge bg-danger ms-2">61%</span> -->
                <kbd>61%</kbd>
              </div>

              <ProductRating />
            </div>
          </div>
          <div class="container mt-4 border border-1 mb-4">
            <div class="row">
              <div class="col-6">
                <p class="text-center">5 - 199 pieces</p>
                <p class="text-center fw-bold" style="color: orangered">
                  $9.30
                </p>
              </div>
              <div class="col-6">
                <p class="text-center">200 - 999 pieces</p>
                <p class="text-center fw-bold" style="color: orangered">
                  $8.50
                </p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-6">
                <p class="text-center">1000 - 4999 pieces</p>
                <p class="text-center fw-bold" style="color: orangered">
                  $7.90
                </p>
              </div>
              <div class="col-6">
                <p class="text-center">>= 5000 pieces</p>
                <p class="text-center fw-bold" style="color: orangered">
                  $6.90
                </p>
              </div>
            </div>
          </div>

          <!-- <div class="table-responsive mt-4">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Total Amt.</th>
                  <th scope="col">₹68,400</th>
                  <th scope="col">₹68,400</th>
                  <th scope="col">-----</th>
                  <th scope="col">-----</th>
                  <th scope="col">-----</th>
                  <th scope="col">-----</th>
                  <th scope="col">-----</th>
                </tr>
                <tr>
                  <th scope="col">Total Qty</th>
                  <th scope="col">-</th>
                  <th scope="col"> <p class="text-center">139</p> </th>
                  <th scope="col">-</th>
                  <th scope="col">-</th>
                  <th scope="col">-</th>
                  <th scope="col">-</th>
                  <th scope="col">11</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Size</th>
                  <td>
                    <p class="text-center mb-0">XS</p>
                    <p class="mt-1 text-center " style="font-size: 12px">₹456</p>
                  </td>
                  <td>
                    <p class="text-center mb-0">S</p>
                    <p class="mt-1 text-center" style="font-size: 12px">₹456</p>
                  </td>
                  <td>
                    <p class="text-center mb-0">M</p>
                    <p class="mt-1 text-center" style="font-size: 12px">₹456</p>
                  </td>
                  <td>
                    <p class="text-center mb-0">L</p>
                    <p class="mt-1 text-center" style="font-size: 12px">₹456</p>
                  </td>
                  <td>
                    <p class="text-center mb-0">XL</p>
                    <p class="mt-1 text-center" style="font-size: 12px">₹456</p>
                  </td>
                  <td>
                    <p class="text-center mb-0">XXL</p>
                    <p class="mt-1 text-center" style="font-size: 12px">₹456</p>
                  </td>
                  <td>
                    <p class="text-center mb-0">Free</p>
                    <p class="mt-1 text-center" style="font-size: 12px">₹456</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Colors</th>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: yellow; height:25px; width: 25px;"></button>
                  </td>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: black; height:25px; width: 25px;"></button>
                  </td>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: hotpink; height:25px; width: 25px;"></button>
                  </td>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: cyan; height:25px; width: 25px;"></button>
                  </td>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: orangered; height:25px; width: 25px;"></button>
                  </td>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: brown; height:25px; width: 25px;"></button>
                  </td>
                  <td>
                    <button class="btn rounded-circle me-2"
                      style="background-color: blue; height:25px; width: 25px;"></button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Qty</th>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                  <td>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" value="1"
                      min="1" max="100" style="width: 100% !important" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->

          <!-- Vertical Table -->
          <div class="d-flex">
            <table class="table table-responsive">
              <thead>
                <tr>
                  <td scope="col">Amount</td>
                  <td scope="col">Pieces</td>
                  <td scope="col">Sizes</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row"><p class="mt-2">₹68,400</p></td>
                  <td><p class="text-center mt-2">5</p></td>
                  <td><p class="text-center mt-2">XS</p></td>
                </tr>
                <tr>
                  <td scope="row"><p class="mt-2">₹3,648</p></td>
                  <td><p class="text-center mt-2">8</p></td>
                  <td><p class="text-center mt-2">S</p></td>
                </tr>
                <tr>
                  <td scope="row"><p class="mt-2">₹4,104</p></td>
                  <td><p class="text-center mt-2">9</p></td>
                  <td><p class="text-center mt-2">M</p></td>
                </tr>
                <tr>
                  <td scope="row"><p class="mt-2">₹2,280</p></td>
                  <td><p class="text-center mt-2">5</p></td>
                  <td><p class="text-center mt-2">L</p></td>
                </tr>
                <tr>
                  <td scope="row"><p class="mt-2">₹2,736</p></td>
                  <td><p class="text-center mt-2">6</p></td>
                  <td><p class="text-center mt-2">XL</p></td>
                </tr>
                <tr>
                  <td scope="row"><p class="mt-2">₹1,368</p></td>
                  <td><p class="text-center mt-2">3</p></td>
                  <td><p class="text-center mt-2">XXL</p></td>
                </tr>
                <tr>
                  <td scope="row"><p class="mt-2">₹3,648</p></td>
                  <td><p class="text-center mt-2">8</p></td>
                  <td><p class="text-center mt-2">Free</p></td>
                </tr>
              </tbody>
            </table>
            <table class="table table-responsive">
              <thead>
                <tr>
                  <td scope="col">Colors</td>
                  <td scope="col">Rate</td>
                  <td scope="col">Qty</td>
                </tr>
              </thead>
              <tbody>
                <div v-for="(color, index) in colors" :key="index">
                <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: yellow;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                    <td>
                      <p class="text-center mt-2">{{ color.price }}</p>
                    </td>
                    <td>
                      <p>{{ color.quant }}</p>
                      <!-- <input type="text" id="quantity" name="quantity" class="form-control input-number w-25" style="width: 100% !important"/> -->
                    </td>
                  </tr>
                </div>



<!-- ------------------------------------------------------------------------------------------------------------------- -->
                <!-- <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: hotpink;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                  <td><p class="text-center mt-2">₹456</p></td>
                  <td>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number w-25"
                      value="1"
                      min="1"
                      max="100"
                      style="width: 100% !important"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: black;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                  <td><p class="text-center mt-2">₹456</p></td>
                  <td>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number w-25"
                      value="1"
                      min="1"
                      max="100"
                      style="width: 100% !important"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: brown;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                  <td><p class="text-center mt-2">₹456</p></td>
                  <td>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number w-25"
                      value="1"
                      min="1"
                      max="100"
                      style="width: 100% !important"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: orange;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                  <td><p class="text-center mt-2">₹456</p></td>
                  <td>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number w-25"
                      value="1"
                      min="1"
                      max="100"
                      style="width: 100% !important"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: blue;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                  <td><p class="text-center mt-2">₹456</p></td>
                  <td>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number w-25"
                      value="1"
                      min="1"
                      max="100"
                      style="width: 100% !important"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="text-center mt-2">
                      <button
                        class="btn rounded-circle me-2"
                        style="
                          background-color: green;
                          height: 25px;
                          width: 25px;
                        "
                      ></button>
                    </p>
                  </td>
                  <td><p class="text-center mt-2">₹456</p></td>
                  <td>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      class="form-control input-number w-25"
                      value="1"
                      min="1"
                      max="100"
                      style="width: 100% !important"
                    />
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>

          <!-- counter code starts -->
          <!-- <p>You have clicked {{ counter }} times.</p>
          <button @click="incrementCount">Click Me</button>
          <button @click="() => counter = 0">Reset Count</button>
          <button @click="incrementCount1">Click Me</button>
          <p>You have clicked {{ count }} times.</p>
          <button @click="() => count = 0">Reset Count</button> -->
          <!-- counter code ends -->

          <div class="border border-1 d-flex mb-4">
            <div class="col-6">
              <h6 class="text-center fw-bold">Total Qantity</h6>
              <p class="text-center fs-4 fw-bold">150</p>
            </div>
            <div class="col-6">
              <h6 class="text-center fw-bold">Total Price</h6>
              <p class="text-center fs-4 fw-bold">₹68,400</p>
            </div>
          </div>
          <div class="border border-1">
            <p class="text-center">Minimum Order Quantity (MOQ)</p>
            <p class="text-center">10 pcs (You can Pick Any Color, Any Size)</p>
          </div>

          <div
            class="border border-1 mt-4"
            style="border-style: dashed !important; border: 1px solid"
          >
            <p class="text-center ms-2 fs-6">Couldn't find your size?</p>
            <a href="" class="text-end fw-bold" style="color: black">
              <p class="text-center fs-6 ms-2">Request your size here</p>
            </a>
          </div>
          <div class="d-flex"></div>
          <div class="d-flex mt-4 justify-content-center">
            <i class="bi bi-truck me-2 fs-6"></i>
            <p class="text-center fw-bold">Estimate Delivery</p>
          </div>
          <div class="d-flex justify-content-center">
            <p class="text-start me-2">Shipping |</p>
            <p class="text-start me-2">Discreet packaging |</p>
            <p class="text-start">Return Policy</p>
          </div>
          <div class="d-flex justify-content-center">
            <input
              type="text"
              class="form-control input-number w-25"
              placeholder="Enter Your Pincode"
              required
              style="width: 50% !important"
            />
            <button class="btn btn-primary">Check</button>
          </div>

          <p class="text-center mt-4 fw-bold">Product Feature</p>
          <div class="text-center">
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >FULL COVERAGE BRAS |</a
            >
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >NON WIRE BRAS |</a
            >
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >PADDED BRAS |</a
            >
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >POLYAMIDE BRAS |</a
            >
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >RACERBACK BRAS |</a
            >
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >SOLID BRAS |</a
            >
            <a
              href=""
              class="me-2"
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >SPANDEX |</a
            >
            <a
              href=""
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >SPANDEX BRASSPORTS BRAS |</a
            >
            <a
              href=""
              style="text-decoration: none; font-size: 10px; color: hotpink"
              >SPORTS BRAS</a
            >
          </div>

          <div
            class="d-flex flex-column border border-2 mt-4 align-items-center"
          >
            <span class="d-flex"
              ><img
                src="https://image.clovia.com/media/images/iconSmall/SR-2-.png"
                alt=""
            /></span>
            <p class="text-start ms-3" style="font-size: 12px">
              Full coverage cups for no top & side spillage.
            </p>
            <a
              href=""
              class="text-uppercase text-start ms-4 fw-normal"
              style="color: black; font-size: 12px"
              >view similar products</a
            >
          </div>
          <ProductDesc></ProductDesc>
          <div
            class="d-flex justify-content-around mt-4 mb-4"
            style="gap: 20px"
          >
            <button type="button" class="btn btn-success" disabled>
              <i class="bi bi-cash-stack"></i>
              <p class="mb-0 mt-0" style="font-size: 12px">Cod Available</p>
            </button>
            <button type="button" class="btn btn-success" disabled>
              <i class="bi bi-arrow-repeat"></i>
              <p class="mb-0 mt-0" style="font-size: 12px">15 days returns</p>
            </button>
            <button type="button" class="btn btn-success" disabled>
              <i class="bi bi-truck"></i>
              <p class="mb-0 mt-0" style="font-size: 12px">Free shipping</p>
            </button>
          </div>
          <div class="border border-1">
            <p class="text-start m-4">
              Unsure of your bra size? Find your perfect fit and we handpick the
              most suitable bra styles crafted to flatter your curves in just 30
              seconds!
            </p>
            <a href="" style="text-decoration: none">
              <p
                class="text-start ms-4 fw-bold"
                style="color: hotpink; font-size: 14px"
              >
                Take the CloviaCurve <sup>TM</sup> Fit Test>>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12">
        <FeaturedCollections />
        <LastView />
      </div>
    </div>
  </div>
</template>

<script>
import ProductRating from "../components/ProductRating.vue";
import ProductDesc from "@/components/ProductDesc.vue";
import FeaturedCollections from "@/components/FeaturedCollections.vue";
import LastView from "../components/LastView.vue";
export default {
  name: "ProductPage",
  data() {
    return {
      images: [
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-193186.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-313252.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-159363.jpg",
        "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-brs046p03-910477.jpg",
      ],
      selectedImage: {},
      counter: 0,
      count:0
    }
  },
  computed: {
    colors() {
      return this.$store.getters.getColors;
    }
  },
  mounted() {
    this.selectedImage = this.images[0];
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
    },
    incrementCount(){
      this.counter++;
    },
   incrementCount1(){
    this.count--;
   }
  },
  components: {
    ProductRating,
    ProductDesc,
    FeaturedCollections,
    LastView
  }
};
</script>

<style scoped>
@media (max-width: 999px) {
  .prod-img {
    display: flex;
    flex-direction: column-reverse;
  }
  .prod-thumb {
    flex-direction: row !important;
    gap: 1rem;
    margin: 1rem 2rem 0 2rem;
  }
  .main-img {
    width: 100%;
    padding-right: 12px !important;
    margin-right: 0.5rem !important;
  }
}
</style>
