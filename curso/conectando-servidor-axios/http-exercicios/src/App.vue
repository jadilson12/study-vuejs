<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="m in mensagens"
		:key="m.texto"
		:variant="m.tipo">{{m.texto}}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="sm"
				v-model="usuario.nome"
				placeholder="Informe o nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="sm"
				v-model="usuario.email"
				placeholder="Informe o email">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
			size="sm"
			variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="sm"
			variant="success"
			class="ml-2">Obter dados</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios"
			:key="id">
			<strong>Nome: </strong> {{usuario.nome }} <br>
			<strong>email: </strong> {{usuario.email }} <br>
			<strong>ID: </strong> {{ id }} <br>
			<b-button variant="warning" size=sm
			@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size=sm
			@click="excluir(id)"
			class="ml-2">Excluir</b-button>

			</b-list-group-item>
		</b-list-group>

	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id]}
		},
		excluir(id) {
			this.$http.delete(`/usuario/${id}.json`)
			.then(() => this.limpar())
			.catch(err => {
				this.mensagens.push({
					texto: 'Problema para excluir',
					tipo: 'danger'
				})
			})
		
		},
		salvar() {
			this.$http.post('usuario.json', this.usuario)
			.then(() => {
				this.limpar()
				this.mensagens.push({
					texto: 'Salvado com sucesso !!!',
					tipo: 'success'
				})
			})
		},
		obterUsuarios() {
			this.$http.get('usuario.json').then(res =>{
				this.usuarios = res.data
			})
		}
	},
	// created() { 
	// 	this.$http.post('usuario.json', {
	// 		nome: 'Maria',
	// 		email: 'Dias', 
	// 	}).then(res => console.log(res))
	// },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
