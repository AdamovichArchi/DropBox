import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('snackbar');

const SnackbarPlugin = {
    /** 
     * Injects snackbar methods into all components.
     * @param {object} Vue - The Vue instance. 
     */
    install(Vue) {
        Vue.mixin({
            methods: {
                ...mapMutations([ 'showErrorSnackbar', 'showInfoSnackbar' ])
            }
        });
    }
};

export default SnackbarPlugin;
