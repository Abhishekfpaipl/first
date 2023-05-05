<template>
    <div class="container border border-1" style="padding-bottom:100px">
        <div class="container mt-4">
            <div class="row">
                <div class="col d-flex">
                    <div class="mt-2">
                        <input type="checkbox" class="custom-control-input" id="ck1a" @click="ck1a">  All
                    </div>
                    <div class="ms-4">
                        <p class="text-center mb-0">15 Catalogs</p>
                        <p class="text-center">250 Pieces</p>
                    </div>
                </div>
                <div class="col d-flex justify-content-center">
                    <button class="btn btn-success">
                        <p class="text-center fw-bold mb-0">1,85,000</p>
                        <p class="text-center mb-0">Check Out Amount</p>
                    </button>
                </div>
            </div>
        </div>  
        <OrderData></OrderData>
   </div>
</template>
<script>
import OrderData from './OrderData.vue';
export default {
    name: "TopCart",
    components:{
        OrderData
    }   
};
</script>

