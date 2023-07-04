<template>
    <div style="padding-bottom: 100px;">
        <h1 class="container">Orders</h1>
        <!-- <OrdinaryLink active="Pending"></OrdinaryLink> -->
        <div v-for="(order, index) in orders" :key="index">
            <router-link :to="'/OrderDetail/' + order.id" class="text-decoration-none text-dark">
                <div class="d-flex justify-content-between container align-items-center mb-2 mt-2">
                    <div class="d-flex align-items-center w-100" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop">
                        <div class="rounded-circle w-25">
                            <div class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                                style="height:80px; width:80px;">{{ order.date }}</div>
                        </div>
                        <div class="w-75">
                            <div class="d-flex flex-column ">
                                <p class="m-0" style="font-size:14px;font-weight:500;">OID: {{ order.oid }} </p>
                                <!-- <StepPer stage="1" class="" style="margin-left: -12px !important;"></StepPer> -->
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="">
                                    <p class="m-0" style="font-size:14px;">Invoice: {{ order.invoiceno }}
                                    </p>
                                </div>
                                <div class="">
                                    <p class="m-0 text-danger" style="font-size:14px;font-weight:500;">{{ order.status }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="offcanvas  offcanvas-end" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasTopLabel">Orders</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <OrderData></OrderData>
                <POrderData></POrderData>
            </div>
        </div>
    </div>
</template>
<script>
// import OrdinaryLink from './OrdinaryLink.vue'
// import StepPer from '../../Stepper/StepPer.vue'
import OrderData from '../../Cart/OrderData.vue'
import POrderData from '../PremiumOrder/POrderData.vue';
export default {
    name: 'OrdinaryOrderPending',
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
        // OrdinaryLink,
        // StepPer,
        OrderData,
        POrderData
    },
}
</script>
<style>
</style>