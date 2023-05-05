<template>
     <div class="">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.img" alt="Product image" />
      <div class="product-content">
        <div class="product-head">
          <h6 class="product-title">{{ product.name }}</h6>
          <span
            >By<span class="owner">{{ product.owner }}</span></span
          >
        </div>
        <div class="product-footer">
          <div class="price">
            <span>Price</span>
            <span class="val">{{ product.val }}</span>
          </div>
          <div class="btns">
            <button
              class="remove-tocart"
              @click="updateCart(product, 'subtract')"
            >
              -
            </button>
            <span class="quantity">{{ product.quantity }}</span>
            <button class="add-tocart" @click="updateCart(product, 'add')">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
<CartData></CartData>
  
</template>
<script>
import CartData from './CartData.vue';
export default {
  name:"ProductTest",  
  data() {
    return {
      products: [
        {
          id: 1,
          name: "One Tribe Black Edition 1",
          img: "https://enftymart.themenio.com/img/nft-lg.8f26d1a6.jpg",
          val: "14.99",
          owner: "ZeniconStudio",
          quantity: 0,
        },
        {
          id: 2,
          name: "One Tribe Black Edition 2",
          img: "https://miro.medium.com/max/2000/1*AJrLFnuCAD8dE1p1Bg0dbg.jpeg",
          val: "15.99",
          owner: "ZeniconStudio",
          quantity: 0,
        },
        {
          id: 3,
          name: "One Tribe Black Edition 3",
          img:
            "https://creativereview.imgix.net/content/uploads/2021/09/F4E079D612B9653BEFC4D8D2F39781E39A3025C693B177A61D6C73A5156248EA.jpg?auto=compress,format&q=60&w=1200&h=849",
          val: "14.99",
          owner: "ZeniconStudio",
          quantity: 0,
        },
        {
          id: 4,
          name: "One Tribe Black Edition 4",
          img:
            "https://coffeebros.com/wp-content/uploads/2021/10/astronaut-background.jpg",
          val: "14.99",
          owner: "ZeniconStudio",
          quantity: 0,
        },
        {
          id: 5,
          name: "One Tribe Black Edition 5",
          img:
            "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/5NOWWNNEBRER7BXFZKCYRCA7NA.jpg",
          val: "14.99",
          owner: "ZeniconStudio",
          quantity: 0,
        },
        {
          id: 6,
          name: "One Tribe Black Edition 6",
          img:
            "https://static01.nyt.com/images/2021/08/15/fashion/TEEN-NFTS--fewocious/TEEN-NFTS--fewocious-videoSixteenByNineJumbo1600.jpg",
          val: "14.99",
          owner: "ZeniconStudio",
          quantity: 0,
        },
      ],
    };
  },
  components:{
    CartData
  },
  methods: {
    updateCart(product, updateType) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
            }
          } else {
            this.products[i].quantity++;
          }
          break;
        }
      }
      this.$store.dispatch("addItem", product);
    },
  },
}
</script>
<style >
.product-item {
  position: relative;
  box-shadow: 0 1px 10px rgb(24 24 24 / 7%);
  flex: 1 0 calc(100% / 3 - 60px);
}
.product-item {
  margin: 0 15px 15px;
}
.product-item img {
  height: 245px;
  width: 100%;
  object-fit: cover;
}
.product-item .product-content {
  padding: 15px;
}
.product-item .product-content .product-head {
  margin-bottom: 15px;
  text-align: initial;
}
.product-item .product-content .product-title {
  font-size: 18px;
}
.product-item .product-content .product-head span,
.product-item .product-content .product-footer .price {
  color: #c5c5c5;
  font-size: 14px;
}
.product-item .product-content .product-head .owner,
.product-item .product-content .product-footer .val {
  color: #000;
  font-size: 16px;
  margin-left: 5px;
}
.product-item .product-content .product-footer .val {
  margin-left: 0;
  font-weight: 700;
  position: relative;
}
.product-item .product-content .product-footer .val::before {
  content: "$";
}
.product-item .product-content .product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-item .product-content .product-footer .price {
  display: flex;
  flex-direction: column;
}
.add-tocart,
.remove-tocart {
  background-color: #fff;
  border: 1.5px solid #000;
  color: #000;
  text-decoration: none;
  padding: 0px 10px;
  font-size: 20px;
  transition: 0.5s;
  line-height: 30px;
}
.add-tocart:hover,
.remove-tocart:hover {
  color: #fff;
  background-color: #000;
  cursor: pointer;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
}
</style>