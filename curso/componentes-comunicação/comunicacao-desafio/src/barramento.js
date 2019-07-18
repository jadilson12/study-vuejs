import Vue from 'vue'
export default new Vue({
    methods:{
        selecionarUsuario(usuario) {
            this.$emit('mudouUsuario', usuario)
        },
        onSelecionarUsuario(callback){
            this.$on('mudouUsuario', callback)
        }
    
    }
})