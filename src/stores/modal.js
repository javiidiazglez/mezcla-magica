import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFavoritosStore } from './favoritos'
import { useBebidasStore } from './bebidas'

/**
 * Define el store 'modal' para gestionar la funcionalidad del modal.
 *
 * @function
 * @name useModalStore
 * @returns {ModalStore}
 */
export const useModalStore = defineStore('modal', () => {

  const favoritos = useFavoritosStore()
  const bebidas = useBebidasStore()
  const modal = ref(false)

  /**
   * Maneja la apertura y cierre del modal.
   */
  function handleClickModal() {
    modal.value = !modal.value
  }

  /**
    * Computed property que devuelve el texto del botón en el modal basado en si la bebida actual está en favoritos.
    *
    * @type {string} - Puede ser 'Agregar a favorito' o 'Eliminar de Favorito'.
    */
  const textoBotom = computed(() => {
    return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de Favorito' : 'Agregar a favorito'
  })

  return {

    modal,
    handleClickModal,
    textoBotom
  }
})