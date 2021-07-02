<template lang="html">
  <div>
    <p>Login</p>
    <form >
      <div>
        <label >User</label>
        <input type="text" name="nick"
          v-model="user.nick"
        />
      </div>
      <div>
        <label >Estado</label>
        <input type="password" name="pass"
          v-model="user.pass"
        />
      </div>
      <div>
        <button type="button" name="button"
        @click="entrar"
        >
            Entrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
  export default {
    setup(){
      let user = ref({
        nick: '',
        pass: ''
      })

      const entrar = () =>{
        console.log(`${user.value.nick} == ${user.value.pass} `)
      }

      return {
        user,
        entrar
      }
    }
  }
</script>

<style scoped>
</style>
