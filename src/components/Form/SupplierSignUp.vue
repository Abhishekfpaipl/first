<template>
    <div class="container d-flex justify-content-between align-items-center bg-light py-3">
        <div class="d-flex gap-2">
            <i class="bi bi-chevron-left" @click="goback()"></i>
            <p class="m-0">Complete Account Details</p>
        </div>
        <p class="m-0 text-info">Help?</p>
    </div>

    <ul class="nav nav-tabs flex-nowrap  overflow-x-scroll  ws-nowarp" style="font-size: 15px;" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">

            <div class="nav-link active d-flex flex-column text-center ws-nowarp" id="home-tab" data-bs-toggle="tab"
                data-bs-target="#home-tab-pane" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                <i class="bi bi-person"></i>
                <p class="m-0">GST Details</p>
            </div>
        </li>
        <li class="nav-item" role="presentation">
            <div class="nav-link  d-flex flex-column text-center ws-nowarp" id="profile-tab" data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
                aria-selected="false">
                <i class="bi bi-geo-alt"></i>
                <p class="m-0">Pickup Address</p>
            </div>
        </li>
        <li class="nav-item" role="presentation">
            <div class="nav-link  d-flex flex-column text-center ws-nowarp" id="contact-tab" data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane"
                aria-selected="false">
                <i class="bi bi-shop-window"></i>
                <p class="m-0">Bank Details</p>
            </div>
        </li>
        <li class="nav-item" role="presentation">
            <div class="nav-link  d-flex flex-column text-center ws-nowarp" id="Supplier-tab" data-bs-toggle="tab"
                data-bs-target="#Supplier-tab-pane" type="button" role="tab" aria-controls="Supplier-tab-pane"
                aria-selected="false">
                <i class="bi bi-person"></i>
                <p class="m-0">Supplier Details</p>
            </div>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="container tab-pane fade show active mt-4" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <b>GST number is required to sell on Meesho</b>
            <p class="text-muted mt-2">Because the Government needs all suppliers to provide their GST Number to sell online.</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter GSTIN">
                    <label for="floatingInput">Enter GSTIN</label>
                </div>
                <button class="btn btn-primary ">Verify</button>

            </div>
            <p class="text-center">OR</p>
            <div class="  ">
                <div class="border p-3 form-check">
                    <input class="ms-3 form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="ms-3 form-check-label" for="flexCheckDefault">
                        I will provide details later
                    </label>
                </div>
            </div>

        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium ad voluptate cupiditate dolorem assumenda
            at porro perspiciatis dolorum sapiente.
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi veritatis non deserunt sunt repellendus,
            impedit itaque, obcaecati officia inventore sed doloremque eaque veniam et distinctio quisquam velit enim fugit.
        </div>
        <div class="tab-pane fade" id="Supplier-tab-pane" role="tabpanel" aria-labelledby="Supplier-tab" tabindex="0">Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi veritatis non deserunt sunt repellendus,
            impedit itaque, obcaecati officia inventore sed doloremque eaque veniam et distinctio quisquam velit enim fugit.
        </div>
    </div>
    <div class="container">
        <button class="btn btn-primary mt-2 w-100">Continue</button>
    </div>
</template>

<script>
export default {
    name: 'SupplierSignUp',
    methods:{
        goback(){
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.ws-nowarp {
    white-space: nowrap;
}
</style>