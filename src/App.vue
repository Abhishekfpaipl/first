
<template>
  <top-nav class="position-fixed bg-white" style="top:0px; z-index:10"></top-nav>
  <div class="main-container" style="margin-top:80px">
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>
<script setup>
import BottomNav from "./components/NavBar/BottomNav.vue";
import TopNav from "./components/NavBar/TopNav.vue";
</script>
<style lang="scss">
.main-container{
  width: 100%;
  height: 100vh;
}
</style>
