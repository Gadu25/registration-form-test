<template lang="pug">
    h4.q-mb-lg.text-center.text-weight-bold(
        :class="color"
    )
        |{{title}}
</template>

<script>
export default {
    name: 'Title',
    setup () {
        return {}
    },
    props: {
        title: String,
        color: String
    }
}
</script>