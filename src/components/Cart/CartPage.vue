<template>
    <div class="accordion mt-2" id="accordionExample" style="padding-bottom:100px">
        <div class="accordion-item py-2 m-2 rounded-0 border" v-for="(product, index) in products" :key="index">
            <h2 class="accordion-header container m-0" style="padding: 0px 8px !important; ">
                <button class="accordion-button p-0 d-flex flex-column" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapseCart' + product.id" aria-expanded="true"
                    :aria-controls="'collapseCart' + product.id">
                    <div class="d-flex ">
                        <img :src="product.img" class=""
                            style="height:155px; width: 125px;object-fit: fill;filter:grayscale(1)">

                        <div class="d-flex flex-column justify-content-between">
                            <div class="ms-2 ">
                                <p class="ss mb-0 fw-bold fs-5">{{ product.style }}</p>
                                <p class="ss">{{ product.name }}sdfsd dfdfs sdfasd www</p>
                                <div class="d-flex gap-2">
                                    <div class="">
                                        <p class="mb-1" style="font-size: 14px">Avg Rate:</p>
                                        <p class="mb-1" style="font-size: 14px">Total Sku:</p>
                                        <p class="mb-1" style="font-size: 14px">Total Qty:</p>
                                        <p class="mb-1" style="font-size: 14px">Total Amt :</p>
                                    </div>
                                    <div class="">
                                        <p class="mb-1" style="font-size: 14px">₹ {{ product.rate }}</p>
                                        <p class="mb-1" style="font-size: 14px"> {{ product.sku }}</p>
                                        <p class="mb-1" style="font-size: 14px"> {{ product.qty }}</p>
                                        <p class="mb-1" style="font-size: 14px">₹ {{ product.amount }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </button>
            </h2>
            <div :id="'collapseCart' + product.id" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div class="accordion-body  rounded-0 border-0" style="padding: 12px 12px 0px 12px !important;">
                    <POrderData style="background-color: #E8E8E8;"></POrderData>
                    <div class="d-flex gap-2 mt-2">
                        <button class="w-50 btn btn-outline-danger fw-bold" style="font-size: 12px;opacity: 80%;"><i
                                class="bi bi-trash"></i> Remove</button>
                        <button class="w-50 btn btn-outline-danger fw-bold" @click="saveProduct(product)"
                            style="font-size: 12px;opacity: 80%;"><i class="bi bi-plus-lg"></i> Wishlist</button>

                        <RouterLink :to="'/catalog-edit/' + product.id" class="w-50">
                            <button class="w-100 btn btn-outline-danger fw-bold" style="opacity: 80%; font-size: 12px;"><i
                                    class="bi bi-pencil"></i> Edit</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <PriceDetails></PriceDetails>
        <!-- <div class="border-top border-bottom top-brand-secondary mt-3">
            <p class="m-0 my-3 text-center">YAY! Your total cart discount is ₹ 122</p>
        </div> -->
        <CartBottomnav></CartBottomnav>
    </div>
</template>

<script>
import CartBottomnav from '@/components/NavBar/CartBottomnav.vue';
import POrderData from '@/components/Orders/POrderData.vue';
import PriceDetails from './PriceDetails.vue';
import FavCatalog from '@/mixins/FavCatalog';
export default {
    name: "CartPage",
    mixins: [FavCatalog],
    computed: {
        products() {
            return this.$store.getters['cart/getCartProduct'];
        },
    },
    components: {
    POrderData,
    CartBottomnav,
    PriceDetails,
}
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