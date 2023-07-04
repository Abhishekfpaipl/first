<template>
    <a class="list-group-item list-group-item-action py-2 px-0" :href="'#' + category.slug" style="height:80px">
        <p class="m-0 mt-2">{{category.name}}</p>
    </a>
</template>

<script>
export default {
   name:'CategoryLink',
    props: ['category'],
}
</script>
