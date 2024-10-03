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
                        .col-md-6.col-sm-12.col-12
                            .q-pa-md
                                label|Username
                                ValidationProvider(
                                    rules="required" 
                                    v-slot="{ errors, invalid, validated }"
                                )
                                    q-input(
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                                        label="Please enter username."  
                                        dark 
                                        dense 
                                        v-model="form.userName"
                                    )
                                    span.text-negative|{{errors[0]}}
                        .col-md-6.col-sm-12.col-12
                            .q-pa-md
                                label|Password
                                ValidationProvider(
                                    rules="required"
                                    name="password" 
                                    v-slot="{ errors, invalid, validated }"
                                )
                                    q-input(
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                                        name="password"
                                        type="password"
                                        label="Please enter password."  
                                        dark 
                                        dense 
                                        v-model="form.password"
                                    )
                                    span.text-negative|{{errors[0]}}
                        .col-md-6.col-sm-12.col-12
                                .q-pa-md
                                    label|Confirm Password
                                    ValidationProvider(
                                        rules="required|confirmed:password"
                                        name="confimation"
                                        v-slot="{ errors, invalid, validated }"
                                    )
                                        q-input(
                                            :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                                            name="confirmation"
                                            type="password"
                                            label="Please enter password."  
                                            dark 
                                            dense 
                                            v-model="form.confirmPassword"
                                        )
                                        span.text-negative|{{errors[0]}}
                        .col-md-6.col-sm-12.col-12
                                .q-pa-md
                                    label|Mobile Number
                                    ValidationProvider(
                                        rules="required"
                                        v-slot="{ errors, invalid, validated }"
                                    )
                                        q-input(
                                            :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                            type="number"
                                            label="Please enter password."  
                                            dark 
                                            dense 
                                            v-model="form.mobileNumber"
                                        )
                                        span.text-negative|{{errors[0]}}
                        .col-md-6.col-sm-12.col-12
                                .q-pa-md
                                    label|E-mail Address
                                    ValidationProvider(
                                        rules="required|email"
                                        v-slot="{ errors, invalid, validated }"
                                    )
                                        q-input(
                                            :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                            type="email"
                                            label="Please enter e-mail address."  
                                            dark 
                                            dense 
                                            v-model="form.emailAddress"
                                        )
                                        span.text-negative|{{errors[0]}}
                        .col-md-6.col-sm-12.col-12
                                .q-pa-md
                                    label|Identify no
                                    ValidationProvider(
                                        rules="required"
                                        v-slot="{ errors, invalid, validated }"
                                    )
                                        q-input(
                                            :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                            label="Please enter correct ID number."  
                                            dark 
                                            dense 
                                            v-model="form.idNo"
                                        )
                                        span.text-negative|{{errors[0]}}
                        .col-md-6.col-sm-12.col-12
                                .q-pa-md
                                    label|Referral
                                    q-input(
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                        label="Please enter correct ID number."  
                                        dark 
                                        dense 
                                        v-model="form.referral"
                                    )
                                    span.text-grey-1
                                        small|Leave it blank if no referral.
                        .col-md-6.col-sm-12.col-12
                                .q-pa-md
                                    label|Verification Code
                                    ValidationProvider(
                                        rules="required"
                                        v-slot="{ errors, invalid, validated }"
                                    )
                                        .input-container
                                            q-input.input-verification(
                                                :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                                label="Please enter correct ID number."  
                                                dark 
                                                dense 
                                                v-model="form.verificationCode"
                                            )
                                            .right-text
                                                span.text-h6|{{form.verificationCodeBase}}
                                        span.text-negative|{{errors[0]}}
                                        span.text-negative(
                                            v-if="form.verificationError.error"
                                        )
                                            |{{form.verificationError.message}}
                    .column.justify-center.items-center.q-my-sm
                        ValidationProvider(
                            rules="agree"
                            v-slot="{errors, invalid, validated}"
                        )
                            .column.items-center.q-mb-sm
                                .row.items-center
                                    q-checkbox(
                                        label="I agree."
                                        dark
                                        v-model="form.iAgree"
                                    )
                                    span.text-amber-13|OCMS Terms & Conditions
                                span.text-negative(
                                    style="text-align: center;"
                                )
                                    |{{errors[0]}}
                        .row.justify-center.full-width
                            .col-md-3.col-sm-12.col-12
                                q-btn.q-my-md.full-width.register-button(
                                    label="Register"
                                    type="submit"
                                    size="lg" 
                                    color="yellow-9" 
                                    rounded
                                )
        BlankCircles(
            :count=3
        )

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Title from '../components/register/Title.vue';
import Stepper from '../components/register/Stepper.vue';
import FormContainer from '../components/Layout/FormContainer.vue';
import SocialMedia from '../components/register/SocialMedia.vue';
import BlankCircles from '../components/register/BlankCircles.vue';

export default {
    name: 'RegistrationForm',
    components: {
        ValidationProvider,
        Title,
        Stepper,
        FormContainer,
        SocialMedia,
        BlankCircles
    },
    data(){
        return {
            title: "Free Registration",
            stepper: {
                count: 3,
                active: 1
            },
            form: {
                iAgree: false,
                userName: "",
                password: "",
                confirmPassword: "",
                mobileNumber: "",
                emailAddress: "",
                idNo: "",
                referral: "",
                verificationCode: "",
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
            if(this.form.verificationCode != this.form.verificationCodeBase){
                this.form.verificationError.error = true
                this.form.verificationError.message = 'Invalid verification Code.'
            }else{
                this.form.verificationError.error = false
                this.form.verificationError.message = ''
            }
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