<template>
  <div>
    <p>Grid Categorias.</p>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Categoria</th>
          <th>Estado</th>
          <th>Opción</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in grid" :key="index"
        >
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.state}}</td>
          <td>{{item.id}}
            <button type="button" @click="edit(item, index)" >
              Editar</button>
            <button type="button" @click="deleteRow(item.id, index)" >
              Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue'
import  { api } from '../../config/services.js'
import  { actions } from '../../config/store.js'

export default {
  name: 'CategoryGrid',
  props:{
    grid: { type: Array, default: [] },
    edit: { type: Function },
    delete: { type: Function },
  },
  setup( props ) {

    let grid = ref([])

    onMounted( async () => {
      let data = await api.getCategorias()
      actions.categorias.grid.set( data )
    })

	  watchEffect( async () => {
      grid.value = actions.categorias.grid.get()
    })

    const deleteRow = ( id, indx ) => {
      props.delete( id, indx )
    }

    return {
      grid,
      deleteRow,
    }
  }
}
</script>

<style lang="css">
</style>
