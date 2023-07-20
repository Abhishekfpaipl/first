<template>
  <div >
    <router-view />
    <BottomNavbar v-if="!hide"></BottomNavbar>
  </div>
</template>
<script>
import BottomNavbar from "./components/NavBar/BottomNavbar.vue";
export default {
  components: {
    BottomNavbar
  },
  computed: {
    hide() {
      const hiddenPages = ['ProfilePage', 'CatalogDetailPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage','DeliveryAndPaymentMode'];
      return hiddenPages.includes(this.$route.name)
    }
  }
}
</script>
<style>
.top-brand{
  background: #E35D6A !important;
  border-color: #6d6c6c !important;
  color:white;
}
.top-brand-secondary{
  background:#D5F591 !important;
  font-weight:600;
}
.brand-text{
  color:white;
}
</style>

