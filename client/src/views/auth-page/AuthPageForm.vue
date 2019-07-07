<template>  
    <form
        autocomplete    = "off"
        @submit.prevent = "validateForm"
        novalidate
    >
            <!-- Login -->
        <v-text-field
            v-model         = "profile.login"
            label           = "Login"
            :error-messages = "loginErrors"
        ></v-text-field>

        <!-- Password -->
        <v-text-field
            v-model         = "profile.password"
            class           = "password-field"
            :type           = "showPassword ? 'text' : 'password'"
            :append-icon    = "showPassword ? 'visibility' : 'visibility_off'"
            @click:append   = "showPassword = !showPassword"
            :error-messages = "passwordErrors"
            label           = "Password"
        ></v-text-field>

        <!-- Submit button -->
        <v-btn
            class = "sign-in-button mt-5"
            type  = "submit"
            block
            large
        > 
            Sign in
        </v-btn>
    </form>
</template>
<script>

import { required } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            showPassword : false,
            profile: {
                password     : '',
                login        : ''
            }
        }
    },
    computed: {
            /**
             * Sets array of errors appeared during login validation.
             * @return {array} The array of errors.
             */
            loginErrors() {
                const errors = [];

                if (!this.$v.profile.login.$dirty) return errors;
                !this.$v.profile.login.required && errors.push('Login is required');

                return errors; 
            },
            passwordErrors() {
                const errors = [];

                if (!this.$v.profile.password.$dirty) return errors;
                !this.$v.profile.password.required && errors.push('Password is required');

                return errors; 
            }
    },
    validations: {
        profile: {
            login    : { required },
            password : { required }
        }
    },
    methods: {
        validateForm() {
            this.$v.$touch();

            if (this.$v.$invalid) return;
 
            console.log('Login: ', this.login)
            console.log('Password: ', this.password)
        }
    }
  
}
</script>


