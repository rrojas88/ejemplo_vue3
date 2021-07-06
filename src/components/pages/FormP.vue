<template>
  <div>
    <p><strong>Form Pa. $ {{total}}</strong></p>
    <form>
      <div>
        <label >Cantidad</label>
        <input type="text" name="cantidad" size="3"
          v-model="cantidad"
        />
      </div>
    </form>
    <button type="button" @click="suma" > + </button>
    Cantidad: {{ cantidad }}
    <button type="button" @click="resta" > - </button>
    <hr width="90%" />
    <FormH
      :cant="+cantidad"
      :subirTotal="subirTotal"
      :mas="suma"
      :menos="resta"
      />
      <!-- la funcion con @ debe recibirse como "emit" -->
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import FormH from './FormH.vue'

export default {
  name: 'FormP',
  components: {
    FormH
  },
  setup(){
    let cantidad = ref(0)
    let total = ref(0)

// Convertia a Entero lo ingresado al input...no necesario
    let cantidadNoNecesaria = computed({
      //return + cantidad_.value
      get:() => +cantidad.value,
      set:(val) => {
          cantidad.value  = +cantidad.value
      }
    })

    const subirTotal = ( valor ) => {
      total.value = valor
    }

    const suma = () => {
      cantidad.value++
    }
    const resta = () => {
      cantidad.value--
    }

    return {
      cantidad,
      subirTotal,
      total,
      suma,
      resta
    }
  }
}
</script>

<style scoped>
div{
  color: green;
}
hr{
  border: 1px solid green;
  margin: auto;
  width: 80%;
}
</style>
