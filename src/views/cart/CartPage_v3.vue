<template>
    <div class="mt-2">
        <div v-for="(product, index) in products" :key="index" class="py-2"
            style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
            <div class=" px-2">
                <div class="d-flex py-2" data-bs-toggle="collapse" :data-bs-target="'#collapseTwo' + product.id"
                    aria-expanded="false" :aria-controls="'collapseTwo' + product.id">
                    <img :src="product.img" class="" style="height:155px; width: 125px;object-fit: fill;">

                    <div class="ms-2 "  @click="toggleArrow">
                        <p class="ss">{{ product.name }}sdfsd dfdfs sdfasd www</p>

                        <div class="d-flex gap-2">
                            <div class="">
                                <p class="mb-1" style="font-size: 14px">Total Amount :</p>
                                <p class="mb-1" style="font-size: 14px">Average Rate:</p>
                                <p class="mb-1" style="font-size: 14px">Total Pieces:</p>
                            </div>
                            <div class="">
                                <p class="mb-1" style="font-size: 14px">{{ product.amount }}</p>
                                <p class="mb-1" style="font-size: 14px">{{ product.rate }}</p>
                                <p class="mb-1" style="font-size: 14px">{{ product.pieces }}</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-link text-decoration-none text-dark"  style="font-size: 14px">
                                <i :class="['bi', 'bi-arrow-' + (isExpanded ? 'up' : 'down' )]" ></i> Click for Update
                            </button>
                        </div>
                        <!-- <p class="text-end m-0">Update</p> -->
                    </div>
                </div>

                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" style="border: 0px !important;">
                        <div :id="'collapseTwo' + product.id" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body p-0 rounded-0 border-0" style="background-color: #E8E8E8;">
                                <template v-if="index === 0">
                                    <OrderData></OrderData>
                                </template>
                                <template v-else-if="index === 1">
                                    <POrderData></POrderData>
                                </template>
                                <template v-if="index === 2">
                                    <OrderData></OrderData>
                                </template>
                                <template v-else-if="index === 3">
                                    <POrderData></POrderData>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <RouterLink to="/SavedProduct" class="text-decoration-none text-dark">
            <div class="d-flex justify-content-between border-top border-bottom border-2 p-3">
                <p class=" m-0 fw-bold">Wishlist</p>
                <p class=" m-0 fw-bold">></p>
            </div>
        </RouterLink>

        <div class="container my-2">
            <p style="font-weight:600">Price Details</p>

            <div class="d-flex justify-content-between  py-2">
                <p class="m-0  text-decoration-underline" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomPrice"
                    aria-controls="offcanvasBottomPrice">Total Product Price</p>
                <p class="m-0">+ ₹1232</p>
            </div>
            <div class="d-flex justify-content-between border-bottom pb-2">
                <p class="m-0 text-success text-decoration-underline" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottomDiscount" aria-controls="offcanvasBottomDiscount">Total Discounts</p>
                <p class="m-0 text-success">- ₹122</p>
            </div>
            <div class="d-flex justify-content-between pt-2 ">
                <p class="m-0 ">Order Total</p>
                <p class="m-0 ">₹1105</p>
            </div>
            <div class="p-2" style="background-color: #D3F4EA;">
                <p class="m-0 text-center">YAY! Your total cart discount is ₹127</p>
            </div>
        </div>






        <!-- Total Price -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomPrice"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Product Price</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Product Price</p>
                    <p class="m-0">1217</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Easy Returns</p>
                    <p class="m-0 ">15</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">+ ₹1232</p>
                </div>
            </div>
        </div>

        <!-- Total Discount -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomDiscount"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Discounts</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Supplier Promotional Discount</p>
                    <p class="m-0">-48</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Special Product Discount</p>
                    <p class="m-0 ">-78</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">- ₹126</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderData from '@/components/Cart/OrderData.vue';
import POrderData from '@/components/Orders/PremiumOrder/POrderData.vue';
export default {
    name: "CartPage",
    data() {
        return {
            show: true,
            quantity: 0,
            price: 697,
            discount: 100,
            isExpanded: false
        };
    },
    computed: {
        products() {
            return this.$store.getters.getCartProduct;
        },
       
    },
    methods: {
       
        toggleArrow() {
            this.isExpanded = !this.isExpanded;
        }
    },
    components: { OrderData, POrderData }
}
</script>

<style scoped>
.dot {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #505050;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.nav-bottom.justify-content-evenly {
    display: none;
}

.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.rotate-down {
    transform: rotate(180deg);
}
</style>