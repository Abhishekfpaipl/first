<template>
    <!-- <div class="container" :class="{ 'hide-on-scroll': isScrollingDown }"> -->
    <div class="container" >
        <div class="d-flex w-100">
            <div class="input-group d-flex justify-content-center w-75">
                <div class="form-outline d-flex" style="border-radius: 0% !important;">
                    <input type="search" id="form1" class="form-control w-75" placeholder="Search"
                        style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                    <button type="button" class="btn btn-primary"
                        style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div class="w-25 d-flex justify-content-between ">
                <div class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <i class="bi bi-funnel fs-4"></i>
                </div>
                <div class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleOne"
                    aria-controls="offcanvasExampleOne">
                    <i class="bi bi-arrow-down-up fs-4"></i>
                </div>

                <i class="bi bi-arrow-clockwise fs-4"></i>
            </div>
        </div>



        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            style="height:60vh ;">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

                <div class="accordion accordion-flush" id="accordionFlushExample">

                    <!-- size -->
                    <!-- <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                By Size
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body d-flex gap-4 flex-wrap">
                                <div class="btn-group d-flex flex-wrap " role="group"
                                    aria-label="Basic checkbox toggle button group">

                                    <div class="" v-for="(s, index) in size" :key="index">
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
                    </div> -->


                    <!-- Price -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                By Amount
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


                    <!-- color -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                By Color
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body ">
                                <div class="d-flex gap-2">
                                    <div v-for="(color, index) in colors" :key="index" @click="selectColor(index)"
                                        :style="{ backgroundColor: color }" style="height: 30px; width: 30px;"
                                        :class="{ 'selected-color': isSelected(index) }"
                                        class="d-flex color-option rounded-circle"></div>
                                </div>
                                <p class="selected-color-name mt-2">{{ selectedColorNames }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- skuid -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                By Date
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body d-flex gap-4 flex-wrap">
                                <div class="d-flex flex-column gap-2 w-100 mb-3">

                                    <div class="form-floating flex-fill">
                                        <input type="date" class="form-control" id="floatingInput">
                                        <label for="floatingInput">Start Date</label>
                                    </div>
                                    <div class="form-floating flex-fill">
                                        <input type="date" class="form-control" id="floatingInput2">
                                        <label for="floatingInput2">End Date</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- orderid -->
                    <!-- <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                By Order ID
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body d-flex gap-4 flex-wrap">

                                <div class="input-group d-flex justify-content-center">
                                    <div class="form-outline">
                                        <input type="search" id="form1" class="form-control " placeholder="Search" />
                                    </div>
                                    <button type="button" class="btn btn-primary">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div> -->

                </div>

            </div>
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
                            <div class="d-flex justify-content-between" v-for="(paragraph, index) in paragraphs"
                                :key="index">
                                <p :style="{ color: paragraphColor(paragraph) }" @click="changeColorAndCheck(paragraph)">
                                    {{ paragraph.text }}
                                </p>
                                <p v-if="paragraph.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
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
    name: 'OrderFilter',
    data() {
        return {
            size: [
                // { name: 'One', type: 'radio', label: 'One Size' },
                { name: 'XS', type: 'checkbox', label: 'XS' },
                { name: 'S', type: 'checkbox', label: 'S' },
                { name: 'M', type: 'checkbox', label: 'M' },
                { name: 'L', type: 'checkbox', label: 'L' },
                { name: 'XL', type: 'checkbox', label: 'XL' },
                { name: '2XL', type: 'checkbox', label: '2XL' },
                { name: '3XL', type: 'checkbox', label: '3XL' },
            ],
            colors: ["Red", "Blue", "Green", "Yellow", "Orange", "Black"],
            selectedIndexes: [],
            paragraphs: [
                // { text: 'By High Quantity', selected: false },
                // { text: 'By Low Quantity', selected: false },
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false }
            ],
            isScrollingDown: false,
            prevScrollPos: window.pageYOffset,
        }
    },
    methods: {
        selectColor(index) {
            if (this.isSelected(index)) {
                const selectedIndex = this.selectedIndexes.indexOf(index);
                this.selectedIndexes.splice(selectedIndex, 1);
            } else {
                this.selectedIndexes.push(index);
            }
        },
        isSelected(index) {
            return this.selectedIndexes.includes(index);
        },

        paragraphColor(paragraph) {
            return paragraph.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedParagraph) {
            for (const paragraph of this.paragraphs) {
                if (paragraph === clickedParagraph) {
                    paragraph.selected = true;
                } else {
                    paragraph.selected = false;
                }
            }
        },
        handleScroll() {
            const currentScrollPos = window.pageYOffset;
            this.isScrollingDown = currentScrollPos > this.prevScrollPos;
            this.prevScrollPos = currentScrollPos;
        },
    },
    computed: {
        selectedColorNames() {
            if (this.selectedIndexes.length > 0) {
                return this.selectedIndexes.map(
                    (index) => this.colors[index]
                ).join(", ");
            } else {
                return "No color selected";
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>

<style  scoped>
.selected-color {
    border: 1px solid black;
}

.container {
    transition: transform 0.3s ease-in-out;
}

.hide-on-scroll {
    transform: translateY(-200%);
}
</style>