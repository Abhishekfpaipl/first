<template>
        <!-- <h1 class="text-center mt-4">Your cart is empty</h1> -->
        <div class="container">
            <button type="button" class="btn btn-outline-secondary mt-4"><i class="bi bi-trash-fill"></i> Clear Cart</button>
            <div class="container mt-4" style="padding-bottom: 100px;">
                <div class="row row-cols-xl">
                    <div class="border bg-light d-flex flex-column align-items-center">
                        <div>
                            <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-sports-bra-in-stone-blue-with-racerback-734363.jpg" alt="" class="card-img-top">
                        </div>
                        <div class="qaunt d-flex flex-column align-items-center">
                            <p class="text-center fw-bold mt-4">Quantity</p>
                            <div class="quantity-toggle">
                                <button @click="decrement()" class="btn btn-light border border-1">&mdash;</button>
                                <input type="text" :value="quantity" readonly class="text-center fw-bold mt-4">
                                <button @click="increment()" class="btn btn-light border border-1">&#xff0b;</button>
                            </div>  
                        </div>
                        <div class="card-text fw-bold mt-4">
                            Price : ₹1427
                        </div>
                        <div class="card-text fw-bold mt-4">
                            <i class="bi bi-heart-fill"></i> Save for later
                        </div>
                        <div class="card-text">
                            <button type="button" class="btn btn-outline-danger mt-4"><i class="bi bi-trash-fill"></i>Remove</button>
                        </div>
                </div> 
                </div>
            </div>
        </div>
    
        <!-- <div class="cartData" @receiveInCart="storeData" style="padding-bottom: 100px;">
      <h1>Your cart</h1>
      <div v-for="item in getCart"  :key="item.id">
        <div class="cart-items">
          <h5 class="text-wrap" style="width: 10%;">{{ item.name }}</h5>
          <p>{{ item.quantity }}</p>
          <p>{{ item.val }}</p>
          <h5>{{ amount(item) }}</h5>
        </div>
      </div>
      <h3>TOTAL : {{ total }}</h3>
    </div> -->


</template>
<script>
//  import { mapGetters } from "vuex";
export default {
    name:"CartPage",
    data () {
    return {
      quantity: 1,
      // cartData: [],
    }
  },

  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        console.log('0 nhi hoga')
      } else {
        this.quantity--
      }
    },
    // storeData(data) {
    //     this.cartData = data;
    //   },
    //   amount(item) {
    //     return (Math.round(item.quantity * item.val * 100) / 100).toFixed(2);
    //   },
  },
    // computed: {
    //   ...mapGetters(["getCart"]),
    //   total() {
    //     return (
    //       Math.round(
    //         this.getCart.reduce((acc, cur) => acc + cur.val * cur.quantity, 0) *
    //           100
    //       ) / 100
    //     ).toFixed(2);
    //   },
    // },
  };
</script>
