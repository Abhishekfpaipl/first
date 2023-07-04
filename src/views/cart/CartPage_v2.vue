<template>
    <!-- <p class="p-3 mt-3 mb-0" style="background-color:lightgreen">Save ₹10 with Only Wrong/Defect item Returns</p> -->
    <div class="mt-2">

        <div v-for="(product, index) in products" :key="index" class="">
            <div class="border border-2 px-2">
                <div class="d-flex py-2">
                    <img :src="product.img"
                        class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                        style="height:80px; width: 80px;object-fit: fill;">
                    <div @click="show = !show">
                        <div class="ms-2 " @click="showCartProduct(product)">
                            <p class="dot">{{ product.name }}sdfsd dfdfs sdfasd www</p>
                            <div class="d-flex gap-2">
                                <span class="" style="font-size: 14px;">₹{{ product.price }}</span>

                                <span class="" style="font-size: 14px;">Size : {{ product.size }}</span>
                            </div>
                            <p>Qty : 10</p>
                        </div>
                        <p class="m-0 text-danger" @click="showRemoveProduct(product)"><i class="bi bi-x fs-5"></i>
                            Remove</p>
                    </div>
                </div>
                <div class="d-flex justify-content-between border-top py-3">
                    <p class="m-0">Sold by : DeshiGirl</p>
                    <p class="m-0">Free Delivery</p>
                </div>
            </div>
        </div>

        <RouterLink to="/SavedProduct" class="text-decoration-none text-dark">
            <div class="d-flex justify-content-between border-top border-bottom border-2 p-3">
                <p class=" m-0 fw-bold">Wishlist</p>
                <p class=" m-0 fw-bold">></p>
            </div>
        </RouterLink>

        <div class="container my-2">
            <p style="font-weight:600">Price Details</p>

            <div class="d-flex justify-content-between  py-2">
                <p class="m-0  text-decoration-underline" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomPrice"
                    aria-controls="offcanvasBottomPrice">Total Product Price</p>
                <p class="m-0">+ ₹1232</p>
            </div>
            <div class="d-flex justify-content-between border-bottom pb-2">
                <p class="m-0 text-success text-decoration-underline" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottomDiscount" aria-controls="offcanvasBottomDiscount">Total Discounts</p>
                <p class="m-0 text-success">- ₹122</p>
            </div>
            <div class="d-flex justify-content-between pt-2 ">
                <p class="m-0 ">Order Total</p>
                <p class="m-0 ">₹1105</p>
            </div>
            <div class="p-2" style="background-color: #D3F4EA;">
                <p class="m-0 text-center">YAY! Your total cart discount is ₹127</p>
            </div>
        </div>


        <!-- cart edit -->
        <Transition>
            <div v-if="Object.keys(activeCartProduct).length !== 0">
                <div class="offcanvas offcanvas-bottom show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel" style=" height: auto; max-height: calc(100vh - 200px);">
                    <div class="offcanvas-header p-0">
                        <!-- <h5 class="offcanvas-title" id="staticBackdropLabel">Edit</h5> -->
                        <button type="button" class="btn" style="margin-left: auto;" @click="hideCartProduct()"><i
                                class="bi bi-x fs-4"></i></button>
                    </div>
                    <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
                        <div class="d-flex py-2 w-100">
                            <img :src="activeCartProduct.img"
                                class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                                style="height:80px; width: 80px;object-fit: fill;">
                            <div class="ms-2">
                                <p class="dot text-start m-0"> {{ activeCartProduct.name }}asdasdas dasda sda sd as</p>
                                <p class="mb-0 mt-2" style="font-size: 14px;">₹{{ activeCartProduct.price }}</p>
                                <div class="d-flex mt-2">
                                    <p class="mb-0">Size </p>
                                    <p class="ms-2 mb-0">{{ activeCartProduct.size }}</p>
                                </div>
                                <div class="d-flex mt-2">
                                    <p class="">Qty</p>
                                    <div class="d-flex ms-2 align-items-center">
                                        <i class="bi bi-dash border p-1" @click="decrement"></i>
                                        <input type="number" class="fw-bold form-control-sm px-2 text-center"
                                            v-model="quantity" style="width: 20%; border: 0px;" />
                                        <i class="bi bi-plus border p-1" @click="increment"></i>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="d-flex justify-content-center border-top pt-3">
                            <button class="btn btn-success">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- Remove product -->
        <Transition>
            <div v-if="Object.keys(activeRemoveProduct).length !== 0">
                <div class="offcanvas offcanvas-bottom show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel" style=" height: auto; max-height: calc(100vh - 200px);">
                    <div class="offcanvas-header p-0">
                        <!-- <h5 class="offcanvas-title" id="staticBackdropLabel">Edit</h5> -->
                        <button type="button" class="btn" style="margin-left: auto;" @click="hideRemoveProduct()"><i
                                class="bi bi-x fs-4"></i></button>
                    </div>
                    <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
                        <div class="d-flex py-2">
                            <img :src="activeRemoveProduct.img"
                                class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                                style="height:80px; width: 80px;object-fit: fill;">
                            <div @click="show = !show">
                                <div class="ms-2">
                                    <span class="">{{ activeRemoveProduct.name }}sdfsd dfdfs sdfasd www</span>
                                    <div class="d-flex gap-2">
                                        <span class="" style="font-size: 14px;">₹{{ activeRemoveProduct.price }}</span>

                                        <span class="" style="font-size: 14px;">Size : {{ activeRemoveProduct.size }}</span>
                                    </div>
                                    <p>Qty : 10</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between border-top gap-1 pt-3">
                            <button class="btn btn-outline-dark w-50"><i class="bi bi-x fs-5"></i> Remove</button>
                            <button class="btn btn-success w-50"><i class="bi bi-heart fs-5"></i> Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- Wishlist -->
        <!-- <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Wishlist</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="" v-for="(product, index) in savedProducts" :key="index">
                    <div class="d-flex py-2 border-top">
                        <img :src="product.img"
                            class="rounded-circle border border-1 d-flex justify-content-center align-items-center"
                            style="height:80px; width: 80px;object-fit: fill;">

                        <div class="ms-2">
                            <p class="">{{ product.name }}</p>
                            <div class="d-flex gap-2">
                                <span class="" style="font-size: 14px;">₹{{ product.price }}</span>
                            </div>
                            <button class="btn btn-warning py-0"><i class="bi bi-cart-plus fs-5"></i> Add To Cart</button>
                        </div>

                    </div>
                </div>

                
            </div>
        </div> -->

        <!-- Total Price -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomPrice"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Product Price</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Product Price</p>
                    <p class="m-0">1217</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Easy Returns</p>
                    <p class="m-0 ">15</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">+ ₹1232</p>
                </div>
            </div>
        </div>

        <!-- Total Discount -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomDiscount"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Discounts</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Supplier Promotional Discount</p>
                    <p class="m-0">-48</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Special Product Discount</p>
                    <p class="m-0 ">-78</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">- ₹126</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartPage",
    data() {
        return {
            show: true,
            quantity: 0,
            price: 697,
            discount: 100,
        };
    },
    computed: {
        products() {
            return this.$store.getters.getCartProduct;
        },
        activeCartProduct() {
            return this.$store.getters.getActiveCartProduct;
        },
        activeRemoveProduct() {
            return this.$store.getters.getActiveRemoveProduct;
        },
        savedProducts() {
            return this.$store.getters.getSavedProducts;
        }
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            this.quantity--;
        },
        showCartProduct(product) {
            return this.$store.dispatch("selectCartProduct", product);
        },
        hideCartProduct() {
            return this.$store.dispatch("hideCartProduct");
        },
        showRemoveProduct(product) {
            return this.$store.dispatch("selectRemoveProduct", product);
        },
        hideRemoveProduct() {
            return this.$store.dispatch("hideRemoveProduct");
        },
        favProduct(product) {
            this.$store.dispatch("saveProduct", product);
        },
    },
}
</script>

<style scoped>
.dot {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #505050;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.nav-bottom.justify-content-evenly {
    display: none;
}
</style>