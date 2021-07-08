
import { reactive, watch } from 'vue'
// axi...

export const api = {
  getCategorias: async ( ) => {
    let categorias = await localStorage.getItem('categorias')
    if( categorias === undefined || categorias === null ){
      categorias = []
    }else{
      categorias = JSON.parse( categorias )
    }
    //console.log('Api cates: ', categorias)
    return categorias
  },
  postCategorias: async ( data ) => {
    const strData = JSON.stringify( data )
    await localStorage.setItem('categorias', strData)
  }
}

export const tablas = [
  {
    'tabla1': [
      { 'nombre': 'id', tipo: 'int', extra: 'not null' },
      { 'nombre': 'name', tipo: 'text', extra: 'not null' },
      { 'nombre': 'price', tipo: 'int', extra: 'null' },
    ]
  },
  {
    'cates': [
      { 'nombre': 'id', tipo: 'int', extra: 'not null' },
      { 'nombre': 'name', tipo: 'text', extra: 'not null' },
      { 'nombre': 'state', tipo: 'text', extra: 'null' },
    ]
  }
]

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
