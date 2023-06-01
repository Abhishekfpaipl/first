<template>
    <div class="d-flex justify-content-start w-100">
        <div class="flex-fill justify-content-start" v-for="(count, index) in counts" :key="index">
            <div v-if="index <= stage" class="d-flex align-items-center justify-content-end">
                <div v-if="count != 1" class="stepper w-100 bg-success" style="height: 2px; margin-top: 0.25rem"></div>
                <i class="bi bi-check-circle-fill text-success"></i>
                <!-- <div class="" style="height: 20px; width: 20px;">1</div> -->
            </div>
            <div v-else class="d-flex align-items-center ">
                <div class="flex-fill bg-secondary" style="height: 2px; margin-top: 0.25rem"></div>
                <i class="bi bi-check-circle"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'StepperCart',
    props: {
        stage: String
    },
    data() {
        return {
            counts: 4
        }
    }

}
</script>

<style scoped>
.stepper:nth-child(0){
    display: none !important;
}
</style>
