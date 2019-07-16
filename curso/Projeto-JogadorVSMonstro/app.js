new Vue({
    el:"#jogo",
    data: {
        jogador: 100,
        monstro: 100,
        logs: [],
        novoJogo: true,
    },
    computed: {
        resultado(){
            return this.jogador == 0 || this.monstro == 0  
        }
    },
    methods: {
        ataque() {
            this.ferir('jogador', 5, 10, false, 'jogador', 'monstro', 'player')
            if(this.monstro > 0){
                this.ferir('monstro', 7, 10, false, 'monstro', 'jogador', 'monstro')
            }
        },
        curarEAtaque(){
            this.curar(10, 15)
            this.ferir('jogador', 7, 12, false, 'monstro', 'jogador', 'monstro')
        },
        curar(valorMax, valorMin) {
            const curar = this.getValor(valorMin, valorMax)
            this.jogador = Math.min(this.jogador + curar, 100)
            this.listalogs(`jogador ganhou força de ${curar}`,'player')
            
        },
        ferir(player, valorMax, valorMin, especial,caminho,quem, estilo){
            const plus = especial ? 5 : 0
            const ferir = this.getValor(valorMin + plus, valorMax + plus)
            this[player] = Math.max(this[player]- ferir, 0)
            this.listalogs(`${caminho} atigiu ${quem} com ${ferir}.`, estilo)
        },
        desistir() {
            this.logs = [],
            this.jogador = 100,
            this.monstro = 100
            this.novoJogo = !this.novoJogo
        },
        getValor(valorMin, valorMax) {
            const valor = Math.random() * (valorMax - valorMin) + valorMin
            return Math.round(valor);
        },
        listalogs(text, estilo){
            this.logs.unshift({text, estilo})
        }
    },
    watch: {
        resultado(valor){
            if (valor) this.novoJogo = false
        } 
    },
})