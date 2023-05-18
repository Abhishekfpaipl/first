<template>
    <div class="" style="padding-bottom:100px">       
        <div v-for="(Prodamt, index) in Prodamts" :key="index" class="container p-0 border border-1 mt-4 mb-4" >
            <div class="row  mb-2">
                <div class="col-4">
                    <!-- <div class="card">
                        <img :src="`${publicPath}${Prodamt.imgdp}`" />
                        <div class="card-img-overlay p-0">
                            <h5 class="card-title">
                                <i class="bi bi-check2-square card-title"></i>
                            </h5>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-md-3">
                            <div class="custom-control custom-radio image-checkbox">
                                <input type="checkbox" class="custom-control-input" id="ck1a" style="position: absolute;">
                                <label class="custom-control-label" for="ck2a">
                                    <img :src="`${publicPath}${Prodamt.imgdp}`" alt="#" class="img-fluid">
                                </label>
                            </div>
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
                            <span class="mb-1" style="font-size: 14px">₹{{Prodamt.ttlamount}}</span>
                            <p class="mb-1" style="font-size: 14px">₹{{ Prodamt.avgrate }}</p>
                            <p class="mb-1" style="font-size: 14px">{{ Prodamt.ttlpieces }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2 text-end">
                   
                   
                    <div class="dropdown">
                        <button class="bg-white border-0 dropdown-toggle text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed border border-1"
                            style="color: black; background-color: white; box-shadow: none" type="button"
                            data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Change
                        </button>
                    </h2>
                    <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        :data-bs-parent="'#accordionFlushExample' + index">
                        <div class="accordion-body" style="padding:1rem 0.25rem !important">             
                        <!-- <TestRoute></TestRoute> -->
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import TestRoute from '@/views/TestRoute.vue';
export default {
    name: "TopCart",

    computed: {
        Prodamts() {
            return this.$store.getters.getProdamts;
        },
    },
    components:{
        // TestRoute
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
};
</script>
<style>
    .dropdown-toggle::after{
        content: none !important;
    }
    .accordion-button:focus{
        z-index: 0 !important;
    }
    .accordion-button:hover{
        z-index: 0 !important;
    }
</style>
