<template lang="pug">
    label|{{label}}
        ValidationProvider(
            :rules="rules"
            :name="name", 
            v-slot="{ errors, invalid, validated }"
        )
            .input-container
                q-input(
                    :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                    :label="placeHolder"  
                    :type="type"
                    dark 
                    dense 
                    v-model="internalValue"
                    @input="onInput"
                )
                .right-text
                    span.text-h6|{{form.verificationCodeBase}}
            span.text-negative|{{errors[0]}}
            span.text-negative(
                v-if="form.verificationError.error"
            )
                |{{form.verificationError.message}}
</template>

<script>
    export default {
        name: "CustomInputRightText",
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
            form: Object
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
            }
        }
    }
</script>

<style scoped>

</style>