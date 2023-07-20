<template>
  <CartTopnav></CartTopnav>
  <SimpleStepper step="1" style="margin-top:10px">
    <CartPage></CartPage>
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