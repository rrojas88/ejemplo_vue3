
import { reactive, watch } from 'vue'
// axios...

export const api = {
  getCategorias: async ( ) => {
    let categorias = await localStorage.getItem('categorias')
    if( categorias === undefined || categorias === null ){
      categorias = []
    }else{
      categorias = JSON.parse( categorias )
    }
    console.log('Api cates: ', categorias)
    return categorias
  },
  postCategorias: async ( data ) => {
    const strData = JSON.stringify( data )
    await localStorage.setItem('categorias', strData)
  }
}

export const useGetCates = () => {
  const state = reactive({
    grid: []
  })
  watch(
    async () => {
      const res = await localStorage.getItem('categorias')
      let categorias = JSON.parse( res )
      state.grid = categorias
    });
    return state;
};
