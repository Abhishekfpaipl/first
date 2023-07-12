<template>
    <div class="" style="padding-bottom: 100px;">
        <div class="d-flex flex-column align-items-start bg-light border p-2"
            style="height: 63px !important;">
            <div class="d-flex fw-bold">
                <i class="bi bi-arrow-left fs-3" @click="goBack()"></i>
                <p class="m-2 mt-1" style="font-weight: 500;font-size: 16px;">Running Orders</p>
                <p class="m-1 ms-0" style="font-weight: 500;font-size: 16px;">ID: {{ order.oid }}</p>
            </div>
        </div>

        <div class="container">
            <div class="" v-for="(pay, index) in order.payment" :key="index">
                <p class="ms-2 m-0 fs-3 mt-4">Payment Details</p>
                <div class="mt-2">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <th class="w-50">Payment Mode : </th>
                                <td class="w-50">{{ pay.mode }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Details : </th>
                                <td class="w-50">{{ pay.details }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Status : </th>
                                <td class="w-50">{{ pay.status }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="" v-for="(del, index) in order.delivery" :key="index">
                <ImageUploadBox></ImageUploadBox>
                <p class="ms-2 m-0 fs-3 mt-4">Order Details</p>
                <div class="mt-2 ">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <th class="w-50">Order Value : </th>
                                <td class="w-50">Rs.{{ del.charges }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Sub Orders : </th>
                                <td class="w-50">{{ del.suborder }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">SKU Items : </th>
                                <td class="w-50">{{ del.items }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">SLA Date : </th>
                                <td class="w-50">{{ del.date }}</td>
                            </tr>

                            <p class="ms-2 mb-2 fs-3 mt-4">Delivery Details</p>
                            <tr>
                                <th class="w-50">Delivery Mode : </th>
                                <td class="w-50">{{ del.mode }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Delivery Status : </th>
                                <td class="w-50">{{ del.status }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Delivery Address : </th>
                                <td class="w-50">{{ del.address }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div class="container p-0 mb-4">
                <div v-for="(product, index) in order.products" :key="index" class="row m-2 my-3 "
                    @click="showProduct(product)">
                    <div class="d-flex py-2 px-2 border">
                        <img :src="`${publicPath}${product.img}`" class=""
                            style="height:100%; width: 125px;object-fit: fill;">

                        <div class="d-flex flex-column justify-content-between w-100">
                            <div class="ms-2 ">
                                <p class="ss">{{ product.name }}</p>
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex gap-2">
                                        <div class="">
                                            <p class="mb-1" style="font-size: 14px">Sub OID :</p>
                                            <p class="mb-1" style="font-size: 14px">SKU :</p>
                                            <p class="mb-1" style="font-size: 14px">Units :</p>
                                            <p class="mb-1" style="font-size: 14px">Amount :</p>
                                        </div>
                                        <div class="">
                                            <p class="mb-1" style="font-size: 14px">{{ product.suboid }}</p>
                                            <p class="mb-1" style="font-size: 14px">{{ product.sku }}</p>
                                            <p class="mb-1" style="font-size: 14px">{{ product.unit }}</p>
                                            <p class="mb-1" style="font-size: 14px">₹{{ product.amount }}</p>
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
                        <div class="offcanvas-header border"
                            style="height: 63px;">
                            <p class="offcanvas-title" id="staticBackdropLabel">{{ activeOrder.name }}</p>
                            <button type="button" class="btn" @click="hideProduct()"><i class="bi bi-x fs-4"></i></button>
                        </div>
                        <div class="offcanvas-body pt-0">

                            <div v-for="(pro, key) in activeOrder.subproduct" :key="key"
                                class="d-flex  container align-items-center mb-2 mt-2 border-bottom pt-2 pb-2">
                                <div class="d-flex">
                                    <img class="rounded-circle  d-flex flex-column justify-content-center align-items-center me-3"
                                        :src="pro.img"
                                        style="height:60px; width:60px;">
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
        </div>
    </div>
</template>

<script>
import ImageUploadBox from '@/components/ImageUploadBox.vue';
export default {
    name: "OrderDetail",
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
    components: {
        ImageUploadBox
    },
    computed: {
        order() {
            let orderId = this.$route.params.orderId;
            return this.$store.getters['order/getOrder'](orderId);
        },
        activeOrder() {
            return this.$store.getters['order/getActiveOrderProduct'];
        }
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch("order/selectOrderProduct", product);
        },
        hideProduct() {
            return this.$store.dispatch("order/hideOrderProduct");
        },
        goBack() {
            window.history.back();
        },
    },
}
</script>
