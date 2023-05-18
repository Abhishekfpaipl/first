<template lang="">
    <div :id="'category-tab-' + category.id">
        <h4  class="ps-2 text-success fw-bold">
            {{category.name}}
        </h4>
        <div class="container">
            <div v-for="(item, index) in category.child" :key="index" >
                <p>{{index}}</p>
                <div class="row">
                    <div class="col-6 text-center" v-for="(a, key) in item" :key="key">
                        <router-link :to="a.route" class="text-decoration-none text-dark">
                            <img :src="a.img" alt="" style="height: 72px; width: 72px;">
                            <p class="" style="font-size:10px">{{a.name}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HhhTest',
    props:['category']
}
</script>
<style lang="">
    
</style>