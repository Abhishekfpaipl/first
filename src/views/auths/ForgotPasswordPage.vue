<template>
    <div style="min-height: 100vh;padding-bottom:30px;background: rgb(73,44,46);">
        <DeshiGirlLogo></DeshiGirlLogo>
        <div class="px-4 pb-5 ">
            <div class="text text-center mt-4">
                <p class="fs-5">Forgot Password </p>
            </div>
            <div class="mt-3">
                <div class="w-100 p-2 form-floating container">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="email" required>
                    <label for="floatingInput" class="text-muted">Enter your Email</label>
                </div>
            </div>

            <div class="p-2 text-center">
                <button class="w-75 btn btn btn-brand rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    style="color:#4C2E30;background-color: #ECA1A6; border-color:  hsl(356, 74%, 70%) !important;">Submit</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" style="background-color: #4C2E30;">
                        <div class="modal-header">
                            <p class="modal-title fs-5" id="exampleModalLabel">New Password Sent Successfully</p>
                            <i class="bi bi-x fs-1" data-bs-dismiss="modal"  style="color: #fddee0 !important;"></i> 
                        </div>
                        <div class="modal-body text-center">
                            <p class="m-0 mb-4">
                                A new password has been sent to your registered email address, Please find and login again.
                            </p>
                            <router-link to="/login-page">
                                <button class="btn btn-brand w-100" data-bs-dismiss="modal">Ok</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-2 px-2">
                <p>If you submit your email here, Will send you a One Time Password at your registered email
                    address</p>
            </div>

            <div class="mt-3">
                <div class="d-flex justify-content-center mt-4 p-2">
                    <router-link to="/login-page" class="w-100 rounded">
                        <button class="btn btn-brand w-100 fs-5">
                            Click here for Login
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DeshiGirlLogo from './DeshiGirlLogo.vue';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            email: "",
        };
    },
    methods: {
        login() {
            console.log("Email:", this.email);
        }
    },
    components: { DeshiGirlLogo }
}
</script>

<style lang="scss" scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
    background: -webkit-linear-gradient(#273990, #24aae3);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

p,
a {
    color: #fddee0;
}

.btn-brand {
    font-weight: 700;
    color: #4C2E30;
    background-color: #ECA1A6;
    border-color: hsl(356, 74%, 70%) !important;
}
</style>
