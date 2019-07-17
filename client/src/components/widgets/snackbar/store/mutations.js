const mutations = {
    /*  Hide snackbar element */
    hideSnackbar({ snackbarElm }) {
        snackbarElm.isActive = false;
    },

    /* Shows snackbar element with error message */
    showErrorSnackbar({ snackbarElm }, error) {
        if (error.length) {
            snackbarElm.color    = 'error';
            snackbarElm.content  = error;
            snackbarElm.isActive = true;
        }
    },

    /* Shows snackbar element with info message */
    showInfoSnackbar({ snackbarElm }, message = '') {
        if (message.trim().length) {
            snackbarElm.color    = 'primary';
            snackbarElm.content  = message;
            snackbarElm.isActive = true;
        }
    }
}


export default mutations;