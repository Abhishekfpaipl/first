<template>
    <div>
        <!-- <h1 class="text-center mt-4">Your cart is empty</h1> -->
        <div class="container">
            <button type="button" class="btn btn-outline-secondary mt-4"><i class="bi bi-trash-fill"></i> Clear Cart</button>
            <div class="container mt-4" style="padding-bottom: 100px;">
                <div class="row">
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
    </div>
</template>
<script>
export default {
    name:"CartPage",
    data () {
    return {
      quantity: 1
    }
  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if(this.quantity === 1) {
        alert('')
      } else {
        this.quantity--
      }
    }
  }
};
</script>
