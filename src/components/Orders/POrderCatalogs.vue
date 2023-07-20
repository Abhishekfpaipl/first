<template>
    <div class="container p-0 mb-4">
        <div v-for="(product, index) in order.products" :key="index" class="border p-2 mb-2" @click="showProduct(product)">
            <div class="d-flex ">
                <img :src="product.img" class="" style="height:155px; width: 125px;object-fit: fill;filter:grayscale(1)">

                <div class="d-flex flex-column justify-content-between">
                    <div class="ms-2 ">
                        <p class="ss mb-0 fw-bold fs-5">{{ product.style }}</p>
                        <p class="ss">{{ product.name }}sdfsd dfdfs sdfasd www</p>
                        <div class="d-flex justify-content-between">
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
                            <div class="d-flex ">
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="Object.keys(activeOrder).length !== 0" class="">
            <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header border" style="height: 63px;">
                    <p class="offcanvas-title" id="staticBackdropLabel">{{ activeOrder.name }}</p>
                    <button type="button" class="btn" @click="hideProduct()"><i class="bi bi-x fs-4"></i></button>
                </div>
                <div class="offcanvas-body pt-0">

                    <div v-for="(pro, key) in activeOrder.subproduct" :key="key"
                        class="d-flex  container align-items-center mb-2 mt-2 border-bottom pt-2 pb-2">
                        <div class="d-flex">
                            <img class="rounded-circle  d-flex flex-column justify-content-center align-items-center me-3"
                                :src="pro.img" style="height:60px; width:60px;">
                            <div class="d-flex align-items-start  flex-column ms-2" style="margin: auto;">
                                <p class="m-0 fw-bold">SKU ID : {{ pro.skuid }}</p>
                                <p class="m-0">{{ pro.size }}, {{ pro.color }}, {{ pro.pcs }}pcs
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['order'],  
    computed: {
        activeOrder() {
            return this.$store.getters['order/getActiveOrderProduct'];
        },
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch("order/selectOrderProduct", product);
        },
        hideProduct() {
            return this.$store.dispatch("order/hideOrderProduct");
        },
    }
}
</script>
