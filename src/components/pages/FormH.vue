<template>
  <div>
    <p>Form Hi.</p>
    <div>
      <button type="button" @click="mas" > + </button> |
      <button type="button" @click="menos" > - </button>
    </div>
    <div>
      <label >Precio</label>
      <input type="text" name="precio"
        v-model="precio"
      />
    </div>
    <!-- Precio: {{ precio }} -->
    <h3>Total a pagar: $ {{ verTotal }}</h3>
  </div>
</template>

<script>
import {
  ref, computed,
  onMounted, onUpdated, onUnmounted
} from 'vue';

  export default {
    name: 'FormH',
    props: {
      cant: { type: Number, default: 1 },
      //cant: Number,
      mas: Function,
      menos: Function,
      subirTotal: Function,
    },
    setup( props ){

      let precio = ref(0.0)
      let cant = ref(0)

      const verTotal = computed(() => {
        let total = precio.value * props.cant
        props.subirTotal( total )
        return total
      })

      // **************************
      // Ciclos de Vida
      onMounted(() => {
        console.log('Component Montado');
      })
      onUpdated(() => {
        console.log('Component Actualizado');
      })
      onUnmounted(() => {
        console.log('Component Destruido');
      })
      // **************************

      return {
        precio,
        verTotal
      }
    }
  }
</script>
