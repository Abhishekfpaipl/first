<template>
    <div class="">
        <!-- <div v-for="(Prodamt, index) in Prodamts" :key="index" class="container p-0 border border-1 mt-4 mb-4">
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

                        </div>
                    </div>
                </div>


            </div>
        </div> -->


        <div class="">
            <div class="table-responsive  border-1" id="scroll"
                style="background-color: #E8E8E8; font-size: 12px !important;">
                <table class="table m-0">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center">Qty</th>
                            <th scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">XS</p>
                                    <!-- <p class="m-0 text-center">₹456</p> -->
                                </div>
                            </th>
                            <th scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">S</p>
                                    <!-- <p class="m-0 text-center">₹456</p> -->
                                </div>
                            </th>
                            <th scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">M</p>
                                    <!-- <p class="m-0 text-center">₹456</p> -->
                                </div>
                            </th>
                            <th scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">L</p>
                                    <!-- <p class="m-0 text-center">₹456</p> -->
                                </div>
                            </th>
                            <th scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">XL</p>
                                    <!-- <p class="m-0 text-center">₹456</p> -->
                                </div>
                            </th>
                            <th scope="col">
                                <div class="d-flex flex-column">
                                    <p class="m-0 text-center">Free</p>
                                    <!-- <p class="m-0 text-center">₹456</p> -->
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="font-size: 12px !important;">
                            <th scope="row" class="text-center">5 Mix Colors</th>
                            <td class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    placeholder="10">
                            </td>
                            <td class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    placeholder="20">
                            </td>
                            <td class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    placeholder="30">
                            </td>
                            <td class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    placeholder="40">
                            </td>
                            <td class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    placeholder="50">
                            </td>
                            <td class="text-center">
                                <input type="number" class="form-control" style="font-size: 12px !important;"
                                    placeholder="60">
                            </td>
                        </tr>
                        <tr>
                            <th style="padding:12px">Total</th>
                            <td class="text-center" style="padding:12px">₹4560</td>
                            <td class="text-center" style="padding:12px">₹9120</td>
                            <td class="text-center" style="padding:12px">₹1368</td>
                            <td class="text-center" style="padding:12px">₹1824</td>
                            <td class="text-center" style="padding:12px">₹2280</td>
                            <td class="text-center" style="padding:12px">₹2736</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="bg-white" style="height: 10px ;"></div>
            <div class="container d-flex justify-content-between border"
                style="font-size: 12px !important; padding:12px; background-color: #E8E8E8;">
                <div class=""
                    style=" background-color: #E8E8E8;">
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
// import OrdinaryTable from '../ProductTable/OrdinaryTable.vue';

// import TestRoute from '@/views/TestRoute.vue';
export default {
    name: "TopCart",

    computed: {
        Prodamts() {
            return this.$store.getters.getProdamts;
        },
    },
    components: {
        // OrdinaryTable
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
    box-shadow: none !important;
}


.accordion-button:hover {
    z-index: 0 !important;
}

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
