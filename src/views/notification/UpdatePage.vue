<template>
    <div>
        <div class="d-flex p-2 bg-dark text-white">
            <router-link to="/" class="text-decoration-none text-white">
                <i class="bi bi-chevron-left"></i>
            </router-link>
            <p class="ms-3 mb-0">Notifications</p>
        </div>
        <NotificationLinks></NotificationLinks>
        <div class="">
            <div v-for="(noti, index) in notifications" :key="index" :class="{ 'selected ': selectedIndex === index }"
                class="border-bottom py-2 container" @click="select(index)">
                <div class="d-flex align-items-center w-100">
                    <div class="">
                        <div class="rounded-circle d-flex justify-content-center align-items-center "
                            style="  width: 50px; height: 50px; object-fit:cover; object-position: top;"
                            :style="{ backgroundColor: noti.bg1 }"><i style="font-size: 20px;" :style="{ color: noti.bg }"
                                class="d-flex justify-content-center align-items-center" :class="noti.icon"></i>

                        </div>
                        <div class=" text-center">

                        </div>
                    </div>
                    <div class="ms-2">
                        <div class="d-flex justify-content-between">
                            <b class="ss">{{ noti.title }}</b>
                            <i class="bi bi-x"></i>
                        </div>
                        <p class="mb-0 vv">{{ noti.description }}</p>
                        <div class="d-flex justify-content-between align-items-end">
                            <div style="font-size: 15px;" class="text-muted d-flex"><i class="bi bi-check-all "></i>
                                <div v-if="selectedIndex === index"
                                    class="text-muted d-flex justify-content-center align-items-center"
                                    style="font-size: 10px;">Read</div>
                            </div>
                            <p class="text-muted mb-0" style="font-size: 10px;">{{ noti.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import NotificationLinks from './NotificationLinks.vue';
export default {
    components: { NotificationLinks },
    data() {
        return {
            selectedIndex: -1,
            notifications: [
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-hourglass',
                    title: 'Order payment is still pending.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#e2f5ea',
                    bg: 'black',
                    icon: 'bi bi-currency-rupee',
                    title: 'Order payment is confirmed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fbdddd',
                    bg: 'black',
                    icon: 'bi bi-x',
                    title: 'Order payment is cancelled.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-cart',
                    title: 'Your order has been placed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#e2f5ea',
                    bg: 'black',
                    icon: 'bi bi-cart-check',
                    title: 'Your order has been confirmed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#e2f5ea',
                    bg: 'black',
                    icon: 'bi bi-send-check',
                    title: 'Your oder has been dispatched.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fbdddd',
                    bg: 'black',
                    icon: 'bi bi-cart-x',
                    title: 'Your order has been cancelled.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-box',
                    title: 'Your order has been delivered.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    bg1: '#fcf4db',
                    bg: 'black',
                    icon: 'bi bi-clock',
                    title: 'Your order is delayed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },

                
            ]
        }
    },
    methods: {
        select(index) {
            if (this.selectedIndex === index) {
                // If the same div is clicked again, deselect it
                this.selectedIndex = -1;
                return;
            }

            // Move the selected div to the bottom
            const selectedNoti = this.notifications.splice(index, 1)[0];
            this.notifications.push(selectedNoti);

            // Update the selected index
            this.selectedIndex = this.notifications.length - 1;
        },
        // goback(){
        //     window.history.back()
        // }
    }

}
</script>

<style lang="scss" scoped>
.vv {
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

}

.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

}

.selected {
    opacity: 0.55;
}
</style>
