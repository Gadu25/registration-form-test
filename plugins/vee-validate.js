import Vue from 'vue';
import { required, confirmed, length, email } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

extend('agree', {
    validate(value) {
        return value;
    },
    message: 'Please agree to Terms & Condition.'
});

extend("required", {
    ...required,
    message: "This field is required"
});

extend("email", {
    ...email,
    message: "This field must be a valid email"
});

extend("confirmed", {
    ...confirmed,
    message: "This field confirmation does not match"
});

extend("length", {
    ...length,
    message: "This field must have 2 options"
});
  
