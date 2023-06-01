<template>
    <div class="container-fluid d-flex flex-md-row justify-content-center mt-5 flex-column">
        <div class="mb-3 border border-1 p-2">
            <div class="d-flex justify-content-between">
                <p class="m-0 text-uppercase fw-bold">Select your address</p>
                <p class="mt-2 text-uppercase text-end fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight" style="color:hotpink;">+ add new address</p>
            </div>

            <!-- Add Address canvas -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">ADD ADDRESS</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr />

                <div class="offcanvas-body">
                    <div class="d-flex mb-4">
                        <i class="bi bi-telephone-fill fs-4"></i>
                        <h5 class="m-0 ms-1 mt-2">Contact Details</h5>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput"   v-model="newAddress.name"
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

                    <button class="btn btn-success" data-bs-dismiss="offcanvas"  @click="saveAddress">Save Address & Continue</button>

                </div>
            </div>

            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="">
                    <div class="d-flex justify-content-between">
                        <p class="card-title m-0 fw-bold">
                            <input type="radio"><span class="ms-2">User</span>
                        </p>
                        <p class="m-0 fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightEdit"
                            aria-controls="offcanvasRightEdit" style="color:hotpink;">Edit</p>

                        <!-- Edit Address canvas -->
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightEdit"
                            aria-labelledby="offcanvasRightEditLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightEditLabel">EDIT ADDRESS</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <hr />

                            <div class="offcanvas-body">
                                <from>
                                    <div class="d-flex mb-4">
                                        <i class="bi bi-telephone-fill fs-4"></i>
                                        <h5 class="m-0 ms-1 mt-2">Contact Details</h5>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput"
                                           value="user" style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingNumber" placeholder="Number"
                                            value="(907) 789-7623"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingNumber">Phone Number</label>
                                    </div>

                                    <div class="d-flex mt-4 mb-4">
                                        <i class="bi bi-geo-alt-fill fs-4"></i>
                                        <h5 class="m-0 ms-1 mt-2">Address</h5>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput"
                                            placeholder="name@example.com" value="9153 Jerry Dr, Juneau, Alaska 99801"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingInput">House no./Building Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingRoad" placeholder="Road"
                                            value=" 9153 Jerry Dr"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingRoad">Road Name/Area/Colony</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="number" class="form-control" id="floatingPincode" placeholder="Pincode"
                                            value="99801"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingPincode">Pincode</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingCity" placeholder="City"
                                            value="Juneau"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingCity">City</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingState" placeholder="State"
                                            value="Alaska (AK)"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingState">State</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingLocation" placeholder="Location"
                                            style="border: none;border-bottom: 1px solid;border-radius: 0px;box-shadow: none;">
                                        <label for="floatingLocation">Nearby Location (optional)</label>
                                    </div>

                                    <button class="btn btn-success">Save Address & Continue</button>
                                </from>
                            </div>
                        </div>

                    </div>
                    <p class=" pe-5" style="max-width: 500px;">Phone number: (907) 789-7623
                        Street: 9153 Jerry Dr
                        City: Juneau
                        State: Alaska (AK)
                        Zipcode: 99801
                        Country: USA
                        Address: 9153 Jerry Dr, Juneau, Alaska 99801, USA</p>
                    <div class="card-body">
                        <p v-for="address in savedAddresses" :key="address"><input type="radio">{{ address }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" ms-3 mb-3 md-ms-0" style=" border-left: 2px solid;">
            <div class=" px-3 card-body">
                <h5 class="card-title">Price Details</h5>
                <div class="d-flex justify-content-between">
                    <p class="card-subtitle text-body-secondary">Total Product Price</p>
                    <p class="m-0">₹{{ price }}</p>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <p class="card-subtitle text-success ">Total Discounts</p>
                    <p class="m-0 text-success">-₹{{ discount }}</p>
                </div>
                <hr class="m-0" />
                <div class="d-flex justify-content-between mt-2">
                    <p class="card-text">Order Total</p>
                    <p class="card-text">₹{{ price - discount }}</p>
                </div>
                <div class="p-2" style="background-color: #D3F4EA;">
                    <p class="m-0 text-center">YAY! Your total cart discount is ₹{{ discount }}</p>
                </div>
                <div class="d-flex flex-column">
                    <small class="text-info">Clicking on Continue will not deduct any money</small>

                    <!-- <button class="btn btn-success mt-4">Continue</button> -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddressPage",
    data() {
        return {
            price: 697,
            discount: 100,
            newAddress: {
                name: '',
                phone:'',
                house:'',
                road:'',
                zipcode: '',
                city: '',
                state: '',
                nearby:'',
            },
            savedAddresses: [],
        };
    },
    components: {

    },
    methods: {
        saveAddress() {
            const addressString = `${this.newAddress.name}, ${this.newAddress.phone}, ${this.newAddress.house}, ${this.newAddress.road}, ${this.newAddress.city}, ${this.newAddress.state}, ${this.newAddress.zipcode}, ${this.newAddress.nearby}`;
            this.savedAddresses.push(addressString);
            this.newAddress = {
                name: '',
                phone:'',
                house:'',
                road:'',
                zipcode: '',
                city: '',
                state: '',
                nearby:'',
            };
        },
    },
}
</script>

<style lang="scss" scoped></style>