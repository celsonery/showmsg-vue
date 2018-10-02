<template>
    <v-content>
        <v-container fluid color="grey" class="scroll" id="scrolled-content">
            <v-layout row wrap v-if="mensagens">
                <v-flex xs12 v-for="msg in mensagens" :key="msg.id" class="msg_whatsapp2">
                    <div>
                        <div class="msg_whatsapp">
                            <div class="txt" v-html="msg.txt"></div>
                            <div class="hora">{{ msg.hora.getHours() }}:{{ msg.hora.getMinutes() }}
                                <v-icon class="done">done_all</v-icon>
                            </div>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import { eventBus } from "../main"

    export default {
        name: "body-msg",

        data() {
            return {
                mensagens: []
            }
        },

        mounted() {
            var vm = this;

            eventBus.$on('send-message', function (msg) {
                vm.recvMsg(msg);
            });

            eventBus.$on('clear-messages', function () {
                vm.clearMsg();
            })
        },

        updated() {
            this.scrollToEnd();
        },

        methods: {
            recvMsg(msg) {
                this.mensagens.push(msg);
            },
            clearMsg() {
                this.mensagens = [];
            },
            scrollToEnd() {
                var container = document.querySelector('.scroll');
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            }
        }
    }
</script>

<style scoped>
    #scrolled-content {
        max-height: 510px;
        overflow: scroll;
        margin-bottom: 10px;
    }
    .msg_whatsapp {
        padding-left: 3px;
        padding-right: 3px;
        float: left;
        background-color: #ffffff;
        border-radius: 5px;
        background-size: auto;
    }

    .msg_whatsapp2 {
        padding: 2px;
    }

    .txt {
        border: 1px solid transparent;
    }

    .hora {
        margin-top: -5px;
        float: right;
        font-size: 10px;
        color: darkgray;
        border: 1px solid transparent;
        bottom: 0px;
    }

    .done {
        margin-top: -3px;
        margin-left: 2px;
        float: right;
        font-size: 15px;
        color: #00b0ff;
        border: 1px solid transparent;
        bottom: 0px;
    }
</style>