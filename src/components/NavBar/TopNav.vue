<template lang="">
    <div>
    <div class="container">
      <div class="row">
       <router-link to="/"></router-link>
        <div class="col-8">
          <img alt="Vue logo" src="../../assets/logo.png" class="ms-2 gx-5" style="width:100%;" />
        </div>
          <div class="col-4 d-flex align-items-center">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart ms-2 me-4" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg> -->
            <div class="col-6 d-flex justify-content-center">
              <i class="bi bi-heart-fill fs-1"></i>
            </div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-fill ms-4 mb-2" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg> -->
          <div class="col-6 d-flex justify-content-center">
            <router-link to="/TopCart" class="text-dark">
              <i class="bi bi-bag-fill fs-1 mb-2"></i>
            </router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>