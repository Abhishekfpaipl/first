<template>
    <div>
        <div class="container d-flex justify-content-between position-fixed align-items-center py-2"
            :class="{ 'hide-on-scroll': isScrollingDown }" style="top: 0; z-index: 1; background: white;" ref="topnav">
            <div class="d-flex align-items-center gap-3">
                <!-- <i class="bi bi-arrow-left fs-4"></i> -->
                <i class="bi bi-list fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleMenu"
                    aria-controls="offcanvasExampleMenu"></i>

                <i class="bi bi-search fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleSearch"
                    aria-controls="offcanvasExampleSearch"></i>
            </div>
            <router-link to="/" class="text-decoration-none text-dark">
                <p class="text-center m-0 fs-4">
                    DeshiGirl
                </p>
            </router-link>
            <div class="d-flex align-items-center gap-3">
                <router-link to="/updatepage" style="text-decoration:none;color:black;">
                    <i class="bi bi-bell fs-4"></i>
                </router-link>
                <router-link to="/ContactUs" style="text-decoration:none;color:black;">
                    <i class="bi bi-chat-left-dots fs-4"></i>
                </router-link>
            </div>
        </div>

        <!-- Menu -->

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleMenu"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>




        <!-- Search -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExampleSearch"
            aria-labelledby="offcanvasExampleLabel" style="width:90vw">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Search</h5>
                <button type="button" class="btn-close animation" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
</template>

<script>
export default {
    name: 'SavedProductTopnav',
    data() {
        return {
            isScrollingDown: false,
            prevScrollPos: window.pageYOffset,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPos = window.pageYOffset;
            this.isScrollingDown = currentScrollPos > this.prevScrollPos;
            this.prevScrollPos = currentScrollPos;
        },
    }
};
</script>

<style scoped>
.container {
    transition: transform 0.3s ease-in-out;
}

.hide-on-scroll {
    transform: translateY(-100%);
}
</style>