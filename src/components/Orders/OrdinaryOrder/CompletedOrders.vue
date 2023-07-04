<template>
    <div>
        <OrdinaryLink active="Completed"></OrdinaryLink>
        <OrderFilter style="padding-top: 80px;padding-bottom: 10px;"></OrderFilter>
        <div class="container py-3" style="padding-bottom:80px">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                <div class="col" v-for="(complete, index) in completed" :key="index">
                    <div class="card"
                        style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                        <router-link :to="'/CompletedOrderPage/' + complete.id">
                            <img :src="complete.img" alt=""
                                style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius:2%; border-top-right-radius:2%;">
                        </router-link>
                        <!-- <div class="d-flex justify-content-between"> -->

                        <div class="card-footer p-0">
                            <div class="btn-group w-100 rounded-bottom justify-content-end">
                                <!-- <div class="w-50"> -->

                                <router-link :to="'/ProductPage/' + complete.catelog_id"
                                    class="text-decoration-none border-end w-50 text-dark">
                                    <button class="btn w-100 bg-outline-dark rounded-0 my-2 py-0" style="font-size: 10px; ">
                                        <p class="m-0">Detail Page</p>
                                    </button>
                                </router-link>
                                <!-- </div> -->
                                <router-link :to="'/CompletedOrderPage/' + complete.id"
                                    class="text-decoration-none w-50 text-dark">
                                    <button class="btn w-100 border-1 bg-outline-dark rounded-0 my-2 py-0"
                                        style="font-size: 10px;">
                                        <p class="m-0">Order Page</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>

                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrdinaryLink from './OrdinaryLink.vue';
import OrderFilter from './OrderFilter.vue';

export default {
    name: "CompletedOrders",
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        OrdinaryLink,
        OrderFilter
    },
    computed: {
        completed() {
            return this.$store.getters.getCompletedOrders
        }
    }
}
</script>

<style lang="scss" scoped></style>