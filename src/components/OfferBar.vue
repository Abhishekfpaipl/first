<template>
  <div
    class="d-flex justify-content-between mt-0 align-items-center"
    style="border: 1; border: 1px solid; border-style: dashed"
  >
      <p class="ms-2 mb-0 fw-bold" style="color: green; font-size: 14px">
        OFFER:Pick Any 3 Bras for 1099
      </p>
    <div class="mt-2" style="width: 50%;">
      <div class="progress" style="height: 2px;">
        <div
          class="progress-bar w-75"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >  
        </div>
      </div>0 out of 3 selected
    </div>
    <a href="" style="text-decoration: none; color: hotpink">
      <p class="m-0">View More</p></a
    >
  </div>
</template>
<script>
export default {
  name: "OfferBar",
};
</script>
