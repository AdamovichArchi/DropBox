<template>
    <v-app class = "inspire">    
        <v-navigation-drawer
            v-model = "isMainSidenavOpened"
            width   = "300"
            app 
            clipped 
            fixed
            floating

        >
            <AppSidenav></AppSidenav>

            <template v-slot:append>
                <v-flex 
                    class = "progress-linear" 
                    xs10
                >
                    <AppPogressLinear></AppPogressLinear>
                </v-flex>
                <v-flex 
                    class = "block-exit-btn" 
                    xs8 
                    mb-5
                >
                    <v-btn 
                        class = "block-exit-btn__exit-btn" 
                        color = "#424242" 
                        block
                    >
                        <v-icon 
                            color = "#00B5F9" 
                            size  = "20" 
                            left
                        >
                            arrow_upward
                        </v-icon>
                        <strong class = "font-weight-thin">Logout</strong>
                    </v-btn>
                </v-flex>
            </template>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    import AppSidenav       from '@/views/main-page/main-page-sidenav/Sidenav.vue'
    import AppPogressLinear from '@/components/progress-linear/ProgressLinear.vue'

    export default {
        components: {
            AppSidenav,
            AppPogressLinear 
        },
        data() {
            return {
                isMainSidenavOpened: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress-linear {
        margin        : auto;
        margin-bottom : 6rem;
    }
    
    .block-exit-btn {
        margin: auto;   
    }

    .block-exit-btn__exit-btn {
        border: 1px solid #00B5F9 !important;
    }
</style>