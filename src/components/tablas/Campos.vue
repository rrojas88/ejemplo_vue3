<template>
  <div>
    Columna: <strong>{{columna}}</strong>
    <p>Campos</p>
    <form>
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" v-model="form.nombre" />
      </div>
      <div>
        <label for="tipo">Tipo</label>
        <input type="text" v-model="form.tipo" />
      </div>
      <div>
        <label for="extra">Extra</label>
        <input type="text" v-model="form.extra" />
      </div>
    </form>
    <pre>{{campos}}</pre>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import  { actions } from '../../config/store.js'

export default {
  name: 'Campos',
  setup() {
    let columna = ref('')
    let campos = ref({})
    let form = ref({
      nombre: '',
      tipo: '',
      extra: '',
    })

    watchEffect( () => {
      const data = actions.columna.get()
      columna.value = data.nombre

      campos.value = data

      let dataForm = Object.assign({} , data ) // rompe Binding
      form.value = data
    })

    return {
      columna,
      campos,
      form,
    }

  }
}
</script>

<style lang="css">
</style>
