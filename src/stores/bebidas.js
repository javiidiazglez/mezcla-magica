import { ref, reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'
import { useModalStore } from './modal'

/**
 * Store para gestionar las bebidas.
 *
 * @typedef {Object} BebidasStore
 * @property {Array} categorias - Lista de categorías de bebidas.
 * @property {Object} busqueda - Objeto que contiene información de búsqueda de recetas.
 * @property {string} busqueda.nombre - Nombre de la bebida a buscar.
 * @property {string} busqueda.categoria - Categoría de la bebida a buscar.
 * @property {Array} recetas - Lista de recetas de bebidas.
 * @property {Object} receta - Receta de bebida seleccionada.
 * @property {boolean} noRecetas - Indica si no hay recetas disponibles.
 *
 * @property {Function} obtenerRecetas - Función para obtener recetas de bebidas.
 * @property {Function} seleccionarBebida - Función para seleccionar una bebida y mostrar su receta.
 */


/**
 * Define el store 'bebidas' para gestionar las bebidas.
 *
 * @function
 * @name useBebidasStore
 * @returns {BebidasStore}
 */
export const useBebidasStore = defineStore('bebidas', () => {

  const modal = useModalStore()
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: ''
  })

  const recetas = ref([])
  const receta = ref({})

   /**
   * Ejecuta una función cuando el componente es montado.
   * 
   */
  onMounted(async () => {
    const { data: { drinks } } = await (APIService.obtnerCategorias())
    categorias.value = drinks
  })
  /**
   * Selecciona una bebida y muestra su receta.
   *
   * @param {number} id - ID de la bebida seleccionada.
   */
  async function obtenerRecetas() {
    const { data: { drinks } } = await APIService.buscarRecetas(busqueda)
    recetas.value = drinks
  }

  /**
   * Selecciona una bebida y muestra su receta.
   *
   * @param {number} id - ID de la bebida seleccionada.
   */
  async function seleccionarBebida(id) {
    const { data: { drinks } } = await APIService.buscarReceta(id)
    receta.value = drinks[0]

    modal.handleClickModal()
  }
  /**
   * Computed property que indica si no hay recetas disponibles.
   *
   * @type {boolean}
   */
  const noRecetas = computed(() => {
    return recetas.value.length === 0
  })

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    seleccionarBebida,
    receta,
    noRecetas
  }
})