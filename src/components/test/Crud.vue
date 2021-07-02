<template lang="html">
  <form >
    <h2>{{msg}}</h2>
    <div>
      <label >Nombre</label>
      <input type="text" name="nombre"
        v-model="nombre"
      />
    </div>
    <div>
      <label >Estado</label>
      <select name="estado">
        <option value="true">Activo</option>
        <option value="false">Inactivo</option>
      </select>
    </div>
    <div>
      Nombre: {{ nombre }}
      <br />
      Puntos: {{ puntos }}
    </div>
    <div>
      <button type="button" name="button"
      @click="guardar"
      >
          Guardar
      </button>
      <br />
      <button type="button" name="button"
      @click="mas10(10)"
      >
          + 10
      </button>
      <br />
      <button type="button" name="button"
      @click="laFuncionCrud"
      >
          Funcion desde CRUD
      </button>
      <button type="button" name="button"
      @click="execFun"
      >
          Ejecutar desde CRUD
      </button>
      <br />
      <button type="button" name="button"
      @click="execFun2"
      >
          Ejecutar desde CRUD 2
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

  export default {
    name: 'Crud',
    mounted() {
    },
    props: {
      msg: {
        type: String,
        default: 'Formulario..'
      },
      laFuncionCrud: Function
    },
    emits:[
      'laFuncionCrud2'
    ],
    setup ( props, context ){
      console.log('Propiedades', props )
      console.warn('Propiedades', context )
      const nombre = ''
      let puntos = ref( 0 )

      const guardar = () => {
        console.log('Peticion para guardar....')
      }
      const mas10 = ( p ) => {
        console.log(`Puntos: ${puntos.value} + ${p}`)
        puntos.value = puntos.value + p
      }

      const execFun = ( ) => {
        props.laFuncionCrud()
      }
      const execFun2 = ( ) => {
        console.log('llamado desde componente local..')
        context.emit('laFuncionCrud2')
      }

      return {
        nombre,
        puntos,
        guardar,
        mas10,
        execFun,
        execFun2
      }
    }
  }
</script>

<style>
</style>
