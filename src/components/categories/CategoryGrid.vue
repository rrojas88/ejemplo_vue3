<template>
  <div>
    <p>Grid Categorias.</p>
	
     <pre>{{grid}}</pre>
	<!-- -->
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
            <button type="button" @click="editRow(item)" >
              Editar</button>
            <button type="button" @click="deleteRow(index)" >
              Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  name: 'CategoryGrid',
  props:{
    grid: { type: Array, default: [] },
    edit: { type: Function },
    delete: { type: Function },
  },
  setup( props ) {
    
	let grid = ref( props.grid )

	watchEffect( async () => {
      console.log('watchEffect hijo: ', grid.value)
    })

    const editRow = ( item ) => {
      console.log( 'Hijo: ', item )
      props.edit( item )
    }
    const deleteRow = ( indx ) => {
      console.log( 'Hijo: ', indx )
      props.delete( indx )
    }

    return {
      grid,
      deleteRow,
      editRow,
    }
  }
}
</script>

<style lang="css">
</style>
