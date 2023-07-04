<template>
    <!-- <CatelogFilter></CatelogFilter> -->
    <OrderFilter class="border-top  py-3 position-fixed top-0" style="z-index: 9; background-color: white;"></OrderFilter>
    <div class="container" style="padding-top:72px;padding-bottom:80px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col" v-for="(product, index) in products" :key="index">
                <div class="card show-on-hover rounded-0">
                    <router-link :to="'/ProductPage/' + product.id" class="text-decoration-none text-dark">
                        <div :id="'productImages' + index" class="carousel slide">
                            <div class="carousel-inner">
                                <div :id="'cardCarousel' + imgIndex" class="carousel-item"
                                    :class="{ active: imgIndex === 0 }" v-for="(image, imgIndex) in product.images"
                                    :key="imgIndex">
                                    <img :src="image" class="card-img-top rounded-0" alt="" style="min-height:100px;">
                                </div>
                            </div>
                            <div class="d-flex mt-1" id="scroll" style="overflow-x: scroll;">
                                <button type="button" class="rounded-circle p-0 border me-1"
                                    :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                                    :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                                    v-for="(image, imgIndex) in product.images" :key="imgIndex">
                                    <img :src="image" class="rounded-circle" alt=""
                                        style="width: 35px; height: 35px; object-fit: fill;">
                                </button>
                            </div>
                        </div>
                    </router-link>
                    <div @click="showProduct(product)" class=" position-absolute w-100 soh-div">
                        <div class="d-flex flex-column align-items-start" style="max-height:200px; overflow-y:scroll;margin-top: 3px !important;">
                            <div class=" m-0 p-1 fw-bold bg-light rounded-circle d-flex flex-column align-items-center"
                                style="font-size:9px;width: 35px; height: 35px;margin-left:2.5px !important">
                                <p class="m-0">{{ product.moq }}</p>
                                <p class="m-0">MOQ</p>
                            </div>
                            <CardSize :sizes="product.sizes" class="ms-2" style="margin-top: 0.08rem !important;"></CardSize>
                        </div>
                    </div>

                    <div class="card-body" style="padding:3px">

                        <!-- <p class="m-0 text-center">Fabric Name</p> -->
                        <!-- <div class="d-flex justify-content-between" id="scroll">
                            <p class="test text-start ms-1 m-0" style="font-size:10px"> {{ product.name }}</p>
                            <p class="text-start m-0" style="font-size:10px">{{ product.info }}</p>
                        </div> -->

                        <!-- <CardColors :colors="product.colors"></CardColors> -->

                        <div class="d-flex justify-content-between mt-1 ms-1 pb-1">
                            <p class="m-0 fw-bold" style="font-size:13px;">₹{{ product.price }} / pc</p>
                            <p class="m-0 fw-bold" style="font-size:13px;">{{ product.info }}</p>

                        </div>

                    </div>
                    <div class="card-footer rounded-0 p-0" style="">
                        <div class="btn-group w-100 overflow-hidden" style="opacity: .85;border-radius: 0px !important;">
                            <!-- <button class="btn bg-outline-dark rounded-0 border-end p-0"> -->
                            <!-- <i :class="product.hearticon"></i> -->
                            <div class="w-50 border-end ">
                                <!-- <button type="button" class="btn btn-outline-danger border-0 w-100 rounded-0 h-100"
                                    @click="saveProduct(product)" style="padding:3px  !important">
                                    <i class="bi bi-heart fs-4"></i>
                                </button> -->

                                <input type="checkbox" class="btn-check" name="fav" :id="'fav' + product.id"
                                    autocomplete="off">
                                <label class="btn btn-outline-danger rounded-0 border-0 w-100 h-100"
                                    :for="'fav' + product.id" style="padding:3px  !important">
                                    <i class="bi bi-heart fs-4" @click="saveProduct(product)"></i>
                                </label>

                            </div>
                            <!-- <i class="bi bi-heart fs-4"></i> -->
                            <!-- </button> -->
                            <!-- <button class="btn bg-outline-dark rounded-0 py-0"> -->
                            <div class="w-50 ">
                                <input type="checkbox" class="btn-check" name="cart" :id="'cart' + product.id"
                                    autocomplete="off">
                                <label class="btn btn-outline-primary rounded-0 border-0 h-100 w-100" :for="'cart' + product.id"
                                    style="padding:0px  !important">
                                    <i class="bi bi-cart-plus fs-3"></i>
                                </label>
                            </div>

                            <!-- <i class="bi bi-cart-plus fs-3"></i> -->
                            <!-- </button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import CardColors from '../Catelog/CardColors.vue';
import CardSize from '../Catelog/CardSize.vue';
import router from '../../router';
// import CatelogFilter from './CatelogFilter.vue';
import OrderFilter from '../Orders/OrdinaryOrder/OrderFilter.vue';
export default {
    name: "CardCatelog",
    data() {
        return {
            publicPath: process.env.BASE_URL,
            selectedImage: {},
        }
    },
    computed: {
        products() {
            return this.$store.getters.getProducts
        },

    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch('selectProduct', product).then(
                () => {
                    router.push('/ProductPage/' + product.id)
                }
            )
        },
        saveProduct(product) {
            this.$store.dispatch('saveProduct', product)
        },
        selectImage(image) {
            this.selectedImage = image;
        },

    },

    components: {
        // CardColors,
        CardSize,
        // CatelogFilter,
        OrderFilter
    },

}
</script>
<style>
.show-on-hover .soh-div {
    /* display: none; */
    opacity: .75;
}

.show-on-hover:hover .soh-div {
    /* display: block; */
    opacity: 1;
}

.test {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #505050;
}

#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.bi-cart-plus::before {
    content: "\f23f";
    margin-bottom: 2px;
}
</style>

<!-- 
passing prop via route

<div class="card show-on-hover">
    <router-link :to="{ name: 'ProductPage', params: { product: product } }" class="text-decoration-none text-dark position-relative">
        <img :src="`${publicPath}${product.img}`" class="card-img-top" alt="" style="min-height:250px;">
    </router-link>
    <router-link :to="{ name: 'ProductPage', params: { product: product } }" class="text-decoration-none text-dark position-absolute w-100 soh-div">
        <div class="d-flex justify-content-between align-items-start"
            style="max-height:300px; overflow-y:scroll;">
            <CardColors :colors="product.colors"></CardColors>
            <CardSize :sizes="product.sizes"></CardSize>
        </div>
    </router-link>
    <router-link to="/ProductPage" class="text-decoration-none text-dark card-body px-1">
        <p class="text-center fs-5 mb-1 fw-bold"> {{ product.name }}</p>
        <p class="text-center m-0">{{product.info}}</p>
    </router-link>
    <div class="card-footer p-0">
        <div class="btn-group w-100 rounded-bottom overflow-hidden" style="opacity: .85;">
            <button class="btn bg-outline-dark rounded-0">
                <i class="bi bi-heart"></i>
            </button>
            <button class="btn bg-outline-dark rounded-0">
                <i class="bi bi-cart-plus-fill"></i>
            </button>
        </div>
    </div>
</div> -->