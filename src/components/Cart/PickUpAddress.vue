<template>
    <div style="padding-bottom: 80px;">
        <div class="mt-3 px-3 d-flex flex-column">
            <b class="text-center my-2">Select Pickup Address</b>
            <div v-for="(address, index) in savedAddresses" :key="index" class="mb-3 mt-2 d-flex justify-content-between">
                <div class="border-bottom card rounded-0 p-2 w-100" >
                    <div class="d-flex justify-content-between">
                        <label :for="'PickUpAddress' + index" class="pe-5 ">{{ address }}</label>
                        <input name="PickUpAddress" :id="'PickUpAddress' + index" type="radio">
                    </div>
                </div>
            </div>
            <div class="d-flex w-100 my-2">
                <div class="mb-2 mx-2 w-50">
                    <label for="date" class="form-label ms-1">Select Date</label>
                    <input type="date" class="form-control" id="date">
                </div>
                <div class="mb-2  mx-2 w-50">
                    <label for="time" class="form-label ms-1">Select Time</label>
                    <input type="time" class="form-control" id="time">
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
            "Metro Fashion Okhla Factory, 9999437620, B-74 Pocket X, Okhla Phase II Okhla Industrial Estate, 110020, New Delhi, Delhi,  Harkesh Nagar Metro Station",
            "Metro Fashion Karolbagh Shop, 9999437620, B-94 Pocket X, Okhla Phase II Okhla Industrial Estate, 110020, New Delhi, Delhi,  Harkesh Nagar Metro Station",

            ],
        }
    }
}
</script>