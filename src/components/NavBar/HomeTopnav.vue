<template>
    <div class="py-2">
        <div class="container d-flex justify-content-between position-fixed align-items-center py-2"
            style="top: 0; z-index: 10; background: white; box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
            ref="topnav">
            <div class="d-flex align-items-center gap-3">
                <i class="bi bi-list fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleMenu"
                    aria-controls="offcanvasExampleMenu"></i>

                <i class="bi bi-search fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleSearch"
                    aria-controls="offcanvasExampleSearch"></i>
            </div>
            <p class="text-center m-0 fs-4">
                DeshiGirl
            </p>
            <div class="d-flex align-items-center gap-3">
                <router-link to="/updatepage" style="text-decoration:none;color:black;">
                    <i class="bi bi-bell fs-4"></i>
                </router-link>
                <router-link to="/ContactUs" style="text-decoration:none;color:black;">
                    <i class="bi bi-chat-dots fs-4"></i>
                </router-link>
            </div>


            <!-- Menu -->

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleMenu"
                aria-labelledby="offcanvasExampleLabel" style="width:80vw !important">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body p-0">
                    <div>
                        <ul class="list-group rounded-0">
                            <router-link to="/SignupForm" class="text-decoration-none text-dark">    
                                <li class="list-group-item">Login / SignUp</li>
                            </router-link>
                            <router-link to="/supplier-signup" class="text-decoration-none text-dark">
                                <li class="list-group-item">Profile / Account</li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>




            <!-- Search -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleSearch"
                aria-labelledby="offcanvasExampleLabel" style="width:90vw">
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Search</h5>
                    <button type="button" class="btn-close animation" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <div class="">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>All Categories</option>
                            <option value="1">Clothing Sets</option>
                            <option value="2">Jumpsuit</option>
                            <option value="3">Jumpsuits & Jacket</option>
                            <option value="3">Kurta Sets</option>
                        </select>
                    </div>

                    <div class=" mt-5">
                        <div class="input-group d-flex justify-content-center">
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control" placeholder="Search" />
                            </div>
                            <button type="button" class="btn btn-primary">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTopnav'
}
</script>

<style lang="scss" scoped></style>