<template lang="pug">
    label|{{label}}
        ValidationProvider(
            :rules="rules"
            :name="name", 
            v-slot="{ errors, invalid, validated }"
        )
            q-input(
                :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                :label="placeHolder"  
                :type="type"
                :dark="dark" 
                dense 
                v-model="internalValue"
                @input="onInput"
            )
            span.text-grey-1(
                v-if="subText != ''"
            )
                small|{{subText}}
            span.text-negative|{{errors[0]}}
</template>

<script>
    import { ValidationProvider } from 'vee-validate';
    export default {
        name: 'CustomInput',
        components: {
            ValidationProvider
        },
        data(){
            return {
                internalValue: this.value
            }
        },
        props: {
            index: Number,
            label: String,
            name: String,
            rules: String,
            placeHolder: String,
            type: String,
            value: String,
            subText: String,
            dark: Boolean
        },
        methods: {
            onInput(value){
                this.internalValue = value;
                this.$emit('updateInput', this.index, value);
            }
        },
        watch: {
            value(newValue) {
                this.internalValue = newValue;
            },
            internalValue(newValue) {
                this.$emit('input', newValue);
            }
        }
    }
</script>

<style scoped>

</style>