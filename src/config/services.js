
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
