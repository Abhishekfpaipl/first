<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="bank">

                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email"
                            v-model="accountNumber" required>
                        <label for="floatingInput" class="text-muted">Account Number</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email"
                            v-model="accountHolder" required>
                        <label for="floatingInput" class="text-muted">Account Holder</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="bankName"
                            required>
                        <label for="floatingInput" class="text-muted">Bank Name</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="branch"
                            required>
                        <label for="floatingInput" class="text-muted">Branch</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="ifsc"
                            required>
                        <label for="floatingInput" class="text-muted">IFSC Code</label>
                    </div>

                    <div class="d-flex justify-content-center mt-4 p-2">
                        <button class="btn top-brand w-100 fs-5">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            accountNumber: '',
            accountHolder: '',
            bankName: '',
            branch: '',
            ifsc: ''
        };
    },
    methods: {
        bank() {
            console.log('Account Number:', this.accountNumber);
            console.log('Account Holder:', this.accountHolder);
            console.log('Bank Name:', this.bankName);
            console.log('Branch:', this.branch);
            console.log('Ifsc:', this.ifsc);
        }
    }
};
</script>