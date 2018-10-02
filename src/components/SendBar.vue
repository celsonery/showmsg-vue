<template>
    <v-footer inset height="50" color="transparent" class="pa-2 mb-2" app>
        <v-layout row wrap>
            <v-flex xs10>
                <v-text-field class="send-text"
                              append-icon="attach_file camera_alt"
                              prepend-icon="tag_faces"
                              clear-icon="camera_alt"
                              type="text" placeholder="Digite aqui..."
                ></v-text-field>
            </v-flex>
            <v-flex xs2>
                <v-btn small fab color="teal" dark class="btn_mic" @click.stop="sendMsg()">
                    <v-icon size="30">mic</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    import { eventBus } from "../main";

    export default {
        name: "send-bar",

        data() {
            return {
                contador: 0,
                items: [
                    {id: 0, txt: 'A vida é um emaranhado de chamadas de celular', hora: null},
                    {id: 1, txt: 'E hashtags que eu não conheço', hora: null},
                    {id: 2, txt: 'E você, você está tão preso', hora: null},
                    {id: 3, txt: 'Em todas as luzes piscando e tons de discagem', hora: null},
                    {id: 4, txt: 'Eu admito que sou um pouco vítima <br>do sistema mundial também', hora: null},
                    {
                        id: 5,
                        txt: 'Mas eu encontrei a minha doce fuga <br />Quando eu estou sozinho com você',
                        hora: null
                    },
                    {id: 6, txt: 'Sintonize o som estático <br>Da cidade que nunca dorme', hora: null},
                    {id: 7, txt: 'Aqui no momento', hora: null},
                    {id: 8, txt: 'No lado escuro da tela', hora: null},
                    {id: 9, txt: 'Eu gosto da chuva de verão', hora: null},
                    {id: 10, txt: 'Eu gosto dos sons que você faz', hora: null},
                    {id: 11, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 12, txt: 'Ficamos tão desconectados', hora: null},
                    {id: 13, txt: 'Você é o meu refúgio', hora: null},
                    {id: 14, txt: 'Você é o meu lugar favorito', hora: null},
                    {id: 15, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 16, txt: 'Sim, estamos tão desconectados', hora: null},
                    {id: 17, txt: 'Mãos em torno da minha cintura', hora: null},
                    {id: 18, txt: 'Você está contando as colinas através dos lençóis', hora: null},
                    {id: 19, txt: 'E eu sou uma estrela cadente', hora: null},
                    {id: 20, txt: 'Um brilho iluminando essas ruas de algodão', hora: null},
                    {id: 21, txt: 'Eu admito que sou um pouco idiota por jogar pelas regras', hora: null},
                    {id: 22, txt: 'Mas eu encontro minha doce fuga quando estou sozinho com você', hora: null},
                    {id: 23, txt: 'Sintonize o som estático <br>Da cidade que nunca dorme', hora: null},
                    {id: 24, txt: 'Aqui no momento', hora: null},
                    {id: 25, txt: 'No lado escuro da tela', hora: null},
                    {id: 26, txt: 'Eu gosto da chuva de verão', hora: null},
                    {id: 27, txt: 'Eu gosto dos sons que você faz', hora: null},
                    {id: 28, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 29, txt: 'Ficamos tão desconectados', hora: null},
                    {id: 30, txt: 'Você é o meu refúgio', hora: null},
                    {id: 31, txt: 'Você é o meu lugar favorito', hora: null},
                    {id: 32, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 33, txt: 'Sim, estamos tão desconectados', hora: null},
                    {id: 34, txt: 'Desligue o rádio, esses programas de Tv tarde da noite', hora: null},
                    {id: 35, txt: 'Desligue o telefone e só fique aqui comigo', hora: null},
                    {id: 36, txt: 'Desligue o rádio, esses programas de Tv tarde da noite', hora: null},
                    {id: 37, txt: 'Desligue o telefone e só fique aqui comigo', hora: null},
                    {id: 38, txt: 'Eu gosto da chuva de verão', hora: null},
                    {id: 39, txt: 'Eu gosto dos sons que você faz', hora: null},
                    {id: 40, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 41, txt: 'Ficamos tão desconectados', hora: null},
                    {id: 42, txt: 'Você é o meu refúgio', hora: null},
                    {id: 43, txt: 'Você é o meu lugar favorito', hora: null},
                    {id: 44, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 45, txt: 'Sim, estamos tão desconectados', hora: null},
                    {id: 46, txt: 'Eu gosto da chuva de verão', hora: null},
                    {id: 47, txt: 'Eu gosto dos sons que você faz', hora: null},
                    {id: 48, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 49, txt: 'Ficamos tão desconectados', hora: null},
                    {id: 50, txt: 'Você é o meu refúgio', hora: null},
                    {id: 51, txt: 'Você é o meu lugar favorito', hora: null},
                    {id: 52, txt: 'Nós esquecemos do mundo', hora: null},
                    {id: 53, txt: 'Sim, estamos tão desconectados', hora: null}
                ]
            }
        },

        mounted() {
            var vm = this;

            eventBus.$on('clear-messages', function () {
                vm.resetContador();
            })
        },

        methods: {
            sendMsg() {
                if (this.contador != this.items.length) {
                    this.items[this.contador].hora = new Date();
                    eventBus.$emit('send-message', this.items[this.contador]);
                    this.contador = parseInt(this.contador) + 1;
                }
            },

            resetContador(){
                this.contador = 0;
            }
        }
    }
</script>

<style scoped>
    .send-text {
        background-color: #ffffff;
        border-radius: 25px;
        height: 50px;
        padding: 10px;
        padding-right: 25px;
    }

    .btn_mic {
        size: 40px;
    }

</style>