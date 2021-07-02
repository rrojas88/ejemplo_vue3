<template lang="html">
  <div>
    <p>Pad del form..</p>
    <Crud
    :msg="mensaje"
    :laFuncionCrud="funcionLog"
    @laFuncionCrud2="funcionLog2"
    />
    <div class="d-flex justify-content-between">
      <i class="fas fa-adjust"></i>
      <span>Ejemplo alinear en una fila</span>
      <button type="button">botón</button>
    </div>
  </div>
</template>

<script>

import Crud from './Crud.vue'

  export default {
    name: 'Test',
    components: {
      Crud
    },
    setup(){
      let mensaje = 'Form Categorias'
      const funcionLog = () => {
        console.log('Soy una funcion desde CRUD..')
      }
      const funcionLog2 = () => {
        console.log('Soy la funcion 2 desde CRUD..')
      }
      return {
        mensaje,
        funcionLog,
        funcionLog2
      }
    }
  }
</script>

<style lang="css">
</style>
