import { ref, reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'
import { useModalStore } from './modal'

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
   * Ejecuta una función cuando el componente está montado.
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