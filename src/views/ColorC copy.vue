<template lang="">
    <div>
        <div class="list-group">
        <div class="list-group-item" v-for="(color, index) in colors" :key="index">
            <div class="d-flex">
                <span class="me-2">{{color.id}}</span>
                <span class="me-2">{{color.price}}</span>
                <span class="me-2">{{color.quant}}</span>
            </div>
        </div>
    </div>
    <div>
        <input type="text" class="form-control" v-model="form.id">
        <input type="text" class="form-control" v-model="form.price">
        <input type="text" class="form-control" v-model="form.quant">
        <button @click="changecolor()">Add</button>
    </div>
    <hr>
    <p>{{test}}</p>
    </div>
   
</template>
<script>
export default {
    name: 'ColorC',
    data(){
        return{
            form: {},
            colors: {},
        }
    },
    mounted() {
        this.colors = this.$store.getters.getColors;
        let data=this.$store.getters.getColors;
            console.log("iam mounted" + Object.keys(data).length)
            return data;
    },
    computed:{
        test(){
            let data=this.$store.getters.getColors;
            console.log("iam coumputed = " + Object.keys(data).length)
            return data;
        }
    },
    methods:{
        changecolor(){
            this.$store.dispatch('updatecolor',this.form)
            this.form= {}
        }
    }
    
}
</script>
