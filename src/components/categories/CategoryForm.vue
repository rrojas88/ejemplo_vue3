<template>
  <div>
    <p>Categ Form.</p>
    <form >
      <div>
        <label for="id">Id</label>
        <input type="number" name="id" size="5"
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
        @click="save"> Guardar </button>
      </div>
    </form>
    {{category}}
    <br />
    {{ state.grid }}
    <hr />
    <CategoryGrid
      :grid="state.grid"
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
import  { api, useGetCates } from '../../config/services.js'
import CategoryGrid from './CategoryGrid.vue'

const _category = {
  id: '',
  name: '',
  state: ''
}

export default {
  name: 'Category',
  components: {
    CategoryGrid,
  },
  setup() {
    //let category = reactive({
    let category = ref({
      id: '',
      name: '',
      state: ''
    })

    let grid = ref([])
    //const state = reactive({ grid: [] })
    const state = useGetCates()
    
    onMounted( async () => {
      let data = await api.getCategorias()
      console.log('montado ....', data )
      //state.grid = data
      grid.value = data
    })

    const save = async () => {
      //state.grid.push( category )
      //await api.postCategorias( state.grid )
      grid.value.push( category.value )
      await api.postCategorias( grid.value )

      let categoryClean = _category
      category.value = categoryClean
    }

    const editP = (item) => {
      console.log('Padre Editara: ', item)
      category.value = item
    }
    const deleteP = (id) => {
      console.log('Borrara ID: ', id)
    }

    return {
      category,
      grid,
      state,
      save,
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
