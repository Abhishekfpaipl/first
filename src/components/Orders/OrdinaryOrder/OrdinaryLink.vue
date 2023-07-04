<template>
    <div>
        <!-- <div class="nav nav-tabs py-2 d-flex justify-content-between px-2" style="font-size: 12px; font-weight: 500;" id="nav-tab" role="tablist">
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderPending" :class="active === 'Pending' ? 'active' : ''">Pending</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderApproved" :class="active === 'Approved' ? 'active' : ''">Approved</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderProcessing" :class="active === 'Processing' ? 'active' : ''">Processing</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderDispatched" :class="active === 'Dispatched' ? 'active' : ''">Dispatched</router-link>
            <router-link class="text-decoration-none text-dark nav-link px-2 py-2" to="/OrdinaryOrderDelivered" :class="active === 'Delivered' ? 'active' : ''">Delivered</router-link>
        </div> -->

        <div class="nav nav-tabs align-items-center py-2 d-flex justify-content-around px-2 position-fixed w-100 bg-white top-0"
            style="font-size: 16px;z-index: 12; height: 63px; font-weight: 500;box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
            id="nav-tab" role="tablist">
            <router-link class="nav-link" to="running" :class="active === 'Running' ? 'active' : ''">Running Orders
            </router-link>
            <router-link class="nav-link " :class="active === 'Completed' ? 'active' : ''" to="completed">Completed
                Orders</router-link>

        </div>

    </div>
</template>
<script>
export default {
    name: 'OrdinaryLink',
    props: ['active']
}
</script>
<style>
.nav-link {
    color: grey
}
</style>