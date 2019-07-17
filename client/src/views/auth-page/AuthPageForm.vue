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
        <!-- Link to registration -->
        <v-btn 
            class = "registration-submit"
            to = "/registration"
            flat 
            small 
        >
            registration
        </v-btn>
        
        <!-- Submit button -->
        <v-btn
            class     = "sign-in-button mt-5"
            type      = "submit"
            :disabled = "disableButton"
            block
            large
        > 
            Sign in
        </v-btn>

        <!-- Snackbar -->
        <Snackbar></Snackbar>
    </form>
</template>
<script>

import { required } from 'vuelidate/lib/validators'
import auth from '@/api/users/authentication'
import { mapMutations, mapState } from 'vuex'

const Snackbar = () => import(
    /* webpackChunkName: 'base-snackbar' */ '@/components/widgets/snackbar/Snackbar.vue'
);

export default {
    components: { Snackbar },
    data() {
        return {
            showPassword: false,
            disableButton: false,

            profile: {
                password : '',
                login    : ''
            }
        }
    },
    computed: {
        ...mapState('auth', {
            user: state => state.user
        }),
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
        ...mapMutations('auth', ['uploadUser']),

        async validateForm() {
            this.$v.$touch();

            if (this.$v.$invalid) return;
            
            try {
                this.disableButton = true;

                let checkRegistration = await auth.signIn(this.profile)
                let jsonDataOfuser = JSON.stringify(checkRegistration.data)

                localStorage.setItem('user', jsonDataOfuser);

                this.uploadUser(checkRegistration.data);
                this.showInfoSnackbar('You are loggined.');
                
                setTimeout(() => {
                    this.disableButton = false;
                    this.$router.push('/dropbox');
                }, 2000);
            } catch(error) {
                this.disableButton = false;

                this.showInfoSnackbar('Invalid login or password.');
            }
        }
    }
  
}
</script>

<style lang="scss" scoped>
    .registration-submit {
        float          : right;
        margin         : 0;
        padding        : 0;
        text-transform : lowercase;
        font-family    : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    }
</style>


