<template>
  <SimpleStepper step="2">
    <AddressPage></AddressPage>
    <div class="d-flex justify-content-center align-items-center"  style="padding-bottom: 100px;">
      <router-link to="/SimpleStepper3" class="text-decoration-none">
        <button class="btn btn-success">Continue</button>
      </router-link>
    </div>
  </SimpleStepper>
</template>
<script>
import SimpleStepper from './SimpleStepper.vue';
import AddressPage from './AddressPage.vue';

export default {
  name: "SimpleStepper2",
  components: {
    SimpleStepper,
    AddressPage,
  }
};
</script>
