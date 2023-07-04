<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card border-0">
                    <!-- <div class="card-header">
              <h4 class="mb-0">Cart Stepper</h4>
            </div> -->
                    <div class="">
                        <div class="steps px-4 py-2 bg-white w-100" style="position: fixed; top:0%; z-index: 10;">
                            <div v-for="(step, index) in steps" :key="index"
                                :class="['step-item', { 'active': currentStep === index }]">
                                <div class="step-number">{{ index + 1 }}</div>
                                <div class="step-title">{{ step }}</div>
                            </div>
                        </div>
                        <div class="step-content" style="padding-top: 50px; padding-bottom: 80px;">
                            <div v-show="currentStep === 0">
                                <!-- <h5>Cart</h5> -->
                                <CartPage></CartPage>
                                <button class="btn btn-primary" @click="nextStep">Next</button>
                            </div>
                            <div v-show="currentStep === 1">
                                <!-- <h5>Address</h5> -->
                                <AddressPage></AddressPage>
                                <div class="button-group">
                                    <button class="btn btn-secondary" @click="previousStep">Back</button>
                                    <button class="btn btn-primary" @click="nextStep">Next</button>
                                </div>
                            </div>
                            <div v-show="currentStep === 2">
                                <!-- <h5>Delivery and Payment</h5> -->
                                <DeliveryPage></DeliveryPage>
                                <div class="button-group">
                                    <button class="btn btn-secondary" @click="previousStep">Back</button>
                                    <button class="btn btn-primary" @click="nextStep">Next</button>
                                </div>
                            </div>
                            <div v-show="currentStep === 3">
                                <!-- <h5>Order Completed</h5> -->
                                <ConfirmPage></ConfirmPage>
                                <router-link to="/categories">
                                    <button class="btn btn-primary w-100 mt-2">Continue Shopping</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import AddressPage from './AddressPage.vue';
import ConfirmPage from './ConfirmPage.vue';
import DeliveryPage from './DeliveryPage.vue';
import CartPage from './CartPage.vue';
export default {
    data() {
        return {
            steps: ["Cart", "Address", "Delivery", "Completed"],
            currentStep: 0
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
            }
        },
        previousStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        continueShopping() {
            // Perform actions for continuing shopping
        }
    },
    components: { CartPage, AddressPage, DeliveryPage, ConfirmPage }
};
</script>
  
<style scoped>
.steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.step-number {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #6c757d;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
}

.step-title {
    font-size: 0.875rem;
}

.step-item.active .step-number {
    background-color: #0d6efd;
}

.step-content {
    margin-top: 2rem;
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
</style>
  