<template lang="">
    <div class="container-fluid tpnav">
        <div class="row">
          <!-- <router-link to="/"></router-link> -->
            <div class="col-8">
              <router-link to="/" class="text-decoration-none text-dark">
                <div class="d-flex align-items-center">
                  <img alt="Vue logo" src="../../../public/img/products/deshigirllogo.png" class="ms-2 gx-5" style="width:40px;" />
                  <h1 class="m-0 text-center" style="color:#EDA3A4">Deshi Girl</h1>
                </div>
              </router-link>
            </div>
            <div class="col-4 d-flex align-items-center gap-2">
              <div class="d-flex justify-content-center">
                <router-link to="" :class="{'text-danger' : currentRoute === ''}" style="text-decoration:none;color:black">
                  <i class="bi bi-search fs-1" data-bs-toggle="collapse" data-bs-target="#myCollapse2"></i>
                 
                 
               </router-link>
              </div>

              <div class=" d-flex justify-content-center">
                <router-link to="/SavedProduct" :class="{'text-danger' : currentRoute === 'SavedProduct'}" style="text-decoration:none;color:black">
                  <i class="bi bi-heart fs-1"></i>
                </router-link>
              </div>
              <div class=" d-flex justify-content-center">
                <router-link to="/SimpleStepper1" :class="{'text-danger' : currentRoute === 'SimpleStepper1'}" style="text-decoration:none;color:black">
                  <i class="bi bi-cart fs-1 mb-2"></i>
                </router-link>
              </div>
            </div>
           
        </div>
        <div class="collapse mt-2 mb-2" id="myCollapse2">
              <div class="input-group d-flex justify-content-center">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control " placeholder="Search"/>
                </div>
                <button type="button" class="btn btn-primary" >
                    <i class="bi bi-search" data-bs-toggle="collapse" data-bs-target="#myCollapse2"></i>
                </button>
            </div>           
        </div>
    </div>
</template>
<script>
export default {
  name: 'TopNav',
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  }
}
</script>
<style lang="">
    
</style>