<template>
    <div>
      <ul class="nav nav-tabs" role="tablist" ref="tabs">
        <li class="nav-item" role="presentation" v-for="(tab, index) in tabs" :key="index">
          <a class="nav-link" :class="{ active: activeTab === index }" :href="tab.href" :data-bs-target="tab.target" @click="activeTab = index">{{ tab.title }}</a>
        </li>
      </ul>
  
      <div class="tab-content">
        <div class="tab-pane" v-for="(tab, index) in tabs" :key="index" :id="tab.id">
          <slot name="tab-content" :tab="tab"></slot>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    props: [
        
    ],
    data() {
      return {
        activeTab: 0,
        triggerElement: null,
        triggerPosition: 0,
      };
    },
    mounted() {
      this.triggerElement = this.$refs.tabs;
      this.triggerPosition = this.triggerElement.offsetTop;
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (window.pageYOffset >= this.triggerPosition) {
          var activeTab = this.$refs.tabs.querySelector('.nav-link.active');
          if (activeTab) {
            var targetTab = activeTab.getAttribute('data-bs-target');
            if (targetTab) {
              var targetElement = this.$refs.tabs.querySelector(targetTab);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        }
      },
    },
  };
  </script>
  