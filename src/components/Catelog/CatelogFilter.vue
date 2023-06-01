<template>
    <div>
        <div class="d-flex w-100 justify-content-evenly bg-light align-items-center position-fixed"
        style="z-index:1;top:55px;height:50px">
        <div class="">
            <a class="text-decoration-none text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Sort
            </a>
            <ul class="dropdown-menu w-100">
                <li><a class="dropdown-item" href="#">Recommend</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Price: Low to High</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Price: High to Low</a></li>
                <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                    <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                    <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                </div>
            </ul>
        </div>
        <div class="">
            <a class="text-decoration-none text-dark dropdown-toggle" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Category
            </a>
            <ul class="dropdown-menu w-100">
                <div class="d-flex flex-wrap gap-2 ms-2 me-2">
                    <button class="btn btn-outline-success rounded-0">tank tops</button>
                    <button class="btn btn-outline-success rounded-0">Dresses</button>
                    <button class="btn btn-outline-success rounded-0">Pants</button>
                    <button class="btn btn-outline-success rounded-0">Blouses</button>
                    <button class="btn btn-outline-success rounded-0">Panties</button>
                    <button class="btn btn-outline-success rounded-0">Tshirts</button>
                    <button class="btn btn-outline-success rounded-0">Sweaters</button>
                    <button class="btn btn-outline-success rounded-0">Shorts</button>
                </div>

                <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                    <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                    <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                </div>
            </ul>
        </div>
        <div class="">
            <a class="text-decoration-none text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Price Range
            </a>
            <ul class="dropdown-menu w-100">
                <div>
                    <div class="d-flex mt-4">
                        <input type="number" placeholder="Min" class="form-control-sm text-center">--
                        <input type="number" placeholder="Max" class="form-control-sm text-center">
                    </div>
                    <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                        <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                        <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                    </div>
                </div>
            </ul>
        </div>
        <div class="">
            <a class="text-decoration-none text-dark dropdown-toggles " data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom" role="button" aria-expanded="false">
                Filters <i class="bi bi-sliders"></i>
            </a>
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel" style="height:450px">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Filters </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div class="offcanvas-body">
                    <div class="accordion accordion-flush" id="accordionFlushExample" style="padding-bottom: 60px;">
                        <!-- category -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Category
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex gap-4 flex-wrap">
                                    <button class="btn btn-outline-success rounded-0">tank tops</button>
                                    <button class="btn btn-outline-success rounded-0">Dresses</button>
                                    <button class="btn btn-outline-success rounded-0">Pants</button>
                                    <button class="btn btn-outline-success rounded-0">Blouses</button>
                                    <button class="btn btn-outline-success rounded-0">Panties</button>
                                    <button class="btn btn-outline-success rounded-0">Tshirts</button>
                                    <button class="btn btn-outline-success rounded-0">Sweaters</button>
                                    <button class="btn btn-outline-success rounded-0">Shorts</button>
                                </div>
                            </div>
                        </div>
                        <!-- Price Range -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Price Range
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div class="d-flex w-100">
                                        <input type="number" placeholder="Min" class="form-control-sm w-50">--
                                        <input type="number" placeholder="Max" class="form-control-sm w-50">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Color -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Color
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex gap-4 flex-wrap">
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: yellowgreen;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: orangered;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: red;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: palevioletred;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: purple;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: black;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: blue;"></button>
                                    <button class="rounded-circle"
                                        style="width: 25px; height: 25px; background: gold;"></button>
                                </div>
                            </div>
                        </div>
                        <!-- Size -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Size
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex gap-4 flex-wrap">
                                    <div class="btn-group d-flex flex-wrap " role="group"
                                        aria-label="Basic checkbox toggle button group">
                                        <input type="checkbox" class="btn-check" id="name" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="name">One Size</label>

                                        <input type="checkbox" class="btn-check" id="XS" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="XS">XS</label>

                                        <input type="checkbox" class="btn-check" id="S" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="S">S</label>

                                        <input type="checkbox" class="btn-check" id="M" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="M">M</label>

                                        <input type="checkbox" class="btn-check" id="L" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="L">L</label>

                                        <input type="checkbox" class="btn-check" id="XL" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="XL">XL</label>

                                        <input type="checkbox" class="btn-check" id="2XL" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="2XL">2XL</label>

                                        <input type="checkbox" class="btn-check" id="3XL" autocomplete="off">
                                        <label class="btn btn-outline-success rounded-0 m-2" for="3XL">3XL</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Pattern -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Pattern
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex gap-4 flex-wrap">
                                    <button class="btn btn-outline-success rounded-0">Colorful</button>
                                    <button class="btn btn-outline-success rounded-0">Solid</button>
                                    <button class="btn btn-outline-success rounded-0">Floral</button>
                                    <button class="btn btn-outline-success rounded-0">Leopard Print</button>
                                    <button class="btn btn-outline-success rounded-0">Geometric</button>
                                    <button class="btn btn-outline-success rounded-0">Art</button>
                                    <button class="btn btn-outline-success rounded-0">Alphabet</button>
                                    <button class="btn btn-outline-success rounded-0">Cartoon</button>
                                </div>
                            </div>
                        </div>
                        <!-- Length -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSix" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Length
                                </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex gap-4 flex-wrap">
                                    <button class="btn btn-outline-success rounded-0">Crop</button>
                                    <button class="btn btn-outline-success rounded-0">Long</button>
                                    <button class="btn btn-outline-success rounded-0">Above Ankle Length</button>
                                    <button class="btn btn-outline-success rounded-0">Short</button>
                                    <button class="btn btn-outline-success rounded-0">Regular</button>
                                    <button class="btn btn-outline-success rounded-0">Hip</button>
                                    <button class="btn btn-outline-success rounded-0">Capris</button>
                                    <button class="btn btn-outline-success rounded-0">Maxi</button>
                                </div>
                            </div>
                        </div>
                        <!-- Style -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Style
                                </button>
                            </h2>
                            <div id="flush-collapseSeven" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body d-flex gap-4 flex-wrap">
                                    <button class="btn btn-outline-success rounded-0">Causal</button>
                                    <button class="btn btn-outline-success rounded-0">Sexy</button>
                                    <button class="btn btn-outline-success rounded-0">Elegant</button>
                                    <button class="btn btn-outline-success rounded-0">Vacation</button>
                                    <button class="btn btn-outline-success rounded-0">Minimalist</button>
                                    <button class="btn btn-outline-success rounded-0">Sporty</button>
                                    <button class="btn btn-outline-success rounded-0">Girl</button>
                                    <button class="btn btn-outline-success rounded-0">Glamorous</button>
                                </div>
                            </div>
                        </div>
                        <div class=" bg-white w-100" style="bottom:0px;">
                            <div class="d-flex justify-content-evenly gap-1">
                                <button class="btn btn-outline-dark rounded-0 w-25">Clear</button>
                                <button class="btn bg-dark text-white rounded-0 w-25">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
       name:'CatelogFilter' 
    }
</script>

<style lang="scss" scoped>

</style>