<template>
    <div class="">
        <div class="">
            <div class="table-responsive  border-1" id="scroll"
                style="background-color: #E8E8E8; font-size: 12px !important;">
                <table class="table m-0">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center">Qty</th>
                            <th v-for="(size, index) in sizes" :key="index" scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">{{ size.name }}</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="font-size: 12px !important;">
                            <th scope="row" class="text-center">5 Mix Colors</th>
                            <td v-for="(input, index) in inputs" :key="index" class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    :value="input.placeholder" readonly>
                            </td>

                        </tr>
                        <tr>
                            <th style="padding:12px">Total</th>
                            <td v-for="(t, index) in total" :key="index" class="text-center" style="padding:12px">₹{{ t.amt
                            }}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="bg-white" style="height: 10px ;"></div>
            <div class="container d-flex justify-content-between border"
                style="font-size: 12px !important; padding:12px; background-color: #E8E8E8;">
                <div class="" style=" background-color: #E8E8E8;">
                    <p class="m-0">Sold by </p>
                    <p class="m-0 fw-bold" style="font-size: 13px !important;">DeshiGirl</p>
                </div>
                <div class="">
                    <p class="m-0">Grand Total</p>
                    <p class="m-0 fw-bold" style="font-size: 13px !important;">₹9576</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "TopCart",

    computed: {
        Prodamts() {
            return this.$store.getters.getProdamts;
        },
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            sizes: [
                { id: 1, name: 'XS' },
                { id: 2, name: 'S' },
                { id: 3, name: 'M' },
                { id: 4, name: 'L' },
                { id: 5, name: 'XL' },
                { id: 6, name: 'Free' },
            ],
            inputs: [
                { id: 1, placeholder: '10' },
                { id: 1, placeholder: '20' },
                { id: 1, placeholder: '30' },
                { id: 1, placeholder: '40' },
                { id: 1, placeholder: '50' },
                { id: 1, placeholder: '60' },
            ],
            total: [
                { id: 1, amt: '4560' },
                { id: 1, amt: '9850' },
                { id: 1, amt: '7950' },
                { id: 1, amt: '5260' },
                { id: 1, amt: '3460' },
                { id: 1, amt: '2260' },
            ]
        };
    },
};
</script>
<style>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

table th:first-child,
.table td:first-child {
    position: sticky;
    left: 0;
    background-color: #e8e8e8;
    color: #373737;
}
</style>
