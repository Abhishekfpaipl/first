<template>
  <div class="">

    <div class="mt-5 p-3 border bg-light">
      <h3 class="text-center mt-3">Select Pickup Address</h3>
      <div v-for="(address, index) in savedAddresses" :key="index" class="my-3 d-flex justify-content-center">
        <div class="border-bottom card rounded-0 p-2 w-100" :class="{ 'top-brand-secondary': isSelected(index) }">
          <div class="d-flex justify-content-between" @click="selectAddress(index)">
            <label :for="'PickUpAddress' + index" class="pe-4">{{ address }}</label>
            <input name="PickUpAddress" :id="'PickUpAddress' + index" type="radio">
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      savedAddresses: [
        "Metro Fashion Karol Bagh Shop, 9999437620, E-16/931/32 Shop No.9, Hemant Complex Main Tank Road, 110005, Karol Bagh, Delhi,  Karol Bagh Metro Station",
        "Metro Fashion Okhla Factory, 9999437620, B-74 Pocket X, Okhla Phase II Okhla Industrial Estate, 110020, New Delhi, Delhi,  Harkesh Nagar Metro Station",

      ],
      selectedMethod: 'Self',
      selectedAddressIndex: null,
    };
  },
  methods: {
    selectAddress(index) {
      this.selectedAddressIndex = index;
    },
    isSelected(index) {
      return this.selectedAddressIndex === index;
    },
    showSelf() {
      this.selectedMethod = 'Self';
    },
    showTransport() {
      this.selectedMethod = 'Transport';
    },
  },
};
</script>

