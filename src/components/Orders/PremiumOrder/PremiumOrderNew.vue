<template lang="">
    <div >
        <h1 class="container">Premium Orders</h1>
        <PremiumLink active="New"></PremiumLink>
        <div v-for="(order, index) in orders" :key="index" class="d-flex w-100  container align-items-center py-2">
            <div class="d-flex align-items-center w-100">
                <div class="rounded-circle">
                    <img  class="rounded-circle" :src="`${publicPath}${order.img}`" style="height:80px; width:80px; object-fit: cover; object-position: top;">
                </div>
               <div class="w-100">
                    <div class="d-flex justify-content-between ms-2" style="width:100%;">
                        <p class="m-0">{{order.title}}</p>
                        <div class="d-flex">
                            <i class="bi bi-arrow-down text-success"></i> <p>{{order.pull}}</p>
                            <i class="bi bi-arrow-up text-danger"></i> <p>{{order.push}}</p>
                        </div>
                    </div>
                    <div class="">    
                        <StepPer stage="1" style="margin-left: -12px !important;"></StepPer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StepPer from '@/components/Stepper/StepPer.vue'
import PremiumLink from './PremiumLink.vue'
export default {
    name: 'PremiumOrderNew',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders
        }
    },
    components: {
        PremiumLink,
        StepPer
    }
}
</script>
<style lang="">
    
</style>