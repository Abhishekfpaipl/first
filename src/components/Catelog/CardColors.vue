<template>
    <div class="d-flex flex-column justify-content-around">
        <div class="" v-for="(color, index) in colors" :key="index">
            <div class="shadow border rounded m-2 px-1 align-items-center justify-content-center d-flex" 
                style="width:25px; height: 30px;" :style="'background-color:' + color.name">
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