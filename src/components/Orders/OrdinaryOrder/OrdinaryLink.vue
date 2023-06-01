<template>
    <div>
        <div class="nav nav-tabs py-2 d-flex justify-content-between px-2" style="font-size: 12px; font-weight: 500;" id="nav-tab" role="tablist">
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderPending" :class="active === 'Pending' ? 'active' : ''">Pending</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderApproved" :class="active === 'Approved' ? 'active' : ''">Approved</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderProcessing" :class="active === 'Processing' ? 'active' : ''">Processing</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderDispatched" :class="active === 'Dispatched' ? 'active' : ''">Dispatched</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderDelivered" :class="active === 'Delivered' ? 'active' : ''">Delivered</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'OrdinaryLink',
    props:['active']
}
</script>
<style lang="">
    
</style>