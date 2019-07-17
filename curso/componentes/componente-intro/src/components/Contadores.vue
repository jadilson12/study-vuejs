<template>
    <div id="contadores">
         <h1>Contadores</h1>
        <contador></contador>
        <button>?</button>
    </div>
</template>

<script>
import Contador from './contador.vue'
export default {
    components: {'contador': Contador }
}
</script>

<style>

</style>
