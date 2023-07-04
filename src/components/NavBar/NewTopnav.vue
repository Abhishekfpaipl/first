<template>
  <div class="container d-flex justify-content-between align-items-center" ref="topnav">
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-arrow-left fs-4"></i>
      <i class="bi bi-search fs-4"></i>
    </div> 
    <p class="text-center m-0 fs-4" :style="`background-color: rgba(255, 255, 255, ${backgroundOpacity});`">
      DeshiGirl
    </p>
    <div class="d-flex align-items-center gap-2">
      <i class="bi bi-heart fs-4"></i>
      <i class="bi bi-bag fs-4"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTopnav',
  data() {
    return {
      prevScrollPos: 0,
      backgroundOpacity: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 5 && scrollPercentage <= 10) {
        this.backgroundOpacity = (scrollPercentage - 5) * 0.1;
      } else if (scrollPercentage > 10) {
        this.backgroundOpacity = 1;
      } else {
        this.backgroundOpacity = 0;
      }
    }
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.container p {
  transition: background-color 0.3s ease-in-out;
}
</style>
