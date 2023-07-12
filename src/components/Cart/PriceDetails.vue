<template>
    <div>
        <div class="container my-2">
            <p style="font-weight:600">Price Details</p>

            <div class="d-flex justify-content-between  py-2">
                <p class="m-0  text-decoration-underline" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottomPrice"
                    aria-controls="offcanvasBottomPrice">Total Product Price</p>
                <p class="m-0">+ ₹1232</p>
            </div>
            <div class="d-flex justify-content-between border-bottom pb-2">
                <p class="m-0 text-success text-decoration-underline" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottomDiscount" aria-controls="offcanvasBottomDiscount">Total Discounts</p>
                <p class="m-0 text-success">- ₹122</p>
            </div>
            <div class="d-flex justify-content-between pt-2 ">
                <p class="m-0 ">Order Total</p>
                <p class="m-0 ">₹1105</p>
            </div>
            <div class="p-2" style="background-color: #D3F4EA;">
                <p class="m-0 text-center">YAY! Your total cart discount is ₹127</p>
            </div>
        </div>
        <!-- Total Price -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomPrice"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Product Price</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Product Price</p>
                    <p class="m-0">1217</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Easy Returns</p>
                    <p class="m-0 ">15</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">+ ₹1232</p>
                </div>
            </div>
        </div>

        <!-- Total Discount -->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottomDiscount"
            aria-labelledby="offcanvasBottomLabel" style=" height: auto; max-height: calc(100vh - 200px);">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Total Discounts</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-between">
                    <p class="m-0">Supplier Promotional Discount</p>
                    <p class="m-0">-48</p>
                </div>
                <div class="d-flex justify-content-between pb-2 border-bottom">
                    <p class="m-0 ">Special Product Discount</p>
                    <p class="m-0 ">-78</p>
                </div>
                <div class="d-flex justify-content-between pt-2 " style="font-weight: 600;">
                    <p class="m-0">Total</p>
                    <p class="m-0">- ₹126</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>