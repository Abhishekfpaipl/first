<template>
    <div class="cartData" @receiveInCart="storeData" style="padding-bottom: 100px;">
      <h1>Your cart</h1>
      <div v-for="item in getCart"  :key="item.id">
        <div class="cart-items">
          <h5 class="text-wrap" style="width: 10%;">{{ item.name }}</h5>
          <p>{{ item.quantity }}</p>
          <p>{{ item.val }}</p>
          <h5>{{ amount(item) }}</h5>
        </div>
      </div>
      <h3>TOTAL : {{ total }}</h3>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        cartData: [],
      };
    },
    computed: {
      ...mapGetters(["getCart"]),
      total() {
        return (
          Math.round(
            this.getCart.reduce((acc, cur) => acc + cur.val * cur.quantity, 0) *
              100
          ) / 100
        ).toFixed(2);
      },
    },
    methods: {
      storeData(data) {
        this.cartData = data;
      },
      amount(item) {
        return (Math.round(item.quantity * item.val * 100) / 100).toFixed(2);
      },
    },
  };
  </script>
  <style>
  .cartData {
    flex-basis: 100%;
    margin: 0 15px;
    box-shadow: 0 1px 10px rgb(24 24 24 / 7%);
  }
  .cart-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  </style>