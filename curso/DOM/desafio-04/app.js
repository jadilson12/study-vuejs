new Vue({
	el: '#desafio',
	data: {
		classe01: 'destaque',
		contem:  true,
		classe03: '',
		classe04: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		width: 0,

	},
	methods: {
		iniciarEfeito(){
			setInterval(() => {
				this.classe01 = this.classe01 == 'destaque' ? 'encolher' : 'destaque'
			}, 500)
		},
			
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if( valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setContem(e) {
			if(e.target.value == "true"){
				this.contem = true
			} else if(e.target.value == "false") {
				this.contem = false
			}
		}
	}
})
