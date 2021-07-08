
import { reactive } from 'vue'

export const regs = {
  categoria: {
    id: '',
    name: '',
    state: ''
  }
}

const state = reactive({
  categorias: {
    grid: [],
    msGrid:[],
    reg: {}
  }
})

export const actions = {//stor
  categorias: {
    grid: {
      set: ( data ) => { state.categorias.grid = data },
      add: ( data ) => { state.categorias.grid.push( data ) },
      get: ( data ) => { return state.categorias.grid },
      del: ( data ) => { state.categorias.grid.splice( data, 1 ); },
      put: ( data ) => {
        const gridUpdated = state.categorias.grid.map( row => {
          if( +row.id === +data.id ) return data
          else return row
        })
        state.categorias.grid = gridUpdated
      },
    },
    msGrid: {
      set: ( data ) => { state.categorias.msGrid = data },
      get: ( data ) => { return state.categorias.msGrid },
      filter: ( data ) => {
        if( state.categorias.msGrid.length != 0 ){
          const columns = Object.keys( state.categorias.msGrid[0] )
          const msGridFilter = state.categorias.msGrid.filter( row => {
            let i
            for( i in columns ){
              let column = columns[ i ]
              let value = row[ column ] + ''
              if( value.indexOf( data ) != -1 ){
                return row
              }
            }
          })
          state.categorias.msGrid = msGridFilter
        }
        else{
          state.categorias.msGrid = state.categorias.grid
        }
      },
    }
  }
}
