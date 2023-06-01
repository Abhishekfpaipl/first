<template>
    <div class="">
        <div class="container-fluid d-flex flex-md-row justify-content-center mt-5 flex-column">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 text-center">
                        <img src="https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp"
                            class="img-fluid rounded-start"
                            style="height: 200px;width: 200px;object-fit: contain;margin-top: 10px;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">White Colorblocked High Ankle Shoes For Men</h5>
                            <p class="card-text">Size: IND-9 Qty: 1</p>
                            <p class="card-text">₹697</p>
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Edit</button>
                                <!-- <button class="btn btn-danger card-text" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Remove</button> -->
                                <button type="button" class="btn btn-danger card-text" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Remove
                                </button>
                            </div>

                            <!-- Remove modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Remove product from cart
                                            </h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to remove White Colorblocked High Ankle Shoes For Men
                                            (Size:
                                            IND-9)
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-primary"
                                                data-bs-dismiss="modal">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-white">
                            <p class="m-0">Sold By: DeshiGirl</p>
                            <p class="m-0">Free Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" ms-2 mb-3">
                <div class="card-body">
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
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Edit Item</h5>
                <hr />
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex ">
                    <div class="">
                        <img src="https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp"
                            class="img-thumbnail"
                            style="height: 80px; width: 80px;object-fit: cover; object-position: top;">
                    </div>
                    <div class="card-body ms-2">
                        <p class="card-title">White Colorblocked High Ankle Shoes For Men</p>
                        <p class="card-text">₹697</p>
                    </div>
                </div>
                <div class="form-floating mt-4">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open the size option</option>
                        <option value="1">XS</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="2">L</option>
                        <option value="2">XL</option>
                        <option value="3">Free</option>
                    </select>
                    <label for="floatingSelect">Size</label>
                </div>
                <div class="mt-4">
                    <p>Quantity</p>
                    <div class="quantity-toggle d-flex align-items-center justify-content-start">
                        <button @click="decrement" class="btn btn-light btn-sm border border-1">
                            <i class="bi bi-dash"></i>
                        </button>
                        <input type="number" class="fw-bold form-control-sm px-2 text-center" v-model="quantity"
                            style="width: 20%;" />
                        <button @click="increment" class="btn btn-light btn-sm border border-1">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                    <h4>Total Price</h4>
                    <h4>₹{{ quantity * 697 }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartPage",
    data() {
        return {
            quantity: 0,
            price: 697,
            discount: 100,
            currentStep: 0,
            steps: ['Step 1', 'Step 2', 'Step 3']
        };
    },
    components: {
       
    },
    methods: {
        increment() {
            this.quantity++;
        },
        decrement() {
            this.quantity--;
        },
        nextStep() {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
            }
        },
        previousStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        isCurrentStep(index) {
            return this.currentStep === index;
        }
    },
    
}
</script>

<style lang="scss" scoped></style>