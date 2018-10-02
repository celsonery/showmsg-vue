<template>
    <v-app class="bodyapp">
        <tools-bar />
        <body-msg />
        <send-bar />
    </v-app>
</template>

<script>
    import { ToolsBar, BodyMsg, SendBar } from './components/'

    export default {
        name: 'App',
        components: {
            ToolsBar,
            BodyMsg,
            SendBar
        },
        data() {
            return {
                wallpaper: '',
            }
        }
    }
</script>
<style scoped>
    .bodyapp {
        background-image: url("./assets/wallpaper.jpg");
        background-size: cover;
    }
    .tools {
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        height: 40px;
        margin-top: 0px;
        padding: 0px;
    }
</style>