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
      const hiddenPages = ['ProfilePage', 'CatalogDetailPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'LoginPage', 'OTPPage', 'RegistrationPage', 'ResetPasswordPage'];
      return hiddenPages.includes(this.$route.name)
    }
  }
}
</script>


