<template>
    <SimpleStepper step="4" style="margin-top:20px">
      <ConfirmPage></ConfirmPage>
      <div class="d-flex justify-content-center align-items-center mt-4"  style="padding-bottom: 100px;">
      </div>  
    </SimpleStepper>
   
  </template>
  <script>
  import SimpleStepper from '@/components/cart/SimpleStepper.vue';
  import ConfirmPage from '@/components/cart/ConfirmPage.vue';
  
  export default {
    name: "SimpleStepper4",
    components: {
      SimpleStepper,
      ConfirmPage,
    }
  };
  </script>
  