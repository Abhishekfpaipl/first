<template>
    <div>
        <p class="m-0 fw-bold text-decoration-underline" style="font-size:16px;">Enter Desired quantity Of Available
            Varients</p>
        <div class="table-responsive mt-4" id="scroll">
            <table class="table border border-1">
                <thead>
                    <tr>
                        <th scope="col"> Qty</th>
                        <th scope="col" v-for="(size, index) in product.sizes" :key="index">
                            <div class="fw-bold d-flex flex-column align-items-center" style="">
                                <p class="m-0">{{ size.name }}</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-show="colorindex === 0" v-for="(color, colorindex) in product.colors" :key="colorindex">
                        <td>
                        <th class="ms-3">All</th>
                        </td>

                        <td v-for="(size, sizeindex) in product.sizes" :key="sizeindex">
                            <div>
                                <input type="number" class="form-control text-center" placeholder="0"
                                    v-model="quantities[colorindex][sizeindex]">
                            </div>
                        </td>
                    </tr>
                    <tr scope="row">
                        <th>Total</th>
                        <td class="text-center" v-for="(size, sizeindex) in product.sizes" :key="sizeindex">
                            ₹{{ calculateTotal(sizeindex) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between">
            <h2>Grand Total</h2>
            <h2>₹{{ calculateGrandTotal }}</h2>
        </div>
    </div>
</template>

<script>


export default {
    name: 'OrdinaryTable',
    data() {
        return {
            quantities: [],
        }
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters['catalog/getProduct'](productId);
        },
        total() {
            let totalPrice = 0;
            for (let [index, size] of this.product.sizes.entries()) {
                totalPrice += size.price * this['quantity' + index];
            }

            return totalPrice;
        },
        calculateTotal() {
            return (sizeIndex) => {
                let totalPrice = 0;
                for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
                    const quantity = this.quantities[colorIndex][sizeIndex] || 0;
                    const price = this.product.sizes[sizeIndex].price;
                    totalPrice += quantity * price;
                }
                return totalPrice;
            };
        },
        calculateGrandTotal() {
            let grandTotal = 0;
            for (let sizeIndex = 0; sizeIndex < this.product.sizes.length; sizeIndex++) {
                grandTotal += this.calculateTotal(sizeIndex);
            }
            return grandTotal;
        },
    },
    created() {
        for (let colorIndex = 0; colorIndex < this.product.colors.length; colorIndex++) {
            this.quantities[colorIndex] = [];
            for (let sizeIndex = ''; sizeIndex < this.product.sizes.length; sizeIndex++) {
                this.quantities[colorIndex][sizeIndex] = '';
            }
        }
    },
}
</script>

<style scoped>
#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

table th:first-child,
.table td:first-child {
    position: sticky;
    left: 0;
    background-color: #e8e8e8;
    color: #373737;
}
</style> 

