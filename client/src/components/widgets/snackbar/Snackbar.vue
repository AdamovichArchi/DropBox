<template>
    <v-snackbar
        v-model = "showSnackbar"
        center
        top
    >
        <!-- Content -->
        <span> {{ snackbarElm.content }} </span>

        <!-- Action button -->
        <v-btn  
            :color = "snackbarElm.color" 
            @click = "hideSnackbar"
        > 
            OK 
        </v-btn>
    </v-snackbar>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';

    const { mapMutations, mapState } = createNamespacedHelpers('snackbar');
    export default {
         computed: {
            ...mapState([ 'snackbarElm' ]),

            showSnackbar: {
                get() {
                    return this.snackbarElm.isActive;
                },
                set() {
                    return this.hideSnackbar();
                }
            }
        },
        methods: {
            ...mapMutations([ 'hideSnackbar' ])
        }
    };
</script>