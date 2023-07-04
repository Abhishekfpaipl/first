<template>
    <AddressTopnav></AddressTopnav>
    <div style="margin-top: 20px;">
        <SimpleStepper step="2">
            <AddressPage></AddressPage>
            <div class="d-flex justify-content-center align-items center" style="padding-bottom: 100px;">
                <router-link to="delivery" class="text-decoration-none">
                    <!-- <button class="btn btn-success">Continue</button> -->
                </router-link>
            </div>
        </SimpleStepper>
    </div>
</template>
<script>
import AddressTopnav from '@/components/NavBar/AddressTopnav.vue';
import SimpleStepper from './SimpleStepper.vue';
import AddressPage from './AddressPage.vue';

export default {
    name: "SimpleStepper1",
    components: {
        SimpleStepper,
        AddressPage,
        AddressTopnav
    }
};
</script>
  
  