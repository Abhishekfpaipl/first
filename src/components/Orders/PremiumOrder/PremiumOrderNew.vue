<template lang="">
    <div >
        <h1 class="container">Premium Orders</h1>
        <PremiumLink active="New"></PremiumLink>
        <div v-for="(order, index) in orders" :key="index" class="d-flex w-100  container align-items-center py-2">
            <div class="d-flex align-items-center w-100"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <div class="rounded-circle">
                    <img  class="rounded-circle" :src="`${publicPath}${order.img}`" style="height:80px; width:80px; object-fit: cover; object-position: top;">
                </div>
               <div class="w-100">
                    <div class="d-flex justify-content-between ms-2" >
                        <p class="m-0">{{order.title}}</p>
                        <div class="d-flex">
                            <i class="bi bi-arrow-down text-success"></i> <p class="m-0">{{order.pull}}</p>
                            <i class="bi bi-arrow-up text-danger"></i> <p class="m-0">{{order.push}}</p>
                        </div>
                    </div>
                    <div class="mt-2">    
                        <StepPer stage="1" style="margin-left: -12px !important;"></StepPer>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas  offcanvas-end" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasTopLabel">Orders</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               <POrderData></POrderData>
            </div>
        </div>
    </div>
</template>
<script>
import StepPer from '@/components/Stepper/StepPer.vue'
import POrderData from './POrderData.vue'
import PremiumLink from './PremiumLink.vue'
export default {
    name: 'PremiumOrderNew',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            // currentSyep: ''
        }
    },
    // mounted(){
    //     let steps = this.$store.getters.allSteps;
    //     let page = this.$router.
    //     let indes = steps.find
    //     this.currentSyep indes
    // },
    computed: {
        orders() {
            return this.$store.getters.getOrders
        }
    },
    components: {
        PremiumLink,
        StepPer,
        POrderData
    }
}
</script>
<style lang="">
    
</style>