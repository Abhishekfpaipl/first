<template>
    <div>
        <TableTest :pieces="getAllPieces"></TableTest>
    </div>
</template>
<script>
import TableTest from '@/components/TableTest.vue';

export default {
    name: 'TestRoute',
    components: { TableTest },
    computed: {
        getAllPieces() {
            return this.$store.getters.getpieces
        }
    },
}
</script>
<style lang="">
    
</style>