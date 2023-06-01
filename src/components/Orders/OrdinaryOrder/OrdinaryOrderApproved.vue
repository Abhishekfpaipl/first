<template>
    <div>
        <h1 class="container">Ordinary Orders</h1>
        <!-- <div class="d-flex container justify-content-between">
            <div class="">
                <i class="bi bi-grid-fill fs-3 ms-2"></i>
                <i class="bi bi-shop-window fs-3 ms-2"></i>
                <i class="bi bi-person-fill fs-3 ms-2"></i>
            </div>
        </div> -->
        <OrdinaryLink active="Approved"></OrdinaryLink>
        <div v-for="(order, index) in orders" :key="index"
            class="d-flex justify-content-between container align-items-center mb-2 mt-2">
            <div class="d-flex align-items-center w-100">
                <div class="rounded-circle w-25">
                    <div class="rounded-circle border border-3 d-flex justify-content-center align-items-center"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"
                        style="height:80px; width:80px;">{{ order.date }}</div>
                </div>
                <div class="w-75">
                    <div class="d-flex flex-column ">
                        <p class="m-0" style="font-size:14px;font-weight:500;">{{ order.oid }} | Rs.{{ order.price }}</p>
                        <!-- <StepPer stage="1" class="" style="margin-left: -12px !important;"></StepPer> -->
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="">
                            <p class="m-0" style="font-size:14px;">Items : {{ order.item }} | Qty :
                                {{ order.qty }}</p>
                        </div>
                        <div class="">
                            <p class="m-0 text-success" style="font-size:14px;font-weight:500;">{{ order.pending }} Items
                                Approved</p>
                        </div>
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
                <h1>Hello</h1>
            </div>
        </div>

        <!-- <div v-if="active.order" class="modal show d-block fade" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header justify-content-evenly">
                        <div class="modal-title d-flex align-items-center  " id="exampleModalLabel">
                            <img class="rounded-circle" :src="`${publicPath}${active.order.img}`"
                                style="height:80px; width:80px; object-fit: cover; object-position: top;">
                        </div>
                        <p class="m-0 text-center">{{ active.order.title }} | <span>{{ active.order.pcs }}pcs</span></p>
                    </div>
                    <div class="modal-body d-flex justify-content-between">
                        <p class="text-success">Ready Stocks: <span class="text-dark">{{ active.order.readyQty }}</span>
                        </p>
                        <i class="bi bi-x fs-3"></i>
                    </div>
                    <hr />
                    <div class="modal-body  d-flex justify-content-between">
                        <p class="text-success">15th May 23: <span class="text-dark">{{ active.order.date }}</span></p>
                        <i class="bi bi-x fs-3"></i>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">message</label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="hidemodal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import OrdinaryLink from './OrdinaryLink.vue';

export default {
    name: "OrdinaryOrderApproved",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            // active: {
            //     order: null
            // }
        }
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders
        },

    },
    methods: {
        // showmodal(order) {
        //     this.active.order = order
        // },
        // hidemodal() {
        //     this.active.order = null
        // },
    },
    components: { OrdinaryLink }
}
</script>
<style lang="">
    
</style>