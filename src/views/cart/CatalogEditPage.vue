<template>
    <div style="padding-bottom: 80px;">
        <div class="d-flex justify-content-between align-items-center p-2 border-bottom">
            <div class="d-flex align-items-center gap-1">
                <i class="bi bi-arrow-left fs-1" @click="goBack()"></i>
                <p class="fw-bold mb-0 fs-4">{{ product.style }}</p>
            </div>
            <router-link to="/checkout/cart" class="text-dark">
                <i class="bi bi-x fs-1"></i>
            </router-link>
        </div>
        <div class="p-2 rounded-0 border">

            <div class="d-flex ">
                <img :src="product.img" class="" style="height:155px; width: 125px;object-fit: fill;filter:grayscale(1)">
                <div class="d-flex flex-column justify-content-between">
                    <div class="ms-2 ">
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
                                <p class="mb-1" style="font-size: 14px"> {{ product.pieces }}</p>
                                <p class="mb-1" style="font-size: 14px">₹ {{ product.amount }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">

                <OrdinaryTable></OrdinaryTable>

                <PremiumTable></PremiumTable>

            </div>
        </div>
    </div>
</template>

<script>
import PremiumTable from '@/components/ProductTable/PremiumTable.vue';
import OrdinaryTable from '@/components/ProductTable/OrdinaryTable.vue';
export default {
    name: "CatalogEditPage",
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters["cart/getCart"](productId);
        }
    },
    methods: {
        goBack() {
            window.history.back()
        }
    },
    mounted() {
        console.log(this.product);
    },
    components: { PremiumTable, OrdinaryTable }
}
</script>

<style lang="scss" scoped></style>