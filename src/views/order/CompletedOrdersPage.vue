<template>
    <div>
        <OrdinaryLink active="Completed"></OrdinaryLink>
        <CompletedOrderFilter style="padding-top:80px !important;"></CompletedOrderFilter>
        <div class="container py-3" style="padding-bottom:80px">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="(complete, index) in completed" :key="index">
                    <div class="card border ">
                        <router-link :to="'/orders/completed-order/' + complete.id">
                            <img :src="complete.img" alt=""
                                style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius:2%; border-top-right-radius:2%;">
                        </router-link>
                        <div class="card-footer p-0">
                            <div class="btn-group w-100 rounded-bottom justify-content-end">
                                <router-link :to="'/catalog-page/' + complete.catelog_id"
                                    class="text-decoration-none border-end w-50 text-dark">
                                    <button class="btn w-100 bg-outline-dark rounded-0 my-2 py-0" style="font-size: 10px; ">
                                        <p class="m-0">Detail Page</p>
                                    </button>
                                </router-link>
                                <router-link :to="'/orders/completed-order/' + complete.id"
                                    class="text-decoration-none w-50 text-dark">
                                    <button class="btn w-100 border-1 bg-outline-dark rounded-0 my-2 py-0"
                                        style="font-size: 10px;">
                                        <p class="m-0">Order Page</p>
                                    </button>
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
import CompletedOrderFilter from '@/components/Orders/CompletedOrderFilter.vue';
import OrdinaryLink from '@/components/Orders/OrdinaryLink.vue';

export default {
    name: "CompletedOrders",
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        OrdinaryLink,
        CompletedOrderFilter
    },
    computed: {
        completed() {
            return this.$store.getters['order/getCompletedOrders']
        }
    }
}
</script>