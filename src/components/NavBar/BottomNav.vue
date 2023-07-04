<template lang="">
  <div style="">
  <!-- <nav class="navbar fixed-bottom navbar-light" style="z-index:1;" :class="{ 'navbar-hidden': navbarHidden }"> -->
  <nav class="navbar fixed-bottom " style="z-index:1;box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;">
  <div class=" position-fixed w-100" style="bottom: 0; ">
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
        <router-link to="/categories" :class="{'text-danger' : currentRoute ==='categories' }" style="text-decoration:none;color:black;">
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
        <router-link to="/favourite-products" :class="{'text-danger' : currentRoute ==='FavouriteProducts' }" style="text-decoration:none;color:black;">
        <div class="inner-items py-1 d-flex flex-column">
          <!-- <i :class="['bi bi-emoji-smile fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
          <span style="font-size:12px" :style="textStyle">Me</span> -->

          <i class="bi bi-heart fs-5"></i>
          <p class="m-0" style="font-size:12px">Favourite</p>
        </div>
      </router-link>
      </div>
      <div class="items">
        
        <router-link to="/checkout/cart" :class="{'text-danger' : currentRoute === 'CheckoutCart'}" style="text-decoration:none;color:black">
        <div class="inner-items py-1 d-flex flex-column">
           <i class="bi bi-bag fs-5"></i>
           <p class=" m-0" style="font-size:12px">Cart</p>
          </div>
        </router-link>
      </div>
      <div class="items">
        <router-link to="/orders/running" :class="{'text-danger' : currentRoute ==='orders-running' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <!-- <i :class="['bi bi-archive fs-5', { 'active': isActive }]" @click="toggleIconColor"></i>
            <span style="font-size:12px" :style="textStyle">Orders</span> -->
            
            <i class="bi bi-archive fs-5"></i>
            <p class="m-0" style="font-size:12px">Orders</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</nav>
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
  data() {
    return {
      prevScroll: window.pageYOffset,
      navbarHidden: false
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScroll = window.pageYOffset;
      if (this.prevScroll > currentScroll) {
        this.navbarHidden = false;
      } else {
        this.navbarHidden = true;
      }
      this.prevScroll = currentScroll;
    },
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

.navbar {
  /* background-color: #f1f1f1; */
  height: 60px;
  transition: transform 0.5s;
  transform: translateY(0);
}

.navbar-hidden {
  transform: translateY(100%);
}
</style>
