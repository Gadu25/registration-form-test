<template lang="pug">
    div.form-box
</template>

<script>
    export default {
        name: "FormContainer",
        setup () {
            return {}
        },
        props: {
            title: String
        }
    }
</script>

<style scoped>
    .form-box {
        max-width: 760px;
        width: 95%;
        background-color: black;
        border-radius: 8px;
        border: 1px solid #9F7F00;
        margin: 20px auto;
        padding: 20px;
        color: white;
    }
</style>