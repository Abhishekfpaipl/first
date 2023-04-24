
<template>
  <div class="main-container">
    <top-nav></top-nav>
    <router-view />
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
