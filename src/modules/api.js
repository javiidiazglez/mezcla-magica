import axios from 'axios'

/**
 * Configuración de la instancia de Axios para interactuar con el servicio de recetas de bebidas.
 *
 * @type {import('axios').AxiosInstance}
 */
const api = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

export default api