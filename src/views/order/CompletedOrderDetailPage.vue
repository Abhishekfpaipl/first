<template>
    <div>
        <div class="d-flex flex-column align-items-start bg-light border p-2"
            style="height: 63px !important;">
            <div class="d-flex fw-bold">
                <router-link to="/orders/completed" class="text-dark">
                    <i class="bi bi-arrow-left fs-3"></i>
                </router-link>
                <p class="m-2 mt-1">Completed Orders</p>
                <p class="m-1 ms-0">ID: {{ complete.oid }}</p>
            </div>
        </div>

        <div class="container  mt-4">
            <div class="">
                <h5 class="text-start">{{ complete.name }}</h5>
                <table class="table table-bordered ">
                    <tbody>
                        <tr>
                            <th class="">Sub OID : </th>
                            <td class="">{{ complete.suboid }}</td>
                        </tr>
                        <tr>
                            <th class="">SKU : </th>
                            <td class="">{{ complete.sku }}</td>
                        </tr>
                        <tr>
                            <th class="">Units : </th>
                            <td class="">{{ complete.unit }}</td>
                        </tr>
                        <tr>
                            <th class="">SLA Date : </th>
                            <td class="">{{ complete.amount }}</td>
                        </tr>
                    </tbody>
                </table>
                <router-link :to="'/catalog-page/' + complete.catelog_id" class="text-decoration-none text-dark">
                    <button class="btn  w-100 d-flex justify-content-between align-items-center px-4 my-4"
                        style="background-color: #EFA3A7;">
                        <span>View This Product Detail Page</span>
                        <i class="bi bi-arrow-right" style="font-size: 24px;"></i>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="">
            <div v-for="(sub, index) in complete.subproduct" :key="index"
                class="d-flex  container align-items-center mb-2 mt-2 ">
                <div class="d-flex border-top px-2 w-100 pt-2">
                    <div class="d-flex align-items-center">
                        <div class="rounded-circle">
                            <div type="button" class="">
                                <img class="rounded-circle" :src="sub.img"
                                    style="height:60px; width:60px; object-fit: cover; object-position: top; margin-right:12px ;">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-start  flex-column ms-2" style="margin: auto;">
                        <p class="m-0 fw-bold">SKU ID : {{ sub.skuid }}</p>
                        <p class="m-0">{{ sub.size }}, {{ sub.color }}, {{ sub.pcs }}pcs
                        </p>
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
    }
}
</script>

