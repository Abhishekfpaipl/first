<template>
    <div class="container-fluid d-flex flex-md-row justify-content-center mt-2 flex-column">
        <button class="btn top-brand" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">+
            Add New Address
        </button>
        <b class="text-center mt-3">Select Delivery Address</b>
        <div class="mb-3 p-2 pt-4">
            <div class="d-flex justify-content-between">
            </div>
            <!-- Add Address canvas -->
            <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">ADDRESS</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr />

                <div class="offcanvas-body">
                    <div class="d-flex mb-4">
                        <i class="bi bi-telephone-fill fs-4"></i>
                        <h5 class="m-0 ms-1 mt-2">Contact Details</h5>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" v-model="newAddress.name"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating">
                        <input type="number" class="form-control" id="floatingPassword" v-model="newAddress.phone"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingPassword">Phone Number</label>
                    </div>

                    <div class="d-flex mt-4 mb-4">
                        <i class="bi bi-geo-alt-fill fs-4"></i>
                        <h5 class="m-0 ms-1 mt-2">Address</h5>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" v-model="newAddress.house"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingInput">House no./Building Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingRoad" v-model="newAddress.road"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingRoad">Road Name/Area/Colony</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="floatingPincode" v-model="newAddress.zipcode"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingPincode">Pincode</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingCity" v-model="newAddress.city"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingCity">City</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingState" v-model="newAddress.state"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingState">State</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingLocation" v-model="newAddress.nearby"
                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                        <label for="floatingLocation">Nearby Location (optional)</label>
                    </div>

                    <button class="btn btn-success" data-bs-dismiss="offcanvas" @click="saveAddress">Save Address &
                        Continue</button>

                </div>
            </div>

            <div v-for="(address, index) in savedAddresses" :key="index" class="mb-3 d-flex justify-content-between">
                <div class="border-bottom card rounded-0 p-2 w-100"
                    style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                    <div class="d-flex justify-content-between">
                        <label :for="'DeliveryAddress' + index" class="pe-5 ">{{ address }}</label>
                        <input name="DeliveryAddress" :id="'DeliveryAddress' + index" type="radio">
                    </div>
                    <div class="d-flex align-items-center justify-content-end flex-wrap">
                        <p class="m-0 mt-2 fw-bold" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
                            aria-controls="staticBackdrop" @click="editAddress(index)" style="color:#E35D6A;">Edit</p>
                    </div>
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
            price: 697,
            discount: 100,
            newAddress: {
                name: "",
                phone: "",
                house: "",
                road: "",
                zipcode: "",
                city: "",
                state: "",
                nearby: "",
            },
            savedAddresses: [
                "Metro Fashion Okhla Factory, 9999437620, B-74 Pocket X, Okhla Phase II Okhla Industrial Estate, 110020, New Delhi, Delhi,  Harkesh Nagar Metro Station",
            ],
            editingIndex: -1,
        };
    },

}
</script>
