<template>
    <div>
        <div id="default-settings">

            <label class="pref-button"><input type="checkbox" v-model="defaultChecked"><span>Default</span></label>

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

            {id: 'automotive', name: 'Automotive', class: 'industry', default: false},

            {id: 'beauty', name: 'Beauty', class: 'industry', default: true},

            {id: 'branding', name: 'Branding', class: 'industry', default: true},

            {id: 'btob', name: 'B to B', class: 'industry', default: false}
        ],
        selected: [],
        }
    },
    computed: {
    //   defaultChecked: {
    //     get () {
    //       let defaults = this.selectsArray.filter(item => item.default).map(item => item.id)
    //       const hasAllItems = (baseArr, haystack) => haystack.every(item => baseArr.includes(item))
    //       const hasSameItems = (baseArr, haystack) => hasAllItems(baseArr, haystack) && hasAllItems(haystack, baseArr)
    //       return hasSameItems(this.selected, defaults)
    //     },
    //     set (value) {
    //       this.selected = []

    //       if (value) {
    //         this.selectsArray.forEach((select) => {
    //           if (select.default) {
    //             this.selected.push(select.id)
    //           }
    //         });
    //       }
    //     }
    //   }, // END defaultChecked
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