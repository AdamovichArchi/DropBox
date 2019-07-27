<template>
    <v-flex>
        <strong class = "font-weight-thin body-2">
            {{ Math.ceil(currentSize) }} GB / {{ Math.ceil(maxSize) }} GB
        </strong>
        <v-progress-linear
        v-model = "currentSize"
        height  = "5"
        reactive
        >
        </v-progress-linear>
    </v-flex>
</template>

<script>
    export default {
        data() {
            return {
                currentSize : 50,
                maxSize     : 100
            }
        }
    }
</script>