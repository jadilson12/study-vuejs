new Vue({
	el: '#desafio',
	data: {
		opcao: false,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		cores: ['Preto', 'Rosa', 'Verde', 'Roxo'],
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		methods: {
			alterar() {
				this.opcao = !this.opcao
			}
		},

	}
});
