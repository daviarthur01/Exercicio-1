var vetClientes = []

const Cadastro = {
    data() {
        return {
            vetClientes: window.vetClientes,
            mensagem: "Cadastro Do Cliente",

            nome: "",
            idade: "",
            email: "",
            Objeto: {},

            guardinha: 0,
            posicao: ""
        }
    },
    methods: {
        salvar: function () {
            this.Objeto = {
                nome: this.nome,
                email: this.email,
                idade: this.idade,
            }

            this.vetClientes.push(this.Objeto)
            console.log(this.vetClientes)

            this.nome = ""
            this.email = ""
            this.idade = ""
        },


        excluir: function (i) {
            this.vetClientes.splice(i, 1)
            console.log(this.vetClientes)
        },


        editar: function (i) {
            this.nome = this.vetClientes[i].nome
            this.idade = this.vetClientes[i].idade
            this.email = this.vetClientes[i].email

            this.guardinha = 1
            this.posicao = i

        },


        salvarEdicao: function () {
            this.Objeto = {
                nome: this.nome,
                email: this.email,
                idade: this.idade,
            }

            this.vetClientes[this.posicao] = this.Objeto
            console.log(this.vetClientes)
            this.guardinha = 0

            return vetClientes


        }


    }
}

Vue.createApp(Cadastro).mount('#app')