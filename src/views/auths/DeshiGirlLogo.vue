<template>
    <div class="d-flex flex-column align-items-center justify-content-center pt-4">
        <img :src="logo"
            style="height:180px;width: 330px; object-fit: contain; border-color: #ECA1A6;background: rgb(73,44,46);
        background: linear-gradient(137deg, rgba(73,44,46,1) 0%, rgba(119,72,75,1) 33%, rgba(119,72,75,1) 67%, rgba(73,44,46,1) 100%);"
            class="border border-2">
    </div>
</template>

<script>
export default {
    name: 'DeshiGirlLogo',
    data() {
        return {
            logo: 'img/logo/DeshiGirl.png',
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>
.colorRed {
    filter: hue-rotate(0deg);
}

.colorBlue {
    filter: hue-rotate(200deg) brightness(0.75);
}

.colorGreen {
    filter: hue-rotate(100deg);
}
</style>