<template>
	<v-app>
		<Navigation/>
		<Toolbar/>
		<Content/>
		<Footer/>
	</v-app>
	
</template>

<script>
import Footer from './components/footer.vue'
import Navigation from './components/Navigation.vue'
import Toolbar from './components/Toolbar.vue'
import Content from './components/Content.vue'

export default {
	components: {
		Footer,
		Navigation,
		Toolbar,
		Content, 
	},
}
</script>
