<template lang="">
  <div class="position-fixed w-100" style="bottom: 0">
    <div class="container nav-bottom" style="height: 20%">
      <!-- <div class="row">
        <div class="col-3 d-flex flex-column align-items-center">
          <i class="bi bi-house fs-3"></i>Home
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <i class="bi bi-bookmarks fs-3"></i>Category
        </div>
         <div class="col-3 d-flex flex-column align-items-center"><i class="bi bi-bag-fill  fs-3"></i>Cart</div> 
        <div class="col-3 d-flex flex-column align-items-center">
          <i class="bi bi-person-fill fs-3"></i>Account
        </div>
        <div class="col-3 d-flex flex-column align-items-center">
          <i class="bi bi-journal-bookmark-fill fs-3"></i>Orders
        </div>
      </div> -->
      <div class="items">
        <routerLink to="/"  class="text-dark" style="text-decoration: none;">
          <div class="inner-items">
            <i class="bi bi-house-fill fs-3"></i>
            <p>Home</p>
          </div>
        </routerLink>
      </div>
      <div class="items">
        <router-link to="/CollectionPage" class="text-dark" style="text-decoration: none;">
        <div class="inner-items">
          <i class="bi bi-tags-fill fs-3"></i>
          <p>Category</p>
        </div>
      </router-link>
      </div>
      <div class="items">
        <router-link to="/CartPage" class="text-dark" style="text-decoration:none;">
          <div class="inner-items">
            <i class="bi bi-bag-fill fs-3"></i>
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
  gap: 2rem;
  justify-content: center;
  background: white;
}
</style>
