new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            return alert('Alerta')
        },
        mudarValor(event) {
            this.valor = event.target.value
        },
 
    }
})