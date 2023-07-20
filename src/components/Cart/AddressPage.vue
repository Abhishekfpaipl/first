<template>
    <div class="p-3 px-4 border bg-light">
        <h3 class="text-center mt-3">Select Shipping Address</h3>
        <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdropBilling"
            aria-labelledby="staticBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel">Billing Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div class="offcanvas-body">
                <div class="d-flex mb-4">
                    <i class="bi bi-briefcase-fill fs-4"></i>
                    <h5 class="m-0 mt-1 ms-1">Business Details</h5>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="firmnameInput" v-model="newAddress.firmname"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="firmnameInput">Business Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="gstnumberInput" v-model="newAddress.gstnumber"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="gstnumberInput">GST Number</label>
                </div>

                <div class="d-flex mb-4">
                    <i class="bi bi-telephone-fill fs-4"></i>
                    <h5 class="m-0 mt-1 ms-1">Contact Details</h5>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="nameInput" v-model="newAddress.name"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="nameInput">Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="phoneInput" v-model="newAddress.phone"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="phoneInput">Phone Number</label>
                </div>

                <div class="d-flex mt-4 mb-4">
                    <i class="bi bi-geo-alt-fill fs-4"></i>
                    <h5 class="m-0 mt-1 ms-1">Registered Address Details</h5>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="houseInput" v-model="newAddress.house"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="houseInput">House no./Building Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="roadInput" v-model="newAddress.road"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="roadInput">Road Name/Area/Colony</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="pincodeInput" v-model="newAddress.zipcode"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="pincodeInput">Pincode</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="cityInput" v-model="newAddress.city"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="cityInput">City</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="stateInput" v-model="newAddress.state"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="stateInput">State</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="locationInput" v-model="newAddress.nearby"
                        style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;" />
                    <label for="locationInput">Nearby Location (optional)</label>
                </div>

                <button class="btn btn-success" data-bs-dismiss="offcanvas" @click="saveAddress">
                    Save Address & Continue
                </button>
            </div>
        </div>
        <div v-for="(address, index) in savedAddresses" :key="index" class="my-3 d-flex justify-content-between">
            <div class="border-bottom card rounded-0 p-2 w-100" :class="{ 'top-brand-secondary': isSelected(index) }">
                <div class="d-flex justify-content-between" @click="selectAddress(index)">
                    <label :for="'BillAddress' + index" class="pe-4">{{ address }}</label>
                    <input name="BillAddress" :id="'BillAddress' + index" type="radio" />
                </div>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <p class="m-0 mt-2 fw-bold" @click="deleteAddress(index)" style="color: #e9848b;">
                        Delete
                    </p>
                    <p class="m-0 mt-2 fw-bold" data-bs-toggle="offcanvas" data-bs-target="#staticBackdropBilling"
                        aria-controls="staticBackdropBilling" @click="editAddress(index)" style="color: #e9848b;">
                        Edit
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddAddress from '@/mixins/AddAddress';
export default {
    name: "AddressPage",
    mixins: [AddAddress],
    data() {
        return {
            selectedAddressIndex: null,
            selectedMethod: 'Local Transport'
        };
    },
    methods: {
        selectAddress(index) {
            this.selectedAddressIndex = index;
        },
        isSelected(index) {
            return this.selectedAddressIndex === index;
        },
        showLocal() {
            this.selectedMethod = 'Local Transport';
        },
        showRocket() {
            this.selectedMethod = 'Ship Rocket';
        },

    }
}
</script>
