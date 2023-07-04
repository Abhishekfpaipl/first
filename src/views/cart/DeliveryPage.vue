<template>
    <div class="container-fluid d-flex flex-md-row justify-content-center mt-5 flex-column">
        <div class=" mb-3">

            <div class="d-flex flex-column justify-content-center align-items-center ">
                <div class="d-flex flex-column justify-content-center ">
                    <p class="m-0 text-center text-uppercase fw-bold">Choose Delivery Mode</p>
                    <small class="m-0 text-muted text-uppercase text-center" style="font-size: 10px;">100% Contactless
                        Delivery</small>
                </div>

                <div class="d-flex flex-column mt-2 w-100 container">
                    <!-- <h6 class="m-2">How fast do you want it?</h6> -->
                    <input type="radio" class="btn-check" name="options-outlined1" id="standard" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="standard"><b>Pick-Up</b> (Without Any Extra Charge)</label>

                    <input type="radio" class="btn-check" name="options-outlined1" id="express" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="express"><b>Delivery</b> (Charges On To Pay Basis)</label>
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

                <div class="d-flex flex-column mt-2 w-100 container">
                    <!-- <h6 class="m-2">How do you want to pay?</h6> -->
                    <input type="radio" class="btn-check" name="options-outlined" id="Credit-outlined" autocomplete="off">
                    <label class="btn btn-outline-success m-2 " for="Credit-outlined">Bank Transfer</label>

                    <input type="radio" class="btn-check" name="options-outlined" id="Upi-outlined" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="Upi-outlined">UPI</label>

                    <input type="radio" class="btn-check" name="options-outlined" id="Cod-outlined" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="Cod-outlined">Pay On Pick-Up</label>
                </div>
            </div>

        </div>
        <!-- <div class=" ms-3 mb-3" style=" border-left: 2px solid;">
            <div class=" px-3 card-body">
                <h5 class="card-title">Price Details</h5>
                <div class="d-flex justify-content-between">
                    <p class="card-subtitle text-body-secondary">Total Product Price</p>
                    <p class="m-0">₹{{ price }}</p>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <p class="card-subtitle text-success ">Total Discounts</p>
                    <p class="m-0 text-success">-₹{{ discount }}</p>
                </div>
                <hr class="m-0" />
                <div class="d-flex justify-content-between mt-2">
                    <p class="card-text">Order Total</p>
                    <p class="card-text">₹{{ price - discount }}</p>
                </div>
                <div class="p-2" style="background-color: #D3F4EA;">
                    <p class="m-0 text-center">YAY! Your total cart discount is ₹{{ discount }}</p>
                </div>
                <div class="d-flex flex-column">
                    <small class="text-info">Clicking on Continue will not deduct any money</small>
                </div>
            </div>
        </div> -->
    </div>

    <nav class="navbar fixed-bottom navbar-light" style="z-index: 20 !important;">
        <div class="w-100 d-flex align-items-center justify-content-between position-fixed"
            style="height: 63px; bottom: 0; background: #f6f6f6;">

            <div class="d-flex flex-column" style="width: 50%;">
                <div class=" ms-3">
                    <p class="m-0 fs-4 ms-2 fw-bold">₹1089</p>
                    <p class="m-0 ms-2">15 Catalogs</p>
                </div>
                <!-- <div class="items" > -->
                <!-- <router-link to="" class="text-dark text-decoration-none">
                        </router-link> -->
                <!-- </div> -->
            </div>
            <div class="me-3" style="width: 50%;">
                <router-link to="/checkout/confirm" class="text-decoration-none text-dark">
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
            // currentStep: ''
        };
    },
    components: {

    },
    computed: {
        allSteps() {
            return this.$store.getters.getAllsteps
        }
    },
    // mounted() {
    //     let steps = this.$store.getters.allSteps;
    //     let page = this.$router.
    //     let indes = steps.find
    //     this.currentStep indes
    // },
    // mounted() {
    //     let steps = this.$store.getters.allsteps;
    //     let page = this.$router.currentRoute.route;
    //     let index = steps.find(step => step.route === page);
    //     this.currentStep = index >= 0 ? steps[index].route : '';
    // },
    methods: {
    },

}
</script>

<style lang="scss" scoped></style>