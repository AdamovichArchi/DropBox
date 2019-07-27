<template>
    <v-list-item-group class = "menu-list">
        <v-subheader class = "menu-list__image-title mt-5">
            <v-img 
                :src   = "dropBoxLogoType"
                width  = "50"
                height = "50"
                contain
            ></v-img>    
        </v-subheader>
        <v-list-item
            class = "menu-list__list-items"
            v-for = "(menuItem, i) in menuItems"
            :key  = "i"
        >
            <v-list-item-icon>
                <v-icon dark> {{ menuItem.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title> {{ menuItem.text }} </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list-item-group>

</template>

<script>
    export default {
        data() {
            return { 
                menuItems: [
                    { text: 'Files',   icon: 'insert_drive_file' },
                    { text: 'Photos',  icon: 'insert_photo' },
                    { text: 'Sharing', icon: 'share' },
                    { text: 'Links',   icon: 'link' },
                    { text: 'Events',  icon: 'event' }
                ],
                dropBoxLogoType: require('@/assets/images/Dropbox.png')
            }
        }
    }
</script>

<style lang = "scss" scoped>
    .menu-list__image-title {
        margin-bottom   : 35px;
        justify-content : center;
    }
    
    .v-list-item__icon {
        margin-right: 20px;
    }

    .v-list-item.v-item--active {
        .v-list-item__content {
            color: #00B5F9;
        }
    }
  
    .v-list-item__content {
        color: #7E919B;
    }
</style>