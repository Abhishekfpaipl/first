<template lang="">
  <div class=" position-fixed w-100 bg-white" style="bottom: 0; z-index:1;">
    <div class=" nav-bottom justify-content-evenly" style="height: 63px; padding: 0 18px;">
     <div class="items">
        <routerLink to="/"  :class="{'text-danger' : currentRoute ==='HomeView' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <!-- <i :class="['bi bi-shop-window fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
            <span style="font-size:12px" :style="textStyle">Home</span> -->
            
            <i class="bi bi-shop-window fs-5"></i>
            <p class="m-0" style="font-size:12px">Home</p>
          </div>
        </routerLink>
      </div>
      <div class="items">
        <router-link to="/CategoryNew" :class="{'text-danger' : currentRoute ==='CategoryNew' }" style="text-decoration:none;color:black;">
        <div class="inner-items py-1 d-flex flex-column">
          <!-- <i :class="['bi bi-grid-1x2 fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
            <span style="font-size:12px" :style="textStyle">Category</span> -->

          <i class="bi bi-grid-1x2 fs-5"></i>
          <p class="m-0" style="font-size:12px">Category</p>
        </div>
      </router-link>
      </div>
      <!-- <div class="items">
        <router-link to="/CartPage" class="text-dark" style="text-decoration:none;">
          <div class="inner-items">
            <i class="bi bi-cart fs-3"></i>
            <p>Cart</p>
          </div>
        </router-link>
      </div> -->
      <div class="items">
        <router-link to="/SignupForm" :class="{'text-danger' : currentRoute ==='SignupForm' }" style="text-decoration:none;color:black;">
        <div class="inner-items py-1 d-flex flex-column">
          <!-- <i :class="['bi bi-emoji-smile fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
          <span style="font-size:12px" :style="textStyle">Me</span> -->
          
          <i class="bi bi-emoji-smile fs-5"></i>
          <p class="m-0" style="font-size:12px">Me</p>
        </div>
      </router-link>
      </div>
      <div class="items">
        <router-link to="/OrderPage" :class="{'text-danger' : currentRoute ==='OrderPage' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <!-- <i :class="['bi bi-archive fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
            <span style="font-size:12px" :style="textStyle">Orders</span> -->
            
            <i class="bi bi-archive fs-5"></i>
            <p class="m-0" style="font-size:12px">Orders</p>
          </div>
        </router-link>
      </div>
      <div class="items">
        <div class="inner-items py-1 d-flex flex-column">
            <router-link to="/ContactUs" :class="{'text-danger' : currentRoute ==='ContactUs' }" style="text-decoration:none;color:black;">
            <!-- <i :class="['bi bi-chat-dots fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
            <span style="font-size:12px" :style="textStyle">Support</span> -->
            
            <i class="bi bi-chat-dots fs-5"></i>
            <p class="m-0" style="font-size:12px">Support</p>
          </router-link>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    // data() {
    //   return {
    //     isActive: false,
    //     textStyle: {}
    //   };
    // },
    // methods: {
    //   toggleIconColor() {
    //     this.isActive = !this.isActive;
    //     this.updateTextStyle();
    //   },
    //   updateTextStyle() {
    //     if (this.isActive) {
    //       this.textStyle = {
    //         fontWeight: 'bold'
    //       };
    //     } else {
    //       this.textStyle = {};
    //     }
    //   }
    // },
    computed:{
      currentRoute(){
        return this.$route.name;
      }
    }
  };
  </script>
<style>
.items {
  display: flex;
  text-align: center;
}

.nav-bottom {
  height: 20%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background: #F6F6F6;
}
</style>
