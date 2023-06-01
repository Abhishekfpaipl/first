<template>
  <div class="mb-4">
  <router-link to="/" style="color:hotpink;text-decoration: none;">
    <h1 class="px-2 text-center">DeshiGirl</h1>  
  </router-link>
  </div>
  <div>
    <div class="d-flex justify-content-center">
      <progress :value="progress" max="100" class="" style="width: 80%;" >25</progress>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
    name: "SimpleStepper",
    props: ['step'],
    computed: {
        progress: function () {
            return Math.round(100 / 4) * this.step;
        }
    }
};
</script>
