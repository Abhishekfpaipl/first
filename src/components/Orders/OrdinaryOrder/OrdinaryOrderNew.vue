<template lang="">
    <div >
        <h1 class="container">Ordinary Orders</h1>
        <OrdinaryLink active="New"></OrdinaryLink>
        <div v-for="(order, index) in orders" :key="index" class="d-flex justify-content-between container align-items-center mb-2 mt-2">
            
            <div class="d-flex align-items-center">
                <div class="rounded-circle" >
                    <img  class="rounded-circle" :src="`${publicPath}${order.img}`" style="height:80px; width:80px; object-fit: cover; object-position: top;">
                </div>
                <div class="d-flex flex-column ms-2">
                    <p class="m-0" style="font-size:14px;font-weight:500;">{{order.title}} | {{order.bal}}pcs</p>
                    <StepPer stage="1" class="" style="margin-left: -12px !important;"></StepPer>
                </div>
            </div>
            <div class="d-flex">
                <p style="font-size:14px;font-weight:500;">within {{order.time}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import OrdinaryLink from './OrdinaryLink.vue'
import StepPer from '../../Stepper/StepPer.vue'
export default {
    name: 'OrdinaryOrderNew',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed:{
        orders(){
            return this.$store.getters.getOrders
        }
    },
    components: {
        OrdinaryLink,
        StepPer
    }
}
</script>
<style lang="">
    
</style>