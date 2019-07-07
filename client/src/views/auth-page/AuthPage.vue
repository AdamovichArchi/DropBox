<template>
  <v-app
    class = "app-wrapper"
    dark
  >
    <v-container
      class = "sign-in-page-wrapper"
      fluid
      full-height
    >
      <v-layout 
        align-center 
        justify-center
        column
      >
      <!-- Title -->
        <v-flex
          class = "display-3 font-wight-thin mb-5"
        >
          DropBox
        </v-flex>

        <!-- Form -->
        <v-flex
          class = "sign-in-page-wrapper__form mx-5 mt-5"
          shrink
        >
          <AuthForm></AuthForm>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

import AuthForm from './AuthPageForm'

export default {
  components: { AuthForm } 
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position : absolute;
    width    : 100%;
    
    .sign-in-page-wrapper {
      flex: none;
    }
  }

  .sign-in-page-wrapper__form {
    width     : 25rem;
    max-width : 25rem;
  }
</style>


