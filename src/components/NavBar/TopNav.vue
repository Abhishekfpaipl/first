<template lang="">
    <div class="container-fluid tpnav">
        <div class="d-flex justify-content-between align-items-center">
          <!-- <router-link to="/"></router-link> -->
            <div class="d-flex justify-content-center">
              <router-link to="/" class="text-decoration-none text-dark">
                <div class="d-flex align-items-center">
                  <!-- <img alt="Vue logo" src="../../../public/img/products/deshigirllogo.png" class="ms-2 gx-5" style="width:40px;" /> -->
                  <h1 class="m-0 text-center" style="color:#EDA3A4">Deshi Girl</h1>
                </div>
              </router-link>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div class="d-flex justify-content-center">
                <router-link to="" :class="{'text-danger' : currentRoute === ''}" style="text-decoration:none;color:black">
                  <!-- <i class="bi bi-search fs-1" data-bs-toggle="collapse" data-bs-target="#myCollapse2"></i> -->
                  <i class="bi bi-search fs-1 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleSearch" aria-controls="offcanvasExampleSearch"></i>
                 
                 
               </router-link>
              </div>

              <div class=" d-flex justify-content-center">
                <router-link to="/SavedProduct" :class="{'text-danger' : currentRoute === 'SavedProduct'}" style="text-decoration:none;color:black">
                  <i class="bi bi-heart fs-1"></i>
                </router-link>
              </div>
              <div class=" d-flex justify-content-center">
                <router-link to="/simplestepper/simplestepper1" :class="{'text-danger' : currentRoute === 'simplestepper'}" style="text-decoration:none;color:black">
                  <i :class="currentIconClass" @click="toggleIcon"></i>
                  <!-- <i class="bi bi-cart fs-1 mb-2"></i> -->
                </router-link>
              </div>
            </div>
           
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExampleSearch" aria-labelledby="offcanvasExampleLabel" style="width:90vw">
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Search</h5>
            <button type="button" class="btn-close animation" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            
            <div class="">
              <select class="form-select" aria-label="Default select example">
                <option selected>All Categories</option>
                <option value="1">Clothing Sets</option>
                <option value="2">Jumpsuit</option>
                <option value="3">Jumpsuits & Jacket</option>
                <option value="3">Kurta Sets</option>
              </select>
            </div>

            <div class=" mt-5">
              <div class="input-group d-flex justify-content-center">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Search"/>
                </div>
                <button type="button" class="btn btn-primary" >
                    <i class="bi bi-search" ></i>
                </button>
              </div> 
            </div>
            
          </div>
        </div>


    </div>
</template>
<script>
export default {
  name: 'TopNav',
  data() {
    return {
      isClicked: false,
      currentIconClass: "bi bi-bag fs-1"
    };
  },
  methods: {
    toggleIcon() {
      this.isClicked = !this.isClicked;
      this.currentIconClass = this.isClicked ? "bi bi-bag-plus fs-1" : "bi bi-bag fs-1";
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>
<style scoped>
    .animation:hover{
      transform: rotate(360deg) !important;
      transition: 0.6s ease-in-out !important;
    }
</style>