<template>
    <div>
        <div class="d-flex w-100 justify-content-evenly bg-light align-items-center position-fixed"
            style="z-index:1;top:40px;height:50px">
            <!-- <div class="">
                <a class="text-decoration-none text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="bi bi-arrow-down-up"></i>
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
            </div> -->
            
            <div class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleOne"
                aria-controls="offcanvasExampleOne">
                <i class="bi bi-arrow-down-up fs-4"></i>
            </div>
            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleOne"
                aria-labelledby="offcanvasExampleLabel" style="height: 60vh;">
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="w-100">
                            <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
                                <div class="d-flex justify-content-between" v-for="(sort, index) in sorts"
                                    :key="index">
                                    <p :style="{ color: sortColor(sort) }"
                                        @click="changeColorAndCheck(sort)">
                                        {{ sort.text }}
                                    </p>
                                    <p v-if="sort.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- <div class="">
                <a class="text-decoration-none text-dark dropdown-toggle" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-auto-close="outside">
                    Category
                </a>
                <ul class="dropdown-menu w-100">
                    <div class="d-flex flex-wrap">
                        <div v-for="(cat, index) in category" :key="index">
                            <input :type="cat.type" class="btn-check" :id="cat.name" autocomplete="off">
                            <label class="btn btn-outline-success rounded-0 m-2" :for="cat.name"
                                style="font-size: 12px !important;">{{
                                    cat.label }}</label>
                        </div>
                    </div>

                    <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                        <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                        <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                    </div>
                </ul>
            </div> -->

            <!-- <div class="">
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
            </div> -->
            
            <div class="">
                <a class="text-decoration-none text-dark dropdown-toggles " data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom" role="button" aria-expanded="false">
                    <i class="bi bi-funnel fs-4"></i>
                </a>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel" style="height:450px">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Filters </h5>

                        <div class=" bg-white w-100" style="bottom:0px;">
                            <div class="d-flex justify-content-evenly gap-1">
                                <button class="btn btn-outline-dark rounded-0 w-25"
                                    data-bs-dismiss="offcanvas">Clear</button>
                                <button class="btn bg-dark text-white rounded-0 w-25"
                                    data-bs-dismiss="offcanvas">Apply</button>
                            </div>
                        </div>

                    </div>

                    <div class="offcanvas-body">
                        <div class="accordion accordion-flush" id="accordionFlushExample" style="padding-bottom: 60px;">
                            <!-- category -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Category
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex flex-wrap">

                                        <div v-for="(cat, index) in category" :key="index" class="">
                                            <input :type="cat.type" class="btn-check" :id="cat.name" autocomplete="off">
                                            <label class="btn btn-outline-success rounded-0 m-2" :for="cat.name">{{
                                                cat.label }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Price Range -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
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
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Color
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body ">
                                        <div class="d-flex gap-2">
                                            <div v-for="(color, index) in colors" :key="index" @click="selectColor(index)"
                                                :style="{ backgroundColor: color }" style="height: 30px; width: 30px;"
                                                :class="{ 'selected-color': selectedIndex === index }"
                                                class="d-flex color-option rounded-circle">
                                            </div>
                                        </div>
                                        <p class="selected-color-name mt-2">{{ selectedColorName }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Size -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Size
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <div class="btn-group d-flex flex-wrap " role="group"
                                            aria-label="Basic checkbox toggle button group">

                                            <div class="form-check" v-for="(s, index) in size" :key="index">
                                                <input class="btn-check" :type="s.type" name="flexRadioDefault"
                                                    :id="'flexRadioDefault1' + index">
                                                <label class="btn btn-outline-success rounded-0 m-2"
                                                    :for="'flexRadioDefault1' + index">
                                                    {{ s.label }}
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Pattern -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Pattern
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">

                                        <div v-for="(pat, index) in pattern" :key="index" class="">
                                            <input :type="pat.type" class="btn-check" :id="pat.name" autocomplete="off">
                                            <label class="btn btn-outline-success rounded-0 m-2" :for="pat.name">{{
                                                pat.label }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Length -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Length
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">

                                        <div v-for="(len, index) in length" :key="index" class="">
                                            <input :type="len.type" class="btn-check" :id="len.name" autocomplete="off">
                                            <label class="btn btn-outline-success rounded-0 m-2" :for="len.name">{{
                                                len.label }}</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Style -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Style
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">

                                        <div v-for="(style, index) in styles" :key="index" class="">
                                            <input :type="style.type" class="btn-check" :id="style.name" autocomplete="off">
                                            <label class="btn btn-outline-success rounded-0 m-2" :for="style.name">{{
                                                style.label }}</label>
                                        </div>
                                    </div>
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
    name: 'CatelogFilter',
    data() {
        return {
            category: [
                { name: 'Tank Tops', type: 'checkbox', label: 'Tank Tops' },
                { name: 'Dresses', type: 'checkbox', label: 'Dresses' },
                { name: 'Pants', type: 'checkbox', label: 'Pants' },
                { name: 'Blouses', type: 'checkbox', label: 'Blouses' },
                { name: 'Panties', type: 'checkbox', label: 'Panties' },
                { name: 'Tshirts', type: 'checkbox', label: 'Tshirts' },
                { name: 'Sweaters', type: 'checkbox', label: 'Sweaters' },
            ],
            size: [
                { name: 'One', type: 'checkbox', label: 'One Size' },
                { name: 'XS', type: 'checkbox', label: 'XS' },
                { name: 'S', type: 'checkbox', label: 'S' },
                { name: 'M', type: 'checkbox', label: 'M' },
                { name: 'L', type: 'checkbox', label: 'L' },
                { name: 'XL', type: 'checkbox', label: 'XL' },
                { name: '2XL', type: 'checkbox', label: '2XL' },
                { name: '3XL', type: 'checkbox', label: '3XL' },
            ],
            pattern: [
                { name: 'colorful', type: 'checkbox', label: 'Colorful' },
                { name: 'Solid', type: 'checkbox', label: 'Solid' },
                { name: 'Floral', type: 'checkbox', label: 'Floral' },
                { name: 'Leopard Print', type: 'checkbox', label: 'Leopard Print' },
                { name: 'Geometric', type: 'checkbox', label: 'Geometric' },
                { name: 'Art', type: 'checkbox', label: 'Art' },
                { name: 'Alphabet', type: 'checkbox', label: 'Alphabet' },
                { name: 'Cartoon', type: 'checkbox', label: 'Cartoon' },
            ],
            length: [
                { name: 'Crop', type: 'checkbox', label: 'Crop' },
                { name: 'Long', type: 'checkbox', label: 'Long' },
                { name: 'Short', type: 'checkbox', label: 'Short' },
                { name: 'Above Ankle Length', type: 'checkbox', label: 'Above Ankle Length' },
                { name: 'Regular', type: 'checkbox', label: 'Regular' },
                { name: 'Hip', type: 'checkbox', label: 'Hip' },
                { name: 'Capris', type: 'checkbox', label: 'Capris' },
                { name: 'Maxi', type: 'checkbox', label: 'Maxi' },
            ],
            styles: [
                { name: 'Causal', type: 'checkbox', label: 'Causal' },
                { name: 'Sexy', type: 'checkbox', label: 'Sexy' },
                { name: 'Elegant', type: 'checkbox', label: 'Elegant' },
                { name: 'Vacation', type: 'checkbox', label: 'Vacation' },
                { name: 'Minimalist', type: 'checkbox', label: 'Minimalist' },
                { name: 'Sporty', type: 'checkbox', label: 'Sporty' },
                { name: 'Girl', type: 'checkbox', label: 'Girl' },
                { name: 'Glamorous', type: 'checkbox', label: 'Glamorous' },
            ],
            colors: ["red", "blue", "green", "yellow", "orange", "black"],
            selectedIndex: null,
            sorts: [
                // { text: 'By High Quantity', selected: false },
                // { text: 'By Low Quantity', selected: false },
                { text: 'Recommend', selected: false },
                { text: 'New Arrivals', selected: false },
                { text: 'Price: Low to High', selected: false },
                { text: 'Price: High to Low', selected: false }
            ],
        }
    },
    methods: {
        selectColor(index) {
            this.selectedIndex = index;
        },
        sortColor(sort) {
            return sort.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedsort) {
            for (const sort of this.sorts) {
                if (sort === clickedsort) {
                    sort.selected = true;
                    // console.log('Selected sort:', sort.text);
                } else {
                    sort.selected = false;
                }
            }
        }
    },
    computed: {
        selectedColorName() {
            if (this.selectedIndex !== null) {
                return this.colors[this.selectedIndex];
            } else {
                return "No color selected";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.selected-color {
    border: 2px solid black;
}
</style>