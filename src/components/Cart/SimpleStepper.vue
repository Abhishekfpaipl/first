<template>
    <div>
        <div class="d-flex justify-content-center">
            <progress :value="progress" max="100" class="bg-success" style="width: 80%;">25</progress>
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
  

