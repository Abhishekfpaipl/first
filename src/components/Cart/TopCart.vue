<template>
    <div class="border border-1" style="padding-bottom:100px">
        <div class="container mt-4">
            <div class="row">
                <div class="col-6 d-flex">
                    <div class="left mt-2"><i class="bi bi-check2-square"></i> All</div>
                    <div class="right ms-4">
                        <p class="text-center mb-0">15 Catalogs</p>
                        <p class="text-center">250 Pieces</p>
                    </div>
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <button class="btn btn-success">
                        <p class="text-center fw-bold mb-0">1,85,000</p>
                        <p class="text-center mb-0">Check Out Amount</p>
                    </button>
                </div>
            </div>
        </div>
        <div v-for="(Prodamt, index) in Prodamts" :key="index" class="container mt-4 border border-1">
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <img :src="`${publicPath}${Prodamt.imgdp}`" />
                        <!-- <img :src="Prodamt.imgdp" alt=""> -->
                        <!-- <img src="https://img101.urbanic.com/v1/goods-pic/cc51333d3eba44d7bd0916bd8c9c189dUR_w1000_q90.webp" class="card-img" alt="" > -->
                        <div class="card-img-overlay p-0">
                            <h5 class="card-title">
                                <i class="bi bi-check2-square card-title"></i>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <p class="text-center mt-2" style="font-size: 12px">
                        01-08-23636| Crochet Skirt Two-Piece Outfits pack of 2
                    </p>
                    <div class="row">
                        <div class="col-8">
                            <p class="mb-1" style="font-size: 14px">Toal Amount</p>
                            <p class="mb-1" style="font-size: 14px">Average Rate</p>
                            <p class="mb-1" style="font-size: 14px">Total Pieces</p>
                        </div>
                        <div class="col-4">
                            <span class="mb-1" style="font-size: 14px">{{
                                Prodamt.ttlamount
                            }}</span>
                            <p class="mb-1" style="font-size: 14px">{{ Prodamt.avgrate }}</p>
                            <p class="mb-1" style="font-size: 14px">
                                {{ Prodamt.ttlpieces }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-2 mt-2">
                    <i class="bi bi-three-dots-vertical"></i>
                </div>
            </div>
            <div class="bottom ">
                <div class="accordion accordion-flush" id="accordionFlushExample">
            </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed border border-1"
                            style="color: black; background-color: white; box-shadow: none" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Change
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body" style="padding:1rem 0.25rem !important">
                            <div class="table-responsic">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <td scope="col">Amount</td>
                                            <td scope="col">Pieces</td>
                                            <td scope="col">Sizes</td>
                                            <td scope="col">Colors</td>
                                            <td scope="col">Rate</td>
                                            <td scope="col">Qty</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹68,400</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">5</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">XS</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: yellow;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="number" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹3,648</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">8</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">S</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: hotpink;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="number" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹4,104</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">9</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">M</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: black;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="number" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹2,280</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">5</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">L</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: brown;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="number" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹2,736</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">6</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">XL</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: orange;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="number" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹1,368</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">3</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">XXL</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: blue;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="number" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <p class="mt-2">₹3,648</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">8</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">Free</p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">
                                                    <button class="btn rounded-circle me-2" style="
                            background-color: green;
                            height: 25px;
                            width: 25px;
                          "></button>
                                                </p>
                                            </td>
                                            <td>
                                                <p class="text-center mt-2">₹456</p>
                                            </td>
                                            <td>
                                                <input type="text" id="quantity" name="quantity"
                                                    class="form-control input-number w-25" value="1" min="1" max="100"
                                                    style="width: 100% !important" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
    name: "TopCart",

    computed: {
        Prodamts() {
            return this.$store.getters.getProdamts;
        },
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
};
</script>
<style lang=""></style>
