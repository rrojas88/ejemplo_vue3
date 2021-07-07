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
import { ref, watchEffect } from 'vue'
import  { api } from '../../config/services.js'
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
    let category = ref({
      id: '',
      name: '',
      state: ''
    })

    let grid = ref([])
    //grid.value.push({id: 1, name: 'Categ 1', state: 'Activo'})
    //grid.value.push({id: 2, name: 'Categ dosss', state: 'Activo'})
    //grid = api.getCategorias()
    //console.log('Categoriass....', grid)
    watchEffect( async () => {
      grid.value = await api.getCategorias()
      console.log('Categoriasssss....', grid)
      return { grid }
    })

    const save = async () => {
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
