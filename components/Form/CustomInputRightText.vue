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
                    :dark="dark" 
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
import { ValidationProvider } from 'vee-validate';

    export default {
        name: "CustomInputRightText",
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
            form: Object,
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
            }
        }
    }
</script>

<style scoped>
.input-container {
    display: flex;
    align-items: stretch;
}
.right-text {
    flex: 1;
    width: 100%;
    font-size: 14px; 
    color: red;

    border-top-right-radius: 5px 5px;
    border-bottom-right-radius: 5px 5px;
    background-color: #E8E8E8;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>