<template>
  <v-app
    class = "app-wrapper"
  >
    <v-container
      class = "registration-page-wrapper"
      fluid
      fill-height
    >
      <v-layout 
        align-center 
        justify-center
        column
      >
      <!-- Title -->
        <v-flex
          class = "display-3 font-wight-thin mb-5 main-title-reg"
        >
          DropBox
        </v-flex>

        <!-- Form -->
        <v-flex
          class = "registration-page-wrapper__form mx-5 mt-5"
          shrink
        >
          <Registration></Registration>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

import Registration from './RegistrationForm'

export default {
  components: { Registration } 
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position : absolute;
    width    : 100%;
    
    .registration-page-wrapper {
      flex: none;
    }

    .main-title-reg {
      flex: none;
    }
  }

  .registration-page-wrapper__form {
    width     : 25rem;
    max-width : 25rem;
  }
</style>


