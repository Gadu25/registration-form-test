<template lang="pug">
    .container.q-pa-md
        .text-center.row.justify-center.q-my-md
            h4.logo.q-px-md.q-py-sm.text-weight-bold.text-yellow-12.q-inline|LOGO
        Title(
            :title="title"
        )
        Stepper(
            :count="stepper.count"
            :active="stepper.active"
        )
        .form-box
            SocialMedia
            .row.justify-center.items-center.full-width.q-mx-sm
                .solid-line.col
                div
                    p.text-subtitle2.q-mt-md.q-px-md.col-4|or
                .solid-line.col
            ValidationObserver(
                ref="observer"
                v-slot="{handleSubmit}"
            )
                form(
                    @submit.prevent="handleSubmit(submitForm)"
                )
                    .row.content-space-between
                        .col-md-6.col-sm-12.col-12(
                            v-for="(input, index) in formData"
                            :key="index"
                        )
                            .q-pa-md
                                CustomInput(
                                    v-if="input.rightText == false"
                                    :index="index"
                                    :label="input.label"
                                    :name="input.name"
                                    :rules="input.rules"
                                    :placeHolder="input.placeHolder"
                                    :type="input.type"
                                    :value="input.value",
                                    :subText="input.subText"
                                    @updateInput="updateInput"
                                )
                                CustomInputRightText(
                                    v-else
                                    :index="index"
                                    :label="input.label"
                                    :name="input.name"
                                    :rules="input.rules"
                                    :placeHolder="input.placeHolder"
                                    :type="input.type"
                                    :value="input.value",
                                    :form="form"
                                    @updateInput="updateInput"
                                )
                    .column.justify-center.items-center.q-my-sm
                        .column.items-center.q-mb-sm
                            CustomCheckbox(
                                label="I agree",
                                subText="OCMS Terms & Conditions",
                                value=false
                            )
                        .row.justify-center.full-width
                            CustomButton(
                                label="Register"
                                type="submit"
                                size="lg" 
                                color="yellow-9" 
                            )
        BlankCircles(
            :count=3
        )
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Title from '../components/register/Title.vue';
import Stepper from '../components/register/Stepper.vue';
import SocialMedia from '../components/register/SocialMedia.vue';
import BlankCircles from '../components/register/BlankCircles.vue';
import CustomInput from '../components/Form/CustomInput.vue';
import CustomInputRightText from '../components/Form/CustomInputRightText.vue';
import CustomCheckbox from '../components/Form/CustomCheckbox.vue';
import CustomButton from '../components/Form/CustomButton.vue';

export default {
    name: 'RegistrationForm',
    components: {
        ValidationProvider,
        ValidationObserver,
        Title,
        Stepper,
        SocialMedia,
        BlankCircles,
        CustomInput,
        CustomInputRightText,
        CustomCheckbox,
        CustomButton
    },
    data(){
        return {
            title: "Free Registration",
            stepper: {
                count: 3,
                active: 1
            },
            formData: [
                {
                    label: "Username",
                    name: "username",
                    rules: "required",
                    placeHolder: "Please enter username.",
                    type: "text",
                    value: "",
                    subText: "",
                    rightText: false
                },
                {
                    label: "Password",
                    name: "password",
                    rules: "required",
                    placeHolder: "Please enter password.",
                    type: "password",
                    value: "",
                    subText: "",
                    rightText: false
                },
                {
                    label: "Confirm Password",
                    name: "confirmation",
                    rules: "required|confirmed:password",
                    placeHolder: "Please enter password.",
                    type: "password",
                    value: "",
                    subText: "",
                    rightText: false
                },
                {
                    label: "Mobile Number",
                    name: "mobileNo",
                    rules: "required",
                    placeHolder: "Please enter number.",
                    type: "number",
                    value: "",
                    subText: "",
                    rightText: false
                },
                {
                    label: "E-mail Address",
                    name: "email",
                    rules: "required|email",
                    placeHolder: "Please enter e-mail address.",
                    type: "email",
                    value: "",
                    subText: "",
                    rightText: false
                },
                {
                    label: "Identity no",
                    name: "idNo",
                    rules: "required",
                    placeHolder: "Please enter correct ID number.",
                    type: "text",
                    value: "",
                    subText: "",
                    rightText: false
                },
                {
                    label: "Referral",
                    name: "referral",
                    rules: "",
                    placeHolder: "Please enter referral username.",
                    type: "text",
                    value: "",
                    subText: "Leave it blank if no referral.",
                    rightText: false
                },
                {
                    label: "Verification Code",
                    name: "verification",
                    rules: "required",
                    placeHolder: "Verification Code.",
                    type: "text",
                    value: "",
                    subText: "",
                    rightText: true
                },
                
            ],
            form: {
                iAgree: false,
                verificationError: {
                    error: false,
                    message: ""
                },
                verificationCodeBase: ""
            }
        }
    },
    methods: {
        submitForm() {
            this.isVerificationCodeValid()
            if(this.form.verificationError.error != true){
                alert('Form is Validated!')
            }
        },
        isVerificationCodeValid(){
            for(let input of this.formData){
                if(input.name == 'verification'){
                    if(input.value != this.form.verificationCodeBase){
                        this.form.verificationError.error = true
                        this.form.verificationError.message = 'Invalid verification Code.'
                    }else{
                        this.form.verificationError.error = false
                        this.form.verificationError.message = ''
                    }
                }
            }
        },
        updateInput(index, value){
            this.formData[index].value = value
        },
        updateCheckBox(value){
            this.form.iAgree = value
        },
        generateNumber() {
            this.form.verificationCodeBase = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        }
    },
    created(){
        this.generateNumber()
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        background: linear-gradient(to bottom, #131A28, #24345B, #592466);

        /* background: linear-gradient(
            to bottom, 
            #031833, 
            #1E3C72, 
            #1E5397, 
            #962BB1
            ); */
    }
    .logo {
        background-color: #101825;
    }
    span {
        cursor: pointer;
    }
    .solid-line {
        height: 1px;
        background-color: #505050;
        width: auto;
    }
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
    .circle {
        border-radius: 100px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        z-index: 1;
    }
    .circle.circle-active {
        width: 60px;
        height: 60px;
        background-color: #EBA013!important;
    }
    .text-white {
        color: white;
    }
    
    .register-button {
        font-size: medium !important;
        text-transform: capitalize!important;
        text-shadow: .5px 1px #000000;
        padding: 10px 15px;
    }
    .input-container {
        display: flex;
        align-items: stretch;
    }
    .input-verification {
        /* background-color: #121212 !important; */
        border-radius: 5px 0 0 5px !important;
    }
    .text-input {
        flex: 3; 
        width: 100%;
        padding-right: 10px;
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