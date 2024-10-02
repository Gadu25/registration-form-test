<template>
    <div class="container q-pa-md">
        <div class="text-center row justify-center q-my-md">
            <h4 class="logo q-px-md q-py-sm text-weight-bold text-yellow-12 q-inline">LOGO</h4>
        </div>
        <h4 class="q-mb-lg text-center text-weight-bold text-white">Free Registration</h4>
    
        <div class="nav-buttons row justify-center">
            <div class="nav-box row justify-center items-center">
                <div class="line"></div>
                <span class="q-pa-sm q-mx-lg circle circle-active text-weight-bold text-subtitle1 bg-dark text-white">
                    1
                </span>
                <span class="q-pa-sm q-mx-lg circle text-weight-bold text-subtitle1 bg-dark text-white">
                    2
                </span>
                <span class="q-pa-sm q-mx-lg circle text-weight-bold text-subtitle1 bg-dark text-white">
                    3
                </span>
            </div>
        </div>

        <div class="form-box">
            <div class="column justify-center items-center q-my-sm q-py-sm">
                <p class="text-subtitle2">Continue With</p>
                <div class="socs">
                    <img src="~/assets/images/fb.svg" alt="facebook logo"/>
                    <img src="~/assets/images/google.svg" alt="google logo"/>
                </div>
            </div>
            <div class="row justify-center items-center full-width q-mx-sm">
                <div class="solid-line col"></div>
                <div>
                    <p class="text-subtitle2 q-mt-md q-px-md col-4">or</p>
                </div>
                <div class="solid-line col"></div>
            </div>
            <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(submitForm)">
                    <div class="row content-space-between">
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Username</label>
                                <ValidationProvider rules="required" v-slot="{ errors, invalid, validated }">
                                    <q-input 
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                                        label="Please enter username."  
                                        dark 
                                        dense 
                                        v-model="form.userName">
                                    </q-input>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Password</label>
                                <ValidationProvider rules="required" name="password" v-slot="{ errors, invalid, validated }">
                                    <q-input 
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'" 
                                        name="password" 
                                        type="password" 
                                        label="Please enter password." 
                                        dark 
                                        dense 
                                        v-model="form.password">
                                    </q-input>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Confirm Password</label>
                                <ValidationProvider rules="required|confirmed:password" name="confirmation" v-slot="{ errors, invalid, validated }">
                                    <q-input 
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"  
                                        name="confirmation" 
                                        type="password" 
                                        label="Please enter password." 
                                        dark 
                                        dense 
                                        v-model="form.confirmPassword">
                                    </q-input>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Mobile Number</label>
                                <ValidationProvider rules="required" v-slot="{ errors, invalid, validated }">
                                    <q-input 
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                        label="Please enter mobile number."
                                        type="number"
                                        dark 
                                        dense 
                                        v-model="form.mobileNumber">
                                    </q-input>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>E-mail Address</label>
                                <ValidationProvider rules="required|email" v-slot="{ errors, invalid, validated }">
                                    <q-input 
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                        label="Please enter e-mail address." 
                                        dark 
                                        dense 
                                        v-model="form.emailAddress">
                                    </q-input>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Identify no</label>
                                <ValidationProvider rules="required" v-slot="{ errors, invalid, validated }">
                                    <q-input 
                                        :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                        label="Please enter correct ID number." 
                                        dark 
                                        dense 
                                        v-model="form.idNo">
                                    </q-input>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Referral</label>
                                    <q-input 
                                        standout="bg-yellow-9 text-white"
                                        label="Please enter referral username." 
                                        dark 
                                        dense 
                                        v-model="form.referral">
                                    </q-input>
                                <span class="text-grey-1">
                                    <small>Leave it blank if no referral.</small>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12">
                            <div class="q-pa-md">
                                <label>Verification Code</label>
                                <ValidationProvider rules="required" v-slot="{ errors, invalid, validated }">
                                    <div class="input-container">
                                        <q-input 
                                            class="input-verification" 
                                            :standout="invalid && validated ? 'bg-yellow-9 text-negative': 'bg-yellow-9 text-white'"
                                            label="Verification Code." 
                                            dark 
                                            dense 
                                            v-model="form.verificationCode">
                                        </q-input>
                                        
                                        <div class="right-text">
                                            <span class="text-h6">2678</span>
                                        </div>
                                    </div>
                                    <span class="text-negative">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="column justify-center items-center q-my-sm">
                        <ValidationProvider rules="agree" v-slot="{ errors, invalid, validated }">
                            <div class="column items-center q-mb-sm">
                                <div class="row items-center">
                                    <q-checkbox label="I agree." dark v-model="form.iAgree" ></q-checkbox>
                                    <span class="text-amber-13">OCMS Terms & Conditions</span>
                                </div>
                                <span class="text-negative" style="text-align: center;">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                        <div class="row justify-center full-width">
                            <div class="col-md-3 col-sm-12 col-12">
                                <q-btn class="q-my-md full-width register-button" label="Register" type="submit" size="lg" color="yellow-9" rounded></q-btn>
                            </div>
                        </div>
                    </div>
                </form>
            </ValidationObserver>
        </div>

        <div class="blank-circles">
            <div class="blank-circle"></div>
            <div class="blank-circle"></div>
            <div class="blank-circle"></div>
        </div>
    </div>
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
            value: "",
            form: {
                iAgree: false,
                userName: "",
                password: "",
                confirmPassword: "",
                mobileNumber: "",
                emailAddress: "",
                idNo: "",
                referral: "",
                verificationCode: ""
            }
        }
    },
    methods: {
        submitForm() {
            alert('Form is Validated!')
        }
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
        z-index: 0; /* Behind the content */
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
    .input-container .input {
        border-top-right-radius: 0 0 !important;
        border-bottom-right-radius: 0 0 !important;
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