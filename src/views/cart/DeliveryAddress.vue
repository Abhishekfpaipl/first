<template>
    <AddressTopnav></AddressTopnav>
    <div style="margin-top: 20px;">
        <SimpleStepper step="3">
            <AddressPage></AddressPage>
            <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
                <div class="w-100 d-flex align-items-center justify-content-between position-fixed"
                    style="height: 63px; bottom: 0; background: #f6f6f6;">

                    <div class="d-flex flex-column" style="width: 50%;">
                        <div class=" ms-3">
                            <p class="m-0 fs-4 ms-2 fw-bold">₹1089</p>
                            <p class="m-0 ms-2">15 Catalogs</p>
                        </div>
                    </div>
                    <div class="me-3" style="width: 50%;">
                        <router-link to="confirm" class="text-decoration-none text-dark">
                            <div class="items">
                                <button class="btn w-100 d-flex me-2 justify-content-center align-items-center text-center"
                                    style="background-color: #eca1a6;">
                                    <p class="text-center m-0 ms-2">Continue</p>
                                </button>
                            </div>
                        </router-link>
                    </div>

                </div>
            </nav>

            <!-- <div class="d-flex justify-content-center align-items center" style="padding-bottom: 100px;">
                <router-link to="delivery_payment" class="text-decoration-none"> -->
            <!-- <button class="btn btn-success">Continue</button> -->
            <!-- </router-link>
            </div> -->
        </SimpleStepper>
    </div>
</template>
<script>
import AddressTopnav from '@/components/NavBar/AddressTopnav.vue';
import SimpleStepper from '@/components/cart/SimpleStepper.vue';
import AddressPage from '@/components/cart/AddressPage.vue';

export default {
    name: "SimpleStepper1",
    components: {
        SimpleStepper,
        AddressPage,
        AddressTopnav
    }
};
</script>
  
  