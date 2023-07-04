<template>
    <div>
        <div id="default-settings">

            <!-- <label class="pref-button"><input type="checkbox" v-model="defaultChecked"><span>Default</span></label> -->

            <label class="pref-button"><input type="checkbox" v-model="selectAll"><span>Select All</span></label>

        </div>    
                
        <label :for="select.id" v-for="select in selectsArray" v-bind:key="select.id">
            <input :value="select.id" v-model="selected" :id="select.id" 
            :sector="select.id" :class="select.class" :default="select.default" type="checkbox">{{ select.name }}
        </label>

        <!-- <span>Selected Ids: {{ selected }}</span> -->
    </div>
</template>
<script>
export default {
    name:"T1Select",
    data() {
        return {
        defaultSelects: [],
        selectsArray: [ 

            {id: 'automotive', name: 'Automotive', class: 'industry', },

            {id: 'beauty', name: 'Beauty', class: 'industry', },

            {id: 'branding', name: 'Branding', class: 'industry', },

            {id: 'btob', name: 'B to B', class: 'industry', }
        ],
        selected: [],
        }
    },
    computed: {
      selectAll: {
        get () {
          return this.selected.length === this.selectsArray.length
        },
        set (value) {
          this.selected = []

          if (value) {
            this.selectsArray.forEach((select) => {
              this.selected.push(select.id)
            })
          }
        }
      }, // END selectAll
    }
}
</script>
<style lang="">
    
</style>