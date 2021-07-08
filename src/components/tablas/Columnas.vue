<template>
  <div>
    Tabla: <strong>{{table}}</strong>
    <p>Columnas:</p>
    <ul>
      <li v-for="(cols, ind) in columnas"  :key="ind">
        <span @click="setColumna(cols)" > {{ cols.nombre }} </span> <br />
      </li>
    </ul>
    <!--
    {{ columnas }} -->
    <hr />
    <Campos />
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import  { actions } from '../../config/store.js'
import Campos from './Campos.vue'

export default {
  name: 'Columnas',
  components: {
    Campos,
  },
  setup() {

    let table = ref('')
    let columnas = ref([])


    watchEffect( () => {
      const data = actions.tabla.get()
      table.value = data.nombre
      columnas.value = data.columnas
      console.log('Columnas..: ', data )
    })

    const setColumna = ( col ) => {
      console.log('columan click: ', col )
      actions.columna.set( col )
    }

    return {
      table,
      columnas,
      setColumna
    }
  }
}
</script>

<style scoped>
hr{
  margin: auto;
  width: 70%;
}
</style>
