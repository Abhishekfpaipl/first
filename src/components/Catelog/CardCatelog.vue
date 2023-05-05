<template>
    <div class="d-flex position-relative" style="height: 80%; overflow-y: scroll;">
        <div class="position-sticky" style="top: 0;">
            <div id="list-example" class="list-group" style="overflow-y: scroll; height: 100%;">
                <a class="list-group-item list-group-item-action text-center" href="#list-item-1">
                    <i class="bi bi-patch-check-fill fs-3"></i> Popular</a>
                <a class="list-group-item list-group-item-action text-center" href="#list-item-2">
                    <i class="bi bi-award-fill fs-3"></i>New</a>
                <a class="list-group-item list-group-item-action text-center" href="#list-item-3"><img src="https://images.meesho.com/images/marketing/1591970222196_64.webp" alt="" style="height: 24px; width: 24px;">Item 3</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                <a class="list-group-item list-group-item-action" href="#list-item-5">Item 5</a>
                <!-- <a class="list-group-item list-group-item-action" href="#list-item-6">Item 6</a>
                <a class="list-group-item list-group-item-action" href="#list-item-7">Item 7</a>
                <a class="list-group-item list-group-item-action" href="#list-item-8">Item 8</a>
                <a class="list-group-item list-group-item-action" href="#list-item-9">Item 9</a>
                <a class="list-group-item list-group-item-action" href="#list-item-10">Item 10</a>
                <a class="list-group-item list-group-item-action" href="#list-item-11">Item 11</a>
                <a class="list-group-item list-group-item-action" href="#list-item-12">Item 12</a>
                <a class="list-group-item list-group-item-action" href="#list-item-13">Item 13</a> -->
            </div>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="50" class="scrollspy-example" tabindex="0">
            <h4 id="list-item-1" class="text-center">Popular</h4>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
                    <div class="col " v-for="(product, index) in products" :key="index">
                        <div class="card show-on-hover">
                            <div @click="showProduct(product)" class="position-relative">
                                <!-- <img src="../../../public/img/icons/cardimg.png" class="card-img-top" alt="" style="min-height:250px;"> -->
                                <img :src="`${publicPath}${product.img}`" class="card-img-top" alt=""
                                    style="min-height:200px;">
                            </div>
                            <div @click="showProduct(product)" class=" position-absolute w-100 soh-div">
                                <div class="d-flex justify-content-between align-items-start"
                                    style="max-height:250px; overflow-y:scroll;">
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
            <h4 id="list-item-2" class="text-center mt-4">New</h4>
            <!-- <p>1228 Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero enim laudantium ex
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
                repudiandae qui dolores! 1189 </p> -->
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
    </div>



    <!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#section1">Section 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section2">Section 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#section3">Section 3</a>
      </li>
    </ul>
  </div>
</nav>

<div id="section1" class="container-fluid bg-success text-white" style="padding:100px 20px;">
  <h1>Section 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>

<div id="section2" class="container-fluid bg-warning" style="padding:100px 20px;">
  <h1>Section 2</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>

<div id="section3" class="container-fluid bg-secondary text-white" style="padding:100px 20px;">
  <h1>Section 3</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div> -->
</template>
<script>
import CardColors from '../Catelog/CardColors.vue';
import CardSize from '../Catelog/CardSize.vue';
import router from '../../router';
import CollectionGrid from '../Collection/CollectionGrid.vue';

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
        }
    },
    methods: {
        showProduct(product) {
            return this.$store.dispatch('selectProduct', product).then(
                () => {
                    router.push('/ProductPage')
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
        CollectionGrid
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