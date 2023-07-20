<template>
  <BillingTopnav></BillingTopnav>
  <SimpleStepper step="2" style="margin-top:20px">
    <BillingDetails></BillingDetails>
  </SimpleStepper>
</template>
<script>
import BillingTopnav from '@/components/NavBar/BillingTopnav.vue';
import SimpleStepper from '@/components/cart/SimpleStepper.vue';
import BillingDetails from '@/components/cart/BillingDetails.vue';

export default {
  name: "SimpleStepper3",
  components: {
    SimpleStepper,
    BillingDetails,
    BillingTopnav
}
};
</script>
  