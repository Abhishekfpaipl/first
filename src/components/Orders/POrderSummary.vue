<template>
    <div class="" v-for="(del, index) in order.orderSummary" :key="index">
        <p class="ms-2 m-0 fs-3 mt-4">Order Summary </p>
        <div class="mt-2 ">
            <table class="table table-borderless">
                <tbody>
                    <tr>
                        <th class="w-50">Order Value : </th>
                        <td class="w-50">₹ {{ del.charges }}</td>
                    </tr>
                    <tr>
                        <th class="w-50">Inclusive Taxes : </th>
                        <td class="w-50">₹ {{ del.taxes }}</td>
                    </tr>
                    <tr>
                        <th class="w-50">Catalogs : </th>
                        <td class="w-50">{{ del.catalogs }}</td>
                    </tr>
                    <tr>
                        <th class="w-50">SKU Items : </th>
                        <td class="w-50">{{ del.items }}</td>
                    </tr>
                    <tr>
                        <th class="w-50">Quantity : </th>
                        <td class="w-50">{{ del.qty }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['order']
}
</script>

<style scoped>
th:nth-child(1) {
    background-color: #e6e6e6;
}
</style>