<template>
    <div>
        <div class="nav nav-tabs py-2 d-flex justify-content-between px-2" style="font-size: 12px; font-weight: 500;" id="nav-tab" role="tablist">
            <router-link  class="text-decoration-none text-dark nav-link" to="/PremiumOrderNew" :class="active === 'New' ? 'active' : ''">New</router-link>
            <router-link class="text-decoration-none text-dark nav-link" to="/PremiumOrderStatus"  :class="active === 'Status' ? 'active' : ''">Status</router-link>
            <router-link  class="text-decoration-none text-dark nav-link" to="/PremiumOrderAction" :class="active === 'Action' ? 'active' : ''">Action</router-link>
            <router-link  class="text-decoration-none text-dark nav-link" to="/PremiumOrderComing" :class="active === 'Coming' ? 'active' : ''">Coming</router-link>
            <router-link to="/PremiumOrderReceived" class="text-decoration-none text-dark nav-link" :class="active === 'Received' ? 'active' : ''">Received</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'PremiumLink',
    props:['active']
}
</script>
<style lang="">
    
</style>