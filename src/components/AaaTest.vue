<template lang="">
    <div>
        <a :id="'label' + product.id" class="list-group-item list-group-item-action" :href="'#product' + product.id"> <img
                        src="https://images.meesho.com/images/marketing/1591969621244_64.webp" alt=""
                        style="height: 24px; width: 24px;">
                    <p class="m-0">{{product.name}}</p>
                </a>
    </div>
</template>
<script>
export default {
   name:'AaaTest',
    props: ['product']
}
</script>
<style lang="">
    
</style>