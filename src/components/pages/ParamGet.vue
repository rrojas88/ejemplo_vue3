<template lang="html">
  <div >
    <p>Parametro Get. ID = {{ $route.params.id }}</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log( 'Params Router' )
      //console.log( $route.params )
    },
    setup(){
      let id = 11
    }
  }
</script>
