<template>
    <div class="container mt-5" style="padding-bottom: 80px;">
        <div class=" mb-3">
            <BillingAddress></BillingAddress>
        </div>
        <div class="">
            <div class="border mb-5 p-3 bg-light">
                <h3 class="text-center">Choose Delivery Options</h3>
                <div class="d-flex w-100">
                    <div class="container d-flex justify-content-between  p-2 mt-2">
                        <input type="radio" class="btn-check" name="deliveryMethod" id="delivery" autocomplete="off"
                            v-model="selectedMethod" value="delivery" @change="showDelivery" checked>
                        <label class="btn btn-outline-danger rounded-0 w-100" style="opacity: 80%;"
                            for="delivery">Shipping</label>
                    </div>
                    <div class="container d-flex justify-content-between  p-2 mt-2 ">
                        <input type="radio" class="btn-check" name="deliveryMethod" id="pickUp" autocomplete="off"
                            v-model="selectedMethod" value="pickUp" @change="showPickup">
                        <label class="btn btn-outline-danger rounded-0 w-100" style="opacity:80%;"
                            for="pickUp">Pick-Up</label>
                    </div>
                </div>
            </div>
            <div v-if="selectedMethod === 'delivery'">
                <AddressPage></AddressPage>
            </div>
            <div v-else>
                <PickUpAddress></PickUpAddress>
            </div>
            <PriceDetails class="mt-5 bg-light border"></PriceDetails>

            <div class="bill mt-5">
                <p class="mb-0">Press Checkout</p>
            </div>

        </div>
    </div>
    <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
        <div class="w-100 d-flex align-items-center justify-content-around position-fixed"
            style="height: 63px; bottom: 0; background: #f6f6f6;">
            <div style="font-size:12px">
                <p class="m-0 text-center fw-bold">2 Catalogs</p>
                <div class="d-flex gap-2">
                    <p class="mb-0 text-center">Sku 37 </p>
                    <span>|</span>
                    <p class="mb-0 text-center">Qty 220</p>
                </div>
            </div>
            <div class="d=flex"></div>
            <p class="m-0 text-center fw-bold">₹ 2,88,000</p> <i class="bi bi-arrow-right fs-3"></i>
            <div class="">
                <router-link to="/checkout/delivery_address" class="text-decoration-none text-dark">
                    <button class="btn top-brand text-white">Continue</button>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import PriceDetails from './PriceDetails.vue';
import BillingAddress from './BillingAddress.vue';
import AddressPage from './AddressPage.vue';
import PickUpAddress from './PickUpAddress.vue';
export default {
    name: "BillingDetails",
    components: {
        BillingAddress,
        PickUpAddress,
        AddressPage,
        PriceDetails
    },
    data() {
        return {
            selectedMethod: 'delivery'
        };
    },
    methods: {
        showPickup() {
            this.selectedMethod = 'pickUp';
        },
        showDelivery() {
            this.selectedMethod = 'delivery';
        },
    }
}
</script>
<style scoped>
.bill {
    text-align: center;
    position: relative;
    font-weight: 600;
    color: gray;
    text-transform: uppercase;
}

.bill:before {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background: gray;
    left: 0;
    top: 50%;
    position: absolute;
}

.bill:after {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background: gray;
    right: 0;
    top: 50%;
    position: absolute;
}
</style>