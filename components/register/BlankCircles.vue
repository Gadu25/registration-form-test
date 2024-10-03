<template lang="pug">
    .blank-circles
        .blank-circle(
            v-for="(n, index) in count" :key="index"
        )
</template>

<script>
    export default {
        data(){

        },
        props: {
            count: Number
        }
    }
</script>

<style  scoped>
    .blank-circles {
        position: absolute;
        display: flex;
        flex-direction: column;
        right: 0;
        top: 50%;
    }
    .blank-circles .blank-circle {
        height: 40px;
        width: 40px;
        margin: 8px;
        background-color: #363636;

        border-radius: 100px;
        cursor: pointer;
        transition: all .3s linear;
    }
    .blank-circle:hover {
        background-color: #EBA013;
    }
    @media only screen and (max-width: 1024px){
        .blank-circles {
            position: relative;
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
        }
    }
</style>