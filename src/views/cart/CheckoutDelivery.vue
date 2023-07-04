<template>
  <DeliveryTopnav></DeliveryTopnav>
  <SimpleStepper step="3" style="margin-top:20px">
    <DeliveryPage></DeliveryPage>
    <div class="d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
      <router-link to="confirm" class="text-decoration-none">
        <!-- <button class="btn btn-success">Continue</button> -->
      </router-link>
    </div>
  </SimpleStepper>
</template>
<script>
import DeliveryTopnav from '@/components/NavBar/DeliveryTopnav.vue';
import SimpleStepper from './SimpleStepper.vue';
import DeliveryPage from './DeliveryPage.vue';

export default {
  name: "SimpleStepper3",
  components: {
    SimpleStepper,
    DeliveryPage,
    DeliveryTopnav
}
};
</script>
  