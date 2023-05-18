<template>
    <div>
      <i v-for="(icon, index) in icons" :key="index" :class="['bi bi-emoji-smile fs-5', { 'active': icon.isActive }]" @click="toggleIconColor(icon)"></i>
      <span :style="textStyle">Example Text</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        icons: [
          { isActive: false },
          { isActive: false },
          { isActive: false }
        ],
        textStyle: {}
      };
    },
    methods: {
      toggleIconColor(clickedIcon) {
        clickedIcon.isActive = !clickedIcon.isActive;
        this.updateTextStyle();
      },
      updateTextStyle() {
        const activeIcons = this.icons.filter(icon => icon.isActive);
        if (activeIcons.length > 0) {
          this.textStyle = {
            fontWeight: 'bold',
            color: activeIcons[0].color
          };
        } else {
          this.textStyle = {};
        }
      }
    }
  };
  </script>
  
  <style>
  .icon {
    /* Define your default icon style */
    color: gray;
  }
  
  .icon.active {
    /* Define your active icon style */
    font-weight: bold;
  }
  
  .icon.active.red {
    /* Define your active icon color */
    color: red;
  }
  
  .icon.active.blue {
    /* Define your active icon color */
    color: blue;
  }
  
  .icon.active.green {
    /* Define your active icon color */
    color: green;
  }
  </style>
  