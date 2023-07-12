<template>
  <CartTopnav></CartTopnav>
  <SimpleStepper step="1" style="margin-top:20px">
    <CartPage></CartPage>
    <div class="d-flex justify-content-center align-items center" style="padding-bottom: 100px;">
      <router-link to="delivery_payment" class="text-decoration-none">
        <!-- <button class="btn btn-success" >Continue</button> -->
      </router-link>
    </div>
  </SimpleStepper>
</template>
<script>
import SimpleStepper from '@/components/cart/SimpleStepper.vue';
import CartPage from '@/components/cart/CartPage.vue';
import CartTopnav from '@/components/NavBar/CartTopnav.vue';

export default {
  name: "SimpleStepper1",
  components: {
    SimpleStepper,
    CartPage,
    CartTopnav
  }
};

</script>