<template>
  <SimpleStepper step="4">
    <SuccessPage></SuccessPage>
    <div class="d-flex justify-content-center align-items-center mt-4"  style="padding-bottom: 100px;">
      <router-link to="/CategoryNew" class="text-decoration-none">
      <button class="btn btn-success">Continue Shopping</button>
    </router-link>
    </div>  
  </SimpleStepper>
</template>
<script>
import SimpleStepper from './SimpleStepper.vue';
import SuccessPage from './SuccessPage.vue';

export default {
  name: "SimpleStepper4",
  components: {
    SimpleStepper,
    SuccessPage,
  }
};
</script>
