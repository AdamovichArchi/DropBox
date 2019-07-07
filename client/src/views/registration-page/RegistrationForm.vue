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

        <!-- Email -->
        <v-text-field
            v-model         = "profile.email"
            class           = "email-field"
            :error-messages = "emailErrors"
            label           = "Email"
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
        
        <!-- Link to sign-in -->
        <v-btn 
            class = "sign-in-submit"
            to    = "/sign-in"
            flat 
            small 
        >
            signin
        </v-btn>

        <!-- Submit registration -->        
       <v-btn
            class = "sign-in-button mt-5"
            type  = "submit"
            block
            large
        > 
            Registration
        </v-btn>
    </form>
</template>
<script>

import { required } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            showPassword: false,

            profile: {
                password : '',
                login    : '',
                email    : ''
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
            },
            emailErrors() {
                const errors = [];

                if (!this.$v.profile.email.$dirty) return errors;
                !this.$v.profile.email.required && errors.push('Email is required');

                return errors; 
            },
    },
    validations: {
        profile: {
            login    : { required },
            password : { required },
            email    : { required }
        }
    },
    methods: {
        validateForm() {
            this.$v.$touch();

            if (this.$v.$invalid) return;
        }
    }
  
}
</script>

<style lang="scss" scoped>
    .sign-in-submit {
        float          : right;
        margin         : 0;
        padding        : 0;
        text-transform : lowercase;
        font-family    : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    }
</style>


