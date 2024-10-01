<template>
    <div class="container q-pa-md">
        <div class="text-center row justify-center q-my-md">
            <h4 class="logo q-px-md q-py-sm text-weight-bold text-yellow-12 q-inline">LOGO</h4>
        </div>
        <h4 class="q-mb-lg text-center text-weight-bold text-white">Free Registration</h4>
    
        <div class="nav-buttons row justify-center items-center">
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

        <div class="form-box">
            <div class="column justify-center items-center q-my-sm q-py-md">
                <p class="text-subtitle2">Continue With</p>
                <div class="socs">
                    <img src="~/assets/images/fb.svg" alt="facebook logo"/>
                    <img src="~/assets/images/google.svg" alt="google logo"/>
                </div>
                <p class="text-subtitle2 q-mt-md">or</p>
            </div>
            <div class="row content-space-between">
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Username</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Please enter username."></q-input>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Password</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Please enter password."></q-input>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Confirm Password</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Please enter password."></q-input>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Mobile Number</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="please enter mobile number."></q-input>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>E-mail Address</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Please enter e-mail address."></q-input>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Identify no</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Please enter correct ID number."></q-input>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Referral</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Please enter referral username."></q-input>
                        <span class="text-grey-1">
                            <small>Leave it blank if no referral.</small>
                        </span>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="q-pa-md">
                        <label>Verification Code</label>
                        <q-input standout="bg-yellow-9 text-white" dark label="Verification Code."></q-input>
                    </div>
                </div>
            </div>
            <div class="column justify-center items-center q-my-sm">
                <div class="row items-center q-mb-sm">
                    <q-checkbox label="I agree."></q-checkbox>
                    <span class="text-amber-13">OCMS Terms & Conditions</span>
                </div>
                <div class="row justify-center full-width">
                    <div class="col-md-4 col-sm-12 col-12">
                        <q-btn class="q-my-md full-width " label="Register" type="submit" size="lg" color="yellow-9" rounded></q-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegistrationForm',
        data(){
            return {

            }
        }
    }
</script>

<style>
    .container{
        /* height: 100vh; */
        background: linear-gradient(to bottom, #131A28, #592466);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .logo {
        background-color: #101825;
    }
    /* .nav-buttons:after {
        content: "";
        position: absolute;
        width: 600px;
        border-bottom: 1px solid white;
    } */
    span {
        cursor: pointer;
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
</style>