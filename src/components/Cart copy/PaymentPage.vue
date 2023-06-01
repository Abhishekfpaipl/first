<template>
    <div class="container-fluid d-flex flex-md-row justify-content-center mt-5 flex-column">
        <div class=" mb-3">

            <div class="d-flex flex-column justify-content-center align-items-center ">
                <div class="d-flex justify-content-between">
                    <p class="m-0 text-uppercase fw-bold">Choose Delivery Mode</p>
                    <p class="m-0 text-uppercase text-end ms-4">100% Contactless Delivery</p>
                </div>

                <div class="d-flex flex-column">
                    <h6 class="m-2">How fast do you want it?</h6>
                    <input type="radio" class="btn-check" name="options-outlined1" id="standard" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="standard">Standard (Free)</label>

                    <input type="radio" class="btn-check" name="options-outlined1" id="express" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="express">Express (+₹40)</label>
                </div>
            </div>

            <div class="d-flex flex-column justify-content-center align-items-center ">
                <div class="d-flex justify-content-between">
                    <p class="m-0 text-uppercase fw-bold">Choose Payment Method</p>
                    <p class="m-0 text-uppercase text-end ms-4">100% SAFE PAYMENTS</p>
                </div>

                <div class="d-flex flex-column">
                    <h6 class="m-2">How do you want to pay?</h6>

                    <input type="radio" class="btn-check" name="options-outlined" id="Credit-outlined" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="Credit-outlined">Credit/Debit Card <i
                            class="bi bi-credit-card-2-front"></i></label>

                    <input type="radio" class="btn-check" name="options-outlined" id="Upi-outlined" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="Upi-outlined">Upi</label>

                    <input type="radio" class="btn-check" name="options-outlined" id="Cod-outlined" autocomplete="off">
                    <label class="btn btn-outline-success m-2" for="Cod-outlined">Cash on Delivery <i
                            class="bi bi-cash-stack"></i></label>
                </div>
            </div>
            
        </div>
        <div class=" ms-3 mb-3" style=" border-left: 2px solid;">
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
                    <!-- <button class="btn btn-success mt-4">Continue</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    name: "PaymentPage",
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