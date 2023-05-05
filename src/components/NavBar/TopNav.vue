<template lang="">
    <div class="container">
        <div class="row mb-2">
          <!-- <router-link to="/"></router-link> -->
            <div class="col-8">
              <img alt="Vue logo" src="../../assets/logo.png" class="ms-2 gx-5" style="width:100%;" />
            </div>
            <div class="col-4 d-flex align-items-center">
              <div class="col-6 d-flex justify-content-center">
              <router-link to="/SavedProduct" class="text-decoration-none text-dark">
                <i class="bi bi-heart-fill fs-1"></i>
              </router-link>
              </div>
              <div class="col-6 d-flex justify-content-center">
                <router-link to="/TopCart" class="text-dark">
                  <i class="bi bi-cart fs-1 mb-2"></i>
                </router-link>
              </div>
            </div>
            <hr/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>