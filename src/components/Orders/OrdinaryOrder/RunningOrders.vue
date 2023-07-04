<template>
    <OrdinaryLink active="Running"></OrdinaryLink>
    <OrderFilter  style="padding-top: 78px; padding-left:5px;padding-bottom: 10px;height: 131.8px;"></OrderFilter>
    <div style="padding-bottom: 100px;">
        <div v-for="(order, index) in orders" :key="index" >
            <router-link :to="'/OrderDetail/' + order.id" class="text-decoration-none text-dark">
                <div class="d-flex justify-content-between container align-items-center mb-2">
                    <div class="d-flex align-items-center w-100 border-top p-2" style="padding-bottom: 0px !important;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop">
                        <!-- <div class="rounded-circle w-25"> -->
                        <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center me-3"
                            style="height:60px; width:60px; box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                            <div style="line-height: 1rem;">{{ order.date }}</div>
                            <small>{{ order.month }}</small>
                        </div>
                        <!-- </div> -->
                        <div class="w-75">
                            <div class="d-flex justify-content-between align-items-center ">
                                <p class="m-0" style="font-size:14px;font-weight:500;">OID: {{ order.oid }} </p>

                                <div v-if="order.statusone === 'Pending'" class="text-danger px-2 rounded">
                                    <i class="bi bi-truck fs-5"></i>
                                </div>

                                <div v-if="order.statusone === 'Shipped'" class="text-dark px-2 rounded">
                                    <i class="bi bi-truck fs-5"></i>
                                </div>

                                <div v-if="order.statusone === 'Delivered'" class="text-success px-2 rounded">
                                    <i class="bi bi-truck fs-5"></i>
                                </div>

                                <div v-if="order.statusone === 'Cancelled'" class="text-secondary d-flex rounded">
                                    <i class="bi bi-truck fs-5 px-1"></i>
                                    <i class="bi bi-x fs-5 px-1"></i>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="">
                                    <p class="m-0" style="font-size:14px;">Invoice: {{ order.invoiceno }}
                                    </p>
                                </div>
                                <div class="">

                                    <div v-if="order.status === 'Paid'" class="text-success px-2 rounded">
                                        <i class="bi bi-wallet2 fs-5"></i>
                                    </div>
                                    <div v-if="order.status === 'Unpaid'" class="text-danger px-2 rounded">
                                        <i class="bi bi-wallet2 fs-5"></i>
                                    </div>
                                    <div v-if="order.status === 'Rejected'" class="text-danger d-flex rounded">
                                        <i class="bi bi-wallet2 fs-5 px-1"></i>
                                        <i class="bi bi-x fs-5 px-1"></i>
                                    </div>

                                  
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
import OrderData from '../../Cart/OrderData.vue'
import POrderData from '../PremiumOrder/POrderData.vue';
import OrderFilter from './OrderFilter.vue';
import OrdinaryLink from './OrdinaryLink.vue';
export default {
    name: 'RunningOrders',
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
    OrderData,
    POrderData,
    OrdinaryLink,
    OrderFilter
},
}
</script>
<style></style>