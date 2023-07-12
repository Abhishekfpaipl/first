<template>
    <div class="container-fluid d-flex flex-md-row justify-content-center mt-5 flex-column">
        <div class=" mb-3">

            <div class="d-flex flex-column justify-content-center align-items-center ">
                <div class="d-flex flex-column justify-content-center ">
                    <p class="m-0 text-center text-uppercase fw-bold">Choose Delivery Mode</p>
                    <small class="m-0 text-muted text-uppercase text-center" style="font-size: 10px;">100% Contactless
                        Delivery</small>
                </div>

                <div v-for="(deliver, index) in delivery" :key="index" class="d-flex flex-column w-100">
                    <input :type="deliver.type" class="btn-check" name="options-outlined1" :id="'delivery' + deliver.id"
                        autocomplete="off">
                    <label class="btn btn-outline-success m-2" :for="'delivery' + deliver.id">{{ deliver.name }}</label>
                </div>
                <div class="d-flex gap-2 text-muted align-items-start" style="font-size: 8px;">
                    <i class="bi bi-star"></i>
                    <p class="m-0" style="margin-top:2px !important">You can change it later.</p>
                </div>
            </div>

            <div class="d-flex flex-column justify-content-center align-items-center mt-4">
                <div class="d-flex flex-column justify-content-center ">
                    <p class="m-0 text-center text-uppercase fw-bold">Choose Payment Method</p>
                    <small class="m-0 text-muted text-uppercase text-center" style="font-size: 10px;">100% SAFE
                        PAYMENTS</small>
                </div>

                <div v-for="(pay, index) in payment" :key="index" class="d-flex flex-column w-100">
                    <input :type="pay.type" class="btn-check" name="options-outlined" :id="'payment' + pay.id"
                        autocomplete="off">
                    <label class="btn btn-outline-success m-2 " :for="'payment' + pay.id">{{ pay.name }}</label>
                </div>
            </div>

        </div>
    </div>
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
                <router-link to="/checkout/address" class="text-decoration-none text-dark">
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
</template>

<script>
export default {
    name: "CheckoutDelivery",
    data() {
        return {
            price: 697,
            discount: 100,
            delivery: [
                {
                    id: 1,
                    type: 'radio',
                    name: 'Pick-Up (Without Any Extra Charge)',
                },
                {
                    id: 2,
                    type: 'radio',
                    name: 'Delivery (Charges On To Pay Basis)',
                },
            ],
            payment: [
                {
                    id: 1,
                    type: 'radio',
                    name: 'Bank Transfer'
                },
                {
                    id: 2,
                    type: 'radio',
                    name: 'UPI'
                },
                {
                    id: 3,
                    type: 'radio',
                    name: 'Pay On Pick-Up'
                },
            ]
        };
    },
}
</script>