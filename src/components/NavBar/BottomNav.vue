<template lang="">
  <div class=" position-fixed w-100" style="bottom: 0; z-index:1;">
    <div class=" nav-bottom" style="height: 20%">
      
      <div class="items">
        <routerLink to="/"  class="text-dark" style="text-decoration: none;">
          <div class="inner-items">
            <i class="bi bi-house-fill fs-3"></i>
            <p>Home</p>
          </div>
        </routerLink>
      </div>
      <div class="items">
        <router-link to="/CardCatelog" class="text-dark" style="text-decoration: none;">
        <div class="inner-items">
          <i class="bi bi-tags-fill fs-3"></i>
          <p>Category</p>
        </div>
      </router-link>
      </div>
      <div class="items">
        <router-link to="/CartPage" class="text-dark" style="text-decoration:none;">
          <div class="inner-items">
            <i class="bi bi-cart fs-3"></i>
            <p>Cart</p>
          </div>
        </router-link>
      </div>
      <div class="items">
        <router-link to="/SignupForm" class="text-dark" style="text-decoration:none;">
        <div class="inner-items">
          <i class="bi bi-person-fill fs-3"></i>
          <p>Account</p>
        </div>
      </router-link>
      </div>
      <div class="items">
        <router-link to="/OrderPage" class="text-dark" style="text-decoration:none;">
          <div class="inner-items">
            <i class="bi bi-journal-bookmark-fill fs-3"></i>
            <p>Orders</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  background: gray;
}
</style>
