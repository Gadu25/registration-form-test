<template lang="pug">
    .column.justify-center.items-center.q-my-sm.q-py-sm
        p.text-subtitle2|Continue With
        .socs
            img(
                src="~/assets/images/fb.svg"
                alt="facebook logo"
            )
            img(
                src="~/assets/images/google.svg"
                alt="google logo"
            )
</template>

<script>
    export default {
        data(){

        }
    }
</script>

<style scoped>
    .socs img {
        margin: 0 10px;
        cursor: pointer;
    }
</style>