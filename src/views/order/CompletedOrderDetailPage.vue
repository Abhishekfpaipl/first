<template>
    <div style="padding-bottom: 80px;">
        <div class="d-flex flex-column align-items-start bg-light border p-2" style="height: 63px !important;">
            <div class="d-flex align-items-center">
                <router-link to="/orders/completed" class="text-dark">
                    <i class="bi bi-arrow-left fs-3"></i>
                </router-link>
                <p class="m-2 mt-1 fs-5">Completed</p>
                <p class="m-1 ms-0 fs-5">OID: {{ complete.oid }}</p>
            </div>
        </div>
        <div class="px-2">
            <div class="" v-for="(del, index) in complete.orderSummary" :key="index">
                <p class="m-2 fs-3 mt-4">Order Summary</p>
                <div class="mt-2 ">
                    <table class="table ">
                        <tbody>
                            <tr @click="copyData($event)" class="p-2">
                                <th class="w-50" >Order ID : </th>
                                <td class="w-50 test">{{ del.oid }}</td>
                                <td class="d-flex align-items-center gap-1">
                                    <i class="bi bi-files"></i><span style="font-size: 10px;">Copy</span>
                                </td>
                            </tr>
                            <tr>
                                <th class="w-50">Order Value : </th>
                                <td colspan="2" class="w-50">₹ {{ del.charges }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Inclusive Taxes : </th>
                                <td colspan="2" class="w-50">₹ {{ del.taxes }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Catalogs : </th>
                                <td colspan="2" class="w-50">{{ del.catalogs }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">SKU Items : </th>
                                <td colspan="2" class="w-50">{{ del.items }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Quantity : </th>
                                <td colspan="2" class="w-50">{{ del.qty }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <router-link :to="'/catalog-page/' + complete.catelog_id" class="text-decoration-none text-dark">
                <button class="btn top-brand w-100 d-flex justify-content-between align-items-center px-4 my-4">
                    <span>View This Product Detail Page</span>
                    <i class="bi bi-arrow-right" style="font-size: 24px;"></i>
                </button>
            </router-link>

            <div class="" v-for="(del, index) in complete.delivery" :key="index">
                <p class="m-2 fs-3 mt-4">Delivery Details</p>
                <div class="mt-2 ">
                    <table class="table ">
                        <tbody>
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

            <div class="" v-for="(pay, index) in complete.payment" :key="index">
                <p class="m-2 fs-3 mt-4">Payment Details</p>
                <div class="mt-2">
                    <table class="table ">
                        <tbody>
                            <tr>
                                <th class="w-50">Payment Details : </th>
                                <td class="w-50">{{ pay.details }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Status : </th>
                                <td class="w-50">{{ pay.status }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payment Mode : </th>
                                <td class="w-50">{{ pay.mode }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Payable Amount : </th>
                                <td class="w-50">₹ {{ pay.amount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>




        <div class="container">
            <p class="m-0 fs-3 mt-4">SKU Of Catalogs</p>
            <div v-for="(sub, index) in complete.subproduct" :key="index"
                class="d-flexalign-items-center mb-2 mt-2 ">
                <div class="d-flex border-top w-100 pt-2">
                    <div class="">
                        <img class="rounded-circle" :src="sub.img"
                            style="height:60px; width:60px; object-fit: cover; object-position: top; margin-right:12px ;">

                    </div>
                    <div class="w-75">
                        <p class="m-0 fw-bold">SKU ID : {{ sub.skuid }}</p>
                        <div class="d-flex justify-content-between">
                            <p class="m-0">{{ sub.size }}, {{ sub.color }}, {{ sub.pcs }}pcs</p>
                            <p class="m-0 fw-bold">₹ {{ sub.amount }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CompletedOrderPage',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        complete() {
            let completeId = this.$route.params.completeId;
            return this.$store.getters['order/getcomplete'](completeId);
        },
    },
    methods: {
        copyData(event) {
            const tdElement = event.currentTarget.querySelector('.test');
            const text = tdElement.textContent;
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert(`Copied: ${text}`);
        }
    }
}
</script>

<style scoped>
th:nth-child(1) {
    background-color: #e6e6e6;
}
</style>