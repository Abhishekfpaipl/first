<template lang="">
    <div class="container-fluid tpnav">
        <div class="row">
          <!-- <router-link to="/"></router-link> -->
            <div class="col-8">
              <router-link to="/" class="text-decoration-none text-dark">
                <img alt="Vue logo" src="../../assets/logo.png" class="ms-2 gx-5" style="width:100%;" />
              </router-link>
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="col-6 d-flex justify-content-center">
              <router-link to="/SavedProduct" :class="{'text-danger' : currentRoute === 'SavedProduct'}" style="text-decoration:none;color:black">
                <i class="bi bi-bag-heart fs-1"></i>
              </router-link>
              </div>
              <div class="col-6 d-flex justify-content-center">
                <router-link to="/TopCart" :class="{'text-danger' : currentRoute === 'TopCart'}" style="text-decoration:none;color:black">
                  <i class="bi bi-cart fs-1 mb-2"></i>
                </router-link>
              </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name:'TopNav',
    computed:{
      currentRoute(){
        return this.$route.name;
      }
    }
}
</script>
<style lang="">
    
</style>