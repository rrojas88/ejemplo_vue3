<template>
  <div>
    <p>Tabla.</p>
    <ul>
      <li v-for="(tba, ind) in tables"  :key="ind">
        <template v-for="(info, key, indice) in tba" >
            <span @click="setTable(tba)" > {{ key }} </span>
        </template>
      </li>
    </ul>
    <hr />
    <Columnas />
  </div>
</template>

<script>
import { ref } from 'vue'
import { tablas } from '../../config/services.js'
import  { actions } from '../../config/store.js'

import Columnas from './Columnas.vue'

export default {
  name: 'Tablas',
  components: {
    Columnas
  },
  setup() {

    let table = ref('')
    let tables = ref([])
    tables = tablas

    const setTable = ( info ) => {
      let tab = Object.keys( info )[0]
      table.value = tab
      actions.tabla.set({
        nombre: tab,
        columnas: info[ tab ]
      })
      //
      actions.columna.set({
        nombre:'', tipo:'', extra:''
      })
    }

    return {
      tables,
      table,
      setTable
    }
  }
}
</script>

<style scoped>
hr{
  margin: auto;
  width: 90%;
}
</style>
