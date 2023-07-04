<template>
    <SimpleStepper step="4" style="margin-top:20px">
      <ConfirmPage></ConfirmPage>
      <div class="d-flex justify-content-center align-items-center mt-4"  style="padding-bottom: 100px;">
        <router-link to="/CategoryNew" class="text-decoration-none">
        <button class="btn btn-success">Continue Shopping</button>
      </router-link>
      </div>  
    </SimpleStepper>
  </template>
  <script>
  import SimpleStepper from './SimpleStepper.vue';
  import ConfirmPage from './ConfirmPage.vue';
  
  export default {
    name: "SimpleStepper4",
    components: {
      SimpleStepper,
      ConfirmPage,
    }
  };
  </script>
  