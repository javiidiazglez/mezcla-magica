import api from '../modules/api'

/**
 * Módulo que contiene funciones para interactuar con un servicio de recetas de bebidas.
 *
 * @module APIService
 */

export default{

    /**
    * Obtiene la lista de categorías de bebidas.
    *
    * @function
    * @name obtenerCategorias
    * @returns {Promise} Una promesa que resuelve a los datos de las categorías de bebidas.
    */
    obtnerCategorias(){
        return api.get('/list.php?c=list')
    },

    /**
     * Busca recetas de bebidas según una categoría y un nombre.
     *
     * @function
     * @param {Object} opciones - Opciones de búsqueda.
     * @param {string} opciones.categoria - Categoría de bebida a buscar.
     * @param {string} opciones.nombre - Nombre de la bebida a buscar.
     * @returns {Promise} Una promesa que resuelve a los datos de las recetas de bebidas encontradas.
     */
    buscarRecetas({categoria, nombre}){
       return api.get(`filter.php?c=${categoria}&i=${nombre}`)
    },

    /**
     * Busca una receta de bebida por su ID.
     *
     * @function
     * @param {number} id - ID de la receta de bebida a buscar.
     * @returns {Promise} Una promesa que resuelve a los datos de la receta de bebida encontrada.
     */
    buscarReceta(id) {
        return api(`/lookup.php?i=${id}`)
    }

}
