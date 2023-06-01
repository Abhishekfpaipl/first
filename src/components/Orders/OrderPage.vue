<template>
    <div class="container d-flex justify-content-between " style="padding-top: 100px;">
        <!-- <h1 class="text-center mt-4">No Orders Yet.</h1> -->
        <!-- <div class=" mt-4 ">
            <div class="dropdown">
                <button class="btn border border-1 dropdown-toggle text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item text-warning" href="#">Action</a></li>
                    <li><a class="dropdown-item text-danger" href="#">Another action</a></li>
                    <li><a class="dropdown-item text-success" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>

        <div class="filters  mt-4 mb-4 justify-content-between d-flex align-items-center">
            <div>
                <input type="text" placeholder=" Search" value="" class="form-control-md"/>
            </div>
            <div>
                <button class="btn btn-primary btn-sm me-2 w-100">Reset</button>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filters
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item text-warning" href="#">Action</a></li>
                    <li><a class="dropdown-item text-danger" href="#">Another action</a></li>
                    <li><a class="dropdown-item text-success" href="#">Something else here</a></li>
                </ul>
            </div>
        </div> -->

        <!-- <OrderData></OrderData> -->
        <router-link to="/PremiumOrderNew">
            <button class="btn btn-success">Premium Order</button>
        </router-link>
        <router-link to="/OrdinaryOrderPending">
            <button class="btn btn-success">Ordinary Order</button>
        </router-link>

       
    </div>
</template>
<script>
// import OrderData from '../Cart/OrderData.vue';
export default {
    name: "OrderPage",
    components: {
        // OrderData
    }

}
</script>
<style lang="">
    
</style>