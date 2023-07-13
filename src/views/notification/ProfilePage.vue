<template>
    <HomeTopnav></HomeTopnav>
    <div style="padding-top: 40px;">
        <ul class="nav nav-tabs" id="myTab" role="tablist" style="font-size: 14px;">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Personal</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Billing</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Delivery</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane"
                    type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Payment</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active mt-3" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                tabindex="0">
                <PersonalDetail></PersonalDetail>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                tabindex="0">
                <BillingAddress></BillingAddress>
            </div>
            <div class="tab-pane fade mt-3" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                tabindex="0">
                <ProfileAddress></ProfileAddress>
            </div>
            <div class="tab-pane fade mt-3" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
                tabindex="0">
                <BankDetail></BankDetail>
            </div>
        </div>
    </div>
</template>

<script>
import HomeTopnav from '@/components/NavBar/HomeTopnav.vue';
import PersonalDetail from '@/components/PersonalDetail.vue';
import BillingAddress from '@/components/cart/BillingAddress.vue';
import BankDetail from '@/components/BankDetail.vue';
import ProfileAddress from '@/components/cart/ProfileAddress.vue';
export default {
    name: "ProfilePage",

    components: {
        HomeTopnav,
        BankDetail,
        ProfileAddress,
        PersonalDetail,
        BillingAddress
    },
    methods: {
        goback() {
            window.history.back();
        }
    },
}
</script>

<style lang="scss" scoped></style>