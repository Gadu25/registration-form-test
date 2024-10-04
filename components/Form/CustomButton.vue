<template lang="pug">
    .col-md-3.col-sm-12.col-12
        q-btn.q-my-md.full-width.register-button(
            :label="label"
            :type="type"
            :size="size" 
            :color="color" 
            rounded
        )
</template>

<script>
    export default {
        name: "CustomButton",
        data(){
            return {}
        },
        props: {
            label: String,
            type: String,
            size: String,
            color: String
        }
    }
</script>

<style scoped>

</style>