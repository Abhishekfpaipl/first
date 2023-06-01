<template>
    <div class="d-flex flex-column justify-content-around">
        <div class="" v-for="(color, index) in colors" :key="index">
            <div class="shadow border rounded  align-items-center justify-content-center d-flex" 
                style="width:20px; height: 20px; padding:0.5rem; margin:0.08rem;" :style="'background-color:' + color.name">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CardColors",
    props:['colors']
}
</script>