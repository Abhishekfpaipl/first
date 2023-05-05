<template lang="">
    <div :id="'product' + product.id" class="h-100">
                <h4  class="ps-2 text-success fw-bold">Women Western</h4>
                <div class="container">
                    <h4>{{product.value}}</h4>
                    <div class="row row-cols-3">
                        <div class="col text-center">
                            <img src="https://images.meesho.com/images/marketing/1628494884141_128.webp" alt=""
                                style="height: 72px; width: 72px;">
                            <p class="text-center" style="font-size:10px">All Topwear</p>
                        </div>
                        <div class="col text-center">
                            <img src="https://images.meesho.com/images/marketing/1628494936705_128.webp" alt=""
                                style="height: 72px; width: 72px;">
                            <p class="text-center" style="font-size:10px">Tops</p>
                        </div>
                        <div class="col text-center">
                            <img src="https://images.meesho.com/images/marketing/1628496536829_128.webp" alt=""
                                style="height: 72px; width: 72px;">
                            <p class="text-center" style="font-size:10px">Dresses</p>
                        </div>
                        <div class="col text-center">
                            <img src="https://images.meesho.com/images/marketing/1628496397000_128.webp" alt=""
                                style="height: 72px; width: 72px;">
                            <p class="text-center" style="font-size:10px">T-shirts</p>
                        </div>
                        <div class="col text-center">
                            <img src="https://images.meesho.com/images/marketing/1627307853034_128.webp" alt=""
                                style="height: 72px; width: 72px;">
                            <p class="text-center" style="font-size:10px">Jumpsuits</p>
                        </div>
                    </div>
                </div> 
    </div>
</template>
<script>
export default {
    name:'HhhTest',
    props:['product']
}
</script>
<style lang="">
    
</style>