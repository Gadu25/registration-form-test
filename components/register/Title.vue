<template lang="pug">
    h4.q-mb-lg.text-center.text-weight-bold.text-white|{{title}}
</template>

<script>
export default {
    name: 'Title',
    setup () {
        return {}
    },
    props: {
        title: String
    }
}
</script>

<style scoped>

</style>