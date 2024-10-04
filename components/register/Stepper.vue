<template lang="pug">
    .nav-buttons.row.justify-center
            .nav-box.row.justify-center.items-center
                .line
                span.q-pa-sm.q-mx-lg.circle.text-weight-bold.text-subtitle1.bg-dark.text-white(
                    v-for="(x, index) in count" :key="x"
                    :class="x==active ? 'circle-active': ''"
                )
                    |{{x}}
</template>
<script>
export default {
    name: 'Stepper',
    data(){
        return {
            
        }
    },
    props: {
        count: Number,
        active: Number,
    }
}
</script>
<style scoped>
    .nav-box {
        position: relative;
        padding-left: 18px;
        padding-right: 18px;
    }
    .line {
        position: absolute;
        width: 125%;
    }
    .line::before,
    .line::after {
        content: '';
        position: absolute;
        top: 0;
        width: 50%;
        height: 2px;
        z-index: 0;
    }
    .line::before {
        left: 0;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
    .line::after {
        right: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
</style>