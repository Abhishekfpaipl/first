<template>
    <div class="">
        <div v-for="(Prodamt, index) in Prodamts" :key="index" class="container p-0 border border-1 mt-4 mb-4">
            <div class="row  mb-2">
                <div class="col-4">
                    <div class="row">
                        <div class="col-md-3">
                            <img :src="`${publicPath}${Prodamt.imgdp}`" alt="#" class="img-fluid">
                        </div>
                    </div>

                </div>
                <div class="col-6 mt-1">
                    <p class="text-start" style="font-size: 12px">
                        01-08-23636| Crochet Skirt Two-Piece Outfits pack of 2
                    </p>
                    <div class="row">
                        <div class="col-8">
                            <p class="mb-1" style="font-size: 14px">Toal Amount</p>
                            <p class="mb-1" style="font-size: 14px">Average Rate</p>
                            <p class="mb-1" style="font-size: 14px">Total Pieces</p>
                        </div>
                        <div class="col-4">
                            <span class="mb-1" style="font-size: 14px">₹{{ Prodamt.ttlamount }}</span>
                            <p class="mb-1" style="font-size: 14px">₹{{ Prodamt.avgrate }}</p>
                            <p class="mb-1" style="font-size: 14px">{{ Prodamt.ttlpieces }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2 text-end">
                    <div class="dropdown">
                        <button class="bg-white border-0 dropdown-toggle text-start" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item text-warning" href="#">Action</a></li>
                            <li><a class="dropdown-item text-danger" href="#">Another action</a></li>
                            <li><a class="dropdown-item text-success" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom ">
                <div class="accordion accordion-flush" :id="'accordionFlushExample' + index">
                </div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseOne' + Prodamt.id" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                Change
                            </button>
                        </h2>
                        <div :id="'flush-collapseOne' + Prodamt.id" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="">
                                <div class="table-responsive border border-1">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Enter Qty</th>
                                                <th scope="col">
                                                    <div class="d-flex flex-column">
                                                        <p class="m-0 text-center">XS</p>
                                                        <p class="m-0 text-center">₹456</p>
                                                    </div>
                                                </th>
                                                <th scope="col">
                                                    <div class="d-flex flex-column">
                                                        <p class="m-0 text-center">S</p>
                                                        <p class="m-0 text-center">₹456</p>
                                                    </div>
                                                </th>
                                                <th scope="col">
                                                    <div class="d-flex flex-column">
                                                        <p class="m-0 text-center">M</p>
                                                        <p class="m-0 text-center">₹456</p>
                                                    </div>
                                                </th>
                                                <th scope="col">
                                                    <div class="d-flex flex-column">
                                                        <p class="m-0 text-center">L</p>
                                                        <p class="m-0 text-center">₹456</p>
                                                    </div>
                                                </th>
                                                <th scope="col">
                                                    <div class="d-flex flex-column">
                                                        <p class="m-0 text-center">XL</p>
                                                        <p class="m-0 text-center">₹456</p>
                                                    </div>
                                                </th>
                                                <th scope="col">
                                                    <div class="d-flex flex-column">
                                                        <p class="m-0 text-center">Free</p>
                                                        <p class="m-0 text-center">₹456</p>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" style="font-size:14px">
                                                    <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                                        style="width: 30px; height: 30px;background-color:black"></div>
                                                </th>
                                                <td class="text-center">
                                                    <p class="mt-3">10</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">20</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">30</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">40</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">50</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">60</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" style="font-size:14px">
                                                    <div class="rounded-circle m-2 px-1 align-items-center justify-content-center d-flex"
                                                        style="width: 30px; height: 30px;background-color:red"></div>
                                                </th>
                                                <td class="text-center">
                                                    <p class="mt-3">10</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">20</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">30</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">40</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">50</p>
                                                </td>
                                                <td class="text-center">
                                                    <p class="mt-3">60</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td class="text-center">₹4560</td>
                                                <td class="text-center">₹9120</td>
                                                <td class="text-center">₹1368</td>
                                                <td class="text-center">₹1824</td>
                                                <td class="text-center">₹2280</td>
                                                <td class="text-center">₹2736</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div class="container d-flex justify-content-between">
                                    <p class="">Grand Total</p>
                                    <p class="">₹9576</p>
                                </div>


                                <!-- <PremiumTable></PremiumTable> -->
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
// import PremiumTable from '@/components/ProductTable/PremiumTable.vue';

// import OrdinaryTable from '../ProductTable/OrdinaryTable.vue';
export default {
    name: "TopCart",

    computed: {
        Prodamts() {
            return this.$store.getters.getProdamts;
        },
    },
    components: {
        // PremiumTable
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
};
</script>
<style>
.dropdown-toggle::after {
    content: none !important;
}

.accordion-button:focus {
    z-index: 0 !important;
}

.accordion-button:hover {
    z-index: 0 !important;
}
</style>
