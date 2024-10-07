<template lang="pug">
    .nav-buttons.row.justify-center
            .nav-box.row.justify-center.items-center
                .line
                span.q-pa-sm.q-mx-lg.circle.text-weight-bold.text-subtitle1.bg-dark.text-white(
                    v-for="(x, index) in count" :key="x"
                    :class="x==internalActive ? 'circle-active': ''"
                    v-on:click="handleClick(x)"
                )
                    |{{x}}
</template>
<script>
export default {
    name: 'Stepper',
    data(){
        return {
            internalActive: this.active
        }
    },
    methods: {
        handleClick(newValue) {
            this.internalActive = newValue
            this.$emit('handleStepperClick', newValue)
        }
    },
    watch: {
        active(newValue) {
            this.internalActive = newValue;
        },
        internalActive(newValue) {
            this.$emit('handleStepperClick', newValue);
        }
    },
    props: {
        count: {
            default: 3,
            type: Number 
        },
        active: {
            default: 1,
            type: Number
        },
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
    .circle {
        border-radius: 100px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        transition: all .25s;
        z-index: 1;
    }
    .circle.circle-active {
        width: 60px;
        height: 60px;
        background-color: #EBA013!important;
    }
    span {
        cursor: pointer;
    }
</style>