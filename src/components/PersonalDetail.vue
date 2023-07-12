<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="bank">

                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="User"
                            v-model="name" required>
                        <label for="floatingInput" class="text-muted">Name</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email"
                            v-model="email" required>
                        <label for="floatingInput" class="text-muted">Email</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="number" class="form-control" id="floatingInput" placeholder="Phone Number" v-model="number"
                            required>
                        <label for="floatingInput" class="text-muted">Phone Number</label>
                    </div>

                    <div class="d-flex justify-content-center mt-4 p-2">
                        <button class="btn   w-100 fs-5"
                            style="background-color: #ECA1A6;padding: 14px 12px !important;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
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
            name: '',
            email: '',
            number: '',
        };
    },
    methods: {
        bank() {
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Phone Number:', this.number);
        }
    }
};
</script>