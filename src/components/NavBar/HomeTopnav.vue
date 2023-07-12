<template>
    <div class="py-2">
        <div class="container d-flex justify-content-between position-fixed align-items-center py-2 border-bottom"
            style="top: 0; z-index: 10; background: white;" ref="topnav">
            <div class="d-flex align-items-center gap-3">
                <i class="bi bi-list fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleMenu"
                    aria-controls="offcanvasExampleMenu"></i>

                <router-link to="/search" class="text-dark">
                    <i class="bi bi-search fs-4"></i>
                </router-link>
            </div>
            <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                <!-- <DeshiGirlLogo></DeshiGirlLogo> -->
                <img :src="logo" style="height: 40px;">
                <p class="text-center m-0 fs-2 fw-bold" style="color:#ECA1A6;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
                    Deshi girl
                </p>
            </router-link>
            <div class="d-flex align-items-center gap-3">
                <router-link to="/update-page" style="text-decoration:none;color:black;">
                    <i class="bi bi-bell fs-4"></i>
                </router-link>
                <router-link to="/contact-us" style="text-decoration:none;color:black;">
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
                            <router-link to="/login-page" class="text-decoration-none text-dark">
                                <li class="list-group-item">Login / SignUp</li>
                            </router-link>
                            <router-link to="/profile-page" class="text-decoration-none text-dark">
                                <li class="list-group-item">Profile / Account</li>
                            </router-link>
                            <router-link to="/update-password-page" class="text-decoration-none text-dark">
                                <li class="list-group-item">Update Password</li>
                            </router-link>
                            <router-link to="/otp-page" class="text-decoration-none text-dark">
                                <li class="list-group-item">Email Verification</li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import DeshiGirlLogo from '@/views/auths/DeshiGirlLogo.vue';
export default {
    name: "HomeTopnav",
    data(){
        return{
            logo:'img/logo/logo.png'
        }
    }
    // components: { DeshiGirlLogo }
}
</script>

<style lang="scss" scoped></style>