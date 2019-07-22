<template>
    <div class="usuario-edidar">
        <h3>Editar Usuario</h3>
        <p><strong>Id: {{ id }}</strong></p>
        <p><strong>{{$route.query.completo ? 'Sim' : 'Não'}}</strong></p>
        <p><strong> {{ $route.query.lingua }} </strong></p>
    </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style>

</style>
