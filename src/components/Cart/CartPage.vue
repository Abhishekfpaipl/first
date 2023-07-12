<template>
    <div class="accordion mt-2" id="accordionExample">
        <div class="accordion-item py-2 m-3 rounded-0 border" v-for="(product, index) in products" :key="index">

            <h2 class="accordion-header container m-0" style="padding: 0px 8px !important;">
                <button class="accordion-button p-0 d-flex flex-column" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapseCart' + product.id" aria-expanded="true"
                    :aria-controls="'collapseCart' + product.id">
                    <div class="d-flex ">
                        <img :src="product.img" class=""
                            style="height:155px; width: 125px;object-fit: fill;">

                        <div class="d-flex flex-column justify-content-between">
                            <div class="ms-2 ">
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
                            </div>
                        </div>
                    </div>

                </button>
            </h2>
            <div :id="'collapseCart' + product.id" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body  rounded-0 border-0" style="    padding: 12px 12px 0px 12px !important;  ">
                    <template v-if="index === 0">
                        <OrderData style="background-color: #E8E8E8;"></OrderData>
                        <div class="d-flex gap-2 mt-2">
                            <button class="w-50 btn btn-outline-dark fw-bold"
                                style="font-size: 12px;">Remove
                                From Cart</button>
                            <button class="w-50 btn btn-outline-dark fw-bold" @click="saveProduct(product)"
                                style="font-size: 12px;">Move
                                To Wishlist</button>
                        </div>
                    </template>
                    <template v-else-if="index === 1">
                        <POrderData style="background-color: #E8E8E8;"></POrderData>
                        <div class="d-flex gap-2 mt-2">
                            <button class="w-50 btn btn-outline-dark fw-bold"
                                style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em; font-size: 12px;">Remove
                                From Cart</button>
                            <button class="w-50 btn btn-outline-dark fw-bold"
                                style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em; font-size: 12px;">Move
                                To Wishlist</button>
                        </div>

                    </template>
                </div>
            </div>
        </div>

        <RouterLink to="/favourite-catalogs" class="text-decoration-none text-dark">
            <div class="d-flex justify-content-between border-top border-bottom border-2 p-3">
                <p class=" m-0 fw-bold">Wishlist</p>
                <p class=" m-0 fw-bold">></p>
            </div>
        </RouterLink>

        <PriceDetails></PriceDetails>

        <!-- Button trigger modal -->
        <div class="d-flex justify-content-center align-items-center my-3">
            <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                    class="bi bi-trash me-1"></i>Clear Cart</button>
        </div>
        <!-- Clear Cart Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Are You Sure</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex justify-content-center gap-4">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Yes</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-top border-bottom bg-light">
            <p class="m-0 my-3 text-center">Proceeding will not deduct any money</p>
        </div>

        <CartBottomnav></CartBottomnav>
    </div>
</template>

<script>
import CartBottomnav from '@/components/NavBar/CartBottomnav.vue';
import OrderData from '@/components/Orders/OrderData.vue';
import POrderData from '@/components/Orders/POrderData.vue';
import PriceDetails from './PriceDetails.vue';
import FavCatalog from '@/mixins/FavCatalog';
export default {
    name: "CartPage",
    mixins:[FavCatalog],
    computed: {
        products() {
            return this.$store.getters['cart/getCartProduct'];
        },

    },
    components: { OrderData, POrderData, CartBottomnav, PriceDetails }
}
</script>

<style scoped>
.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.accordion-button::after {
    position: absolute;
    bottom: 0;
    right: 0;
}
.accordion {
    --bs-accordion-active-color: none;
    --bs-accordion-active-bg: none;
    --bs-accordion-btn-focus-box-shadow: none;
    --bs-accordion-border-color: transparent !important
}
</style>