<template lang="">
    <div>
        <div class="list-group">
        <div class="list-group-item" v-for="(color, index) in colors" :key="index">
            <div class="d-flex" @click="editcolor(color)" >
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
        <button @click="updatecolor()">Add</button>
    </div>
    </div>
   
</template>
<script>
export default {
    name: 'ColorC',
    data(){
        return{
            form: {}
        }
    },
    computed:{
        colors(){
            return this.$store.getters.getColors;
        }
    },
    methods:{
        updatecolor(){
            this.$store.dispatch('updatecolor',this.form)
            this.form= {}
        },
        editcolor(color){
            this.form= color
        }
    }
    
}
</script>
