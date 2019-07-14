new Vue({
    el: "#desafio",
    data: {
        nome: 'Pedro',
        idade: 16,
        image: 'https://img.r7.com/images/qual-e-o-verdadeiro-significado-da-bandeira-do-brasil-17042019090104090?dimensions=660x360'
    },
    methods: {
        multipicarIdade(){
            return this.idade * 3
        },
        randomico() {
            return Math.random()
        }
    },
})