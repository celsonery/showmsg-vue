<template>
    <v-toolbar app color="#004D40" dark dense>
        <v-icon class="seta">arrow_back</v-icon>
        <v-btn fab small dark depressed color="grey lighten-4" elevation-0>
            <v-icon>group</v-icon>
        </v-btn>
        <div>
            <div><span class="subheading">Desconectados</span></div>
            <div>
                <v-icon class="caption">phone_iphone</v-icon>
                <span class="caption">,você</span></div>
        </div>

        <v-spacer></v-spacer>
        <v-menu offset-y>
            <v-btn icon slot="activator">
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title @click="reiniciar()">Reiniciar</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title @click.stop="fullscreen()">Fullscreen</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    import { eventBus } from "../main";

    export default {
        name: "toolbar",

        methods: {
            reiniciar(){
                eventBus.$emit('clear-messages');
            },
            fullscreen(){
                this.$emit('full-screen');
            }
        }
    }
</script>

<style scoped>
    .title_msg {
        font-size: 11px;
    }

    .turma {
        font-size: 10px;
    }

    .seta {
        margin-left: -10px;
        margin-right: -5px;
    }
</style>