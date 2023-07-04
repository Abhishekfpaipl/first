<template>
  <SimpleStepper step="3">
    <PaymentPage></PaymentPage>
    <div class="d-flex justify-content-center align-items-center"  style="padding-bottom: 100px;">
      <router-link to="simplestepper4" class="text-decoration-none">
        <button class="btn btn-success">Continue</button>
      </router-link>
    </div>
  </SimpleStepper>
</template>
<script>
import SimpleStepper from './SimpleStepper.vue';
import PaymentPage from './PaymentPage.vue';

export default {
  name: "SimpleStepper3",
  components: {
    SimpleStepper,
    PaymentPage,
  }
};
</script>
