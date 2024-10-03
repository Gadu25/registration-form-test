<template lang="pug">
    .container.q-pa-md
        .text-center.row.justify-center.q-my-md
            h4.logo.q-px-md.q-py-sm.text-weight-bold.text-yellow-12.q-inline|LOGO
        h4.q-mb-lg.text-center.text-weight-bold.text-white|Free Registration
        .nav-buttons.row.justify-center
            .nav-box.row.justify-center.items-center
                .line
                span.q-pa-sm.q-mx-lg.circle.circle-active.text-weight-bold.text-subtitle1.bg-dark.text-white|1
                span.q-pa-sm.q-mx-lg.circle.text-weight-bold.text-subtitle1.bg-dark.text-white|2
                span.q-pa-sm.q-mx-lg.circle.text-weight-bold.text-subtitle1.bg-dark.text-white|3
        .form-box
            .column.justify-center.items-center.q-my-sm.q-py-sm
                p.text-subtitle2|Continue With
                .socs
                    img(
                        src="~/assets/images/fb.svg"
                        alt="facebook logo"
                    )
                    img(
                        src="~/assets/images/google.svg"
                        alt="google logo"
                    )
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
        .blank-circles
            .blank-circle
            .blank-circle
            .blank-circle

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    name: 'RegistrationForm',
    components: {
        ValidationProvider
    },
    data(){
        return {
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
    .socs img {
        margin: 0 10px;
        cursor: pointer;
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