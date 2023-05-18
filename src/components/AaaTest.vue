<template lang="">
    <div>
        <a  class="list-group-item list-group-item-action py-2 px-0" :href="'#category-tab-' + category.id">
            <img :src="category.img" alt="" style="height: 24px; width: 24px;">
            <p class="m-0">{{category.name}}</p>
        </a>
    </div>
</template>
<script>
export default {
   name:'AaaTest',
    props: ['category']
}
</script>
<style lang="">
    
</style>