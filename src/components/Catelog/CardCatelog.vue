<template>
<div class="container" style="padding-bottom:80px">
    <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        <div class="col " v-for="(product, index) in products" :key="index">
            <div class="card show-on-hover">
                <router-link :to="'/ProductPage/' + product.id">
                    <!-- <div @click="showProduct(product)" class="position-relative"> -->
                        <!-- <img src="../../../public/img/icons/cardimg.png" class="card-img-top" alt="" style="min-height:250px;"> -->
                        <img :src="product.images[0]" class="card-img-top" alt=""
                        style="min-height:100px;">

                        <!-- <img :src="`${publicPath}${product.image}`" class="card-img-top" alt=""
                        style="min-height:100px;height: 280px;object-fit: fill;"> -->
                    <!-- </div> -->
                </router-link>
                <div @click="showProduct(product)" class=" position-absolute w-100 soh-div">
                    <div class="d-flex justify-content-between align-items-start"
                        style="max-height:200px; overflow-y:scroll;">
                        <CardColors :colors="product.colors"></CardColors>
                        <CardSize :sizes="product.sizes"></CardSize>
                    </div>
                </div>
                <div @click="showProduct(product)" class="card-body px-1">
                    <p class="text-center fs-5 mb-1 fw-bold"> {{ product.name }}</p>
                    <p class="text-center m-0">{{ product.info }}</p>
                </div>
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
            </div>
        </div>
    </div>
</div>
  <!--   <div class="d-flex position-relative" style="height: 80%; overflow-y: scroll;">
        <div class="position-sticky" style="top: 0;">
            <div id="list-example" class="list-group" style="overflow-y: scroll; height: 100%;">
                <a class="list-group-item list-group-item-action text-center" href="#list-item-1">
                    <i class="bi bi-patch-check-fill fs-3"></i> Popular</a>
                <a class="list-group-item list-group-item-action text-center" href="#list-item-2">
                    <i class="bi bi-award-fill fs-3"></i>New</a>
                <a class="list-group-item list-group-item-action text-center" href="#list-item-3"><img src="https://images.meesho.com/images/marketing/1591970222196_64.webp" alt="" style="height: 24px; width: 24px;">Item 3</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                <a class="list-group-item list-group-item-action" href="#list-item-5">Item 5</a>
              
            </div>
        </div> -->
        <!-- <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="50" class="scrollspy-example" tabindex="0">
            <h4 id="list-item-1" class="text-center">Popular</h4>
            <h4 id="list-item-2" class="text-center mt-4">New</h4>
           <CollectionGrid></CollectionGrid> 
            <h4 id="list-item-3" class="text-center mt-4">Item 3</h4>
            <p class="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero enim laudantium ex
                voluptatem temporibus
                numquam eum laborum excepturi at asperiores voluptates totam, quam cumque officiis, suscipit tenetur
                repudiandae
                error quasi maiores corrupti nemo necessitatibus nisi. Doloribus magnam reiciendis delectus voluptas
                perferendis
                repudiandae qui dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero enim laudantium ex
                voluptatem temporibus
                numquam eum laborum excepturi at asperiores voluptates totam, quam cumque officiis, suscipit tenetur
                repudiandae
                error quasi maiores corrupti nemo necessitatibus nisi. Doloribus magnam reiciendis delectus voluptas
                perferendis
                repudiandae qui dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero enim laudantium ex
                voluptatem temporibus
                numquam eum laborum excepturi at asperiores voluptates totam, quam cumque officiis, suscipit tenetur
                repudiandae
                error quasi maiores corrupti nemo necessitatibus nisi. Doloribus magnam reiciendis delectus voluptas
                perferendis
                repudiandae qui dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero enim laudantium ex
                voluptatem temporibus
                numquam eum laborum excepturi at asperiores voluptates totam, quam cumque officiis, suscipit tenetur
                repudiandae
                error quasi maiores corrupti nemo necessitatibus nisi. Doloribus magnam reiciendis delectus voluptas
                perferendis
                repudiandae qui dolores!</p>
            <h4 id="list-item-4" class="text-center mt-4">  Item 4</h4>
            <p class="container">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi hic beatae, minus
                quam repudiandae
                error
                eos consequuntur aspernatur tenetur sed omnis commodi dolor officiis culpa ducimus incidunt laborum tempore
                corporis dolores fuga alias cum. Rerum, dolor? Vero dolor maiores, mollitia sequi blanditiis nihil
                reprehenderit, in quibusdam, sit consectetur quaerat vel nostrum esse expedita accusamus dolorum. Nihil
                voluptate fuga eaque iste consectetur dignissimos consequatur recusandae corporis numquam?</p>
        </div> 
    </div>-->

</template>
<script>
import CardColors from '../Catelog/CardColors.vue';
import CardSize from '../Catelog/CardSize.vue';
import router from '../../router';
// import CollectionGrid from '../Collection/CollectionGrid.vue';

export default {
    name: "CardCatelog",
    // data(){
    //     return{
    //         products:[
    //             {
    //                 name: '10pcs @ ₹3500',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹300',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹3700',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹3800',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹3900',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹4000',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹500',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹300',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹6000',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹900',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //             {
    //                 name: '10pcs @ ₹1000',
    //                 info: 'Rate @ ₹250/ pcs'
    //             },
    //         ]
    //     }
    // },
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
        }   
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        CardColors,
        CardSize,
        // CollectionGrid
    }
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