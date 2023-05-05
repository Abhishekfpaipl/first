<template>
    <div class="d-flex flex-column justify-content-around align-items-end">
        <div v-for="(size, index) in sizes" :key="index">
            <div class="bg-light shadow border fw-bold rounded m-2 px-1 d-flex align-items-center justify-content-center " 
                style="width:fit-content; height: 30px;">
                {{ size.name }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"CardSize",
    props:['sizes']
}
</script>
<style lang="">
    
</style>