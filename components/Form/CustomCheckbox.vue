<template lang="pug">
    ValidationProvider(
        rules="agree"
        v-slot="{errors, invalid, validated}"
    )
        .column.items-center.q-mb-sm
            .row.items-center
                q-checkbox(
                    :label="label+'.'"
                    dark
                    v-model="internalValue"
                    @change="onChange"
                )
                span.text-amber-13|{{subText}}
            span.text-negative(
                style="text-align: center;"
            )
                |{{errors[0]}}
</template>

<script>
    export default {
        name: "CustomCheckbox",
        data(){
            return {
                internalValue: this.value
            }
        },
        methods: {
            onChange(value){
                this.internalValue = value;
                // this.$emit('updateCheckBox', value);
            }
        },
        watch: {
            value(newValue) {
                this.internalValue = newValue;
            },
        },
        props: {
            label: String,
            subText: String,
            value: Boolean,
        }
    }
</script>

<style scoped>

</style>