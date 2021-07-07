
import { reactive } from 'vue'

export const regs = {
  categoria: {
    id: '',
    name: '',
    state: ''
  }
}

const store = reactive({
  categorias: {
    grid: [],
    msGrid:[],
    reg: {}
  }
})

export const actions = {
  categorias: {
    get: ()=>{ return state.categorias },
    set: {
      grid: ( data ) => { state.categorias.grid = data },
      msGrid: ( data ) => { state.categorias.msGrid = data },
      reg: ( data ) => { state.categorias.reg = data },
    }
  }
}
/*
module.export = {
  regs,
  actions
}*/
