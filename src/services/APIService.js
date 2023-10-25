import api from '../modules/api'

export default{
    obtnerCategorias(){
        return api.get('/list.php?c=list')
    },
    /**
     * Buscar Recetas
     * @param {*} param0 
     * @returns 
     */
    buscarRecetas({categoria, nombre}){
       return api.get(`filter.php?c=${categoria}&i=${nombre}`)
    },
    buscarReceta(id) {
        return api(`/lookup.php?i=${id}`)
    }

}
