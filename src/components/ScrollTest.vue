<template>
    <div class="d-flex gap-4">
      <div class="tab-navigation">
        <div :id="'tab' + index" v-for="(tab, index) in tabs" :key="index" 
             :class="{'active': activeTab === index}" 
             @click="setActiveTab(index)">
          {{ tab.name }}
        </div>
      </div>
      <div class="tab-content">
        <div :id="'tab-content' + index" v-for="(tab, index) in tabs" :key="index" 
            
             :data-tab-index="index"
             @hook:updated="onTabContentUpdated">
             <div  v-if="activeTab === index" >
                {{ tab.content }}
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: [
          { name: 'Tab 1', content: 'This is the content of tab 1' },
          { name: 'Tab 2', content: 'This is the content of tab 2' },
          { name: 'Tab 3', content: 'This is the content of tab 3' }
        ],
        activeTab: 0
      }
    },
    methods: {
      setActiveTab(index) {
        this.activeTab = index
      },
      onTabContentUpdated() {
        this.$nextTick(() => {
          const visibleTabContent = this.$refs.tabContent.find(
            element => element.style.display !== 'none'
          )
          if (visibleTabContent && visibleTabContent.dataset.tabIndex === '2') {
            this.doSomething()
          }
        })
      },
      doSomething() {
        console.log('Method called when tab 3 content is visible')
      }
    }
  }
  </script>
  