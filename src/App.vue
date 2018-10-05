<template>
    <v-app class="bodyapp">
	<fullscreen ref="fullscreen" @change="fullscreenChange">
        <tools-bar @full-screen="fulltoggle()" />
        <body-msg/>
        <send-bar/>
	</fullscreen>
    </v-app>
</template>

<script>
    import fullscreen from 'vue-fullscreen'
    import Vue from 'vue'
    import {ToolsBar, BodyMsg, SendBar} from './components/'

    Vue.use(fullscreen)

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
                fullscreen: false
            }
        },
        methods: {
            fulltoggle(){
                console.log('Alternando para fullscreen');
                this.$refs['fullscreen'].toggle()
                // this.fullscreen = !this.fullscreen
            },
            fullscreenChange(fullscreen){
                this.fullscreen = fullscreen
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

    .borda {
        width: 375px;
        height: 667px;
        background-color: black;
    }
</style>
