<template>
    <div>
        <div class="d-flex container justify-content-between">
            <h1>Premium Orders</h1>
            <div class="">
                <i class="bi bi-grid-fill fs-3 ms-2"></i>
                <i class="bi bi-shop-window fs-3 ms-2"></i>
                <i class="bi bi-person-fill fs-3 ms-2"></i>
            </div>
        </div>
        <PremiumLink active="Action"></PremiumLink>
        <div v-for="(order, index) in orders" :key="index"
            class="d-flex justify-content-between container align-items-center mb-2 mt-2">

            <div class="d-flex align-items-center">
                <div class="rounded-circle">
                    <img class="rounded-circle" :src="`${publicPath}${order.img}`"
                        style="height:80px; width:80px; object-fit: cover; object-position: top;">
                </div>
                <div class="d-flex align-items-start flex-column ms-2">
                    <p class="m-0">{{ order.title }} | <span>{{ order.pcs }}</span></p>
                    <p class="text-success" style="font-weight: 500; font-size: 14px;">{{ order.action }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PremiumLink from './PremiumLink.vue'
export default {
    name: 'PremiumOrderAction',
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
        PremiumLink
    }
}
</script>
<style></style>