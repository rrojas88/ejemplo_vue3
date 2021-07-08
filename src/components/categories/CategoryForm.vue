<template>
  <div>
    <p>Categ Form.</p>
    <form >
      <div>
        <label for="id">Id</label>
        <input type="number" name="id" size="5" readonly
          v-model="category.id" />
      </div>
      <div>
        <label for="name">Categoría</label>
        <input type="text" name="name"
          v-model="category.name" />
      </div>
      <div>
        <label for="state">Estado</label>
          <select v-model="category.state">
            <option value="">---</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
      </div>
      <div>
        <button type="button"
        @click="save"> Guardar </button> |
        <button type="button"
        @click="clean"> Limpiar </button>
      </div>
    </form>
    {{category}}
    <br />
    <!--
    {{ grid }} -->
    <hr />
    <CategoryGrid
      :grid="grid"
      :edit="editP"
      :delete="deleteP"
    />
    <div style="margin-bottom: 80px;">
    </div>
  </div>
</template>

<script>
import {
ref,
reactive,
watchEffect,
onMounted,
computed
} from 'vue'
import  { api } from '../../config/services.js'
import  { actions } from '../../config/store.js'
import CategoryGrid from './CategoryGrid.vue'

const _category = {
  id: 0,
  name: '',
  state: 'Activo'
}

export default {
  name: 'Category',
  components: {
    CategoryGrid,
  },
  setup() {
    //let category = reactive({
    let category = ref({
      id: 0,
      name: '',
      state: 'Activo'
    })

    let grid = ref([])

    onMounted( async () => {

    })

    const getRandomArbitrary = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min
    }

    const clean = () => {
      let categoryClean = Object.assign({} , _category )
      category.value = categoryClean
    }

    const save = async () => {
      let row = Object.assign({} , category.value)
      if( row.id == 0 ){
        const id = getRandomArbitrary(1, 1000)
        row.id = id
        actions.categorias.grid.add( row )
      }else{
        actions.categorias.grid.put( row )
      }
      const data = actions.categorias.grid.get()
      await api.postCategorias( data )

      let categoryClean = Object.assign({} , _category )
      category.value = categoryClean
    }

    const editP = ( item, indx ) => {
      //console.log('Padre reg-editar: ', item)
      let row = Object.assign({} , item )
      category.value = row
    }
    const deleteP = async ( id, indx ) => {
      actions.categorias.grid.del( indx )

      // Actualizar en el Server :
      const data = actions.categorias.grid.get()
      await api.postCategorias( data )

      let categoryClean = Object.assign({} , _category )
      category.value = categoryClean
    }

    return {
      category,
      grid,
      save,
      clean,
      editP,
      deleteP
    }
  }
}
</script>

<style scoped>
hr{
  border: 1px solid green;
  margin: auto;
  width: 80%;
}
</style>
