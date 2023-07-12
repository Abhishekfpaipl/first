<template lang="">
    <div :id="category.slug">
        <div class="container d-flex justify-content-between">
            <h5  class="ps-2 text-success fw-bold">
                {{category.name}}
            </h5>
            <router-link :to="'/catalogs/' + category.id" class="text-decoration-none text-dark">
                <p>View All <i class="bi bi-arrow-right"></i></p>
            </router-link>
        </div>
        <div class="container">
            <div v-for="(item, index) in category.child" :key="index" >
                <!-- <p>{{index}}</p> -->
                <div class="row">
                    <div class="col-6 text-center" v-for="(a, key) in item" :key="key">
                        <router-link :to="a.route" class="text-decoration-none text-dark">
                            <img :src="a.img" alt="" style="height:100px; width:100px;object-fit:contain;">
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
    name:'SubCategory',
    props:['category'],
  
}
</script>
<style lang="">
    
</style>