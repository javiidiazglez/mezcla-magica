import { ref, watch, onMounted, computed } from 'vue'

import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from './modal'
import { useNotificacionStore } from './notificaciones'

/**
 * Store para gestionar las bebidas favoritas.
 *
 * @typedef {Object} FavoritosStore
 * @property {Function} handleClickFavorito - Función para manejar la acción de agregar o eliminar una bebida de favoritos.
 * @property {Array} favoritos - Lista de bebidas favoritas.
 * @property {Function} existeFavorito - Función para verificar si una bebida ya está en favoritos.
 * @property {boolean} noFavoritos - Indica si no hay bebidas en la lista de favoritos.
 */

/**
 * Define el store 'favoritos' para gestionar las bebidas favoritas.
 *
 * @function
 * @name useFavoritosStore
 * @returns {FavoritosStore}
 */
export const useFavoritosStore = defineStore('favoritos', () => {

  const bebidas = useBebidasStore()
  const modal = useModalStore()
  const notificaciones = useNotificacionStore()
  const favoritos = ref([])

  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
  })

  /**
    * Observa los cambios en la lista de favoritos y sincroniza con el almacenamiento local.
    */
  watch(favoritos, () => {
    sincronizarLocalStorage()
  }, {
    deep: true
  })

  /**
    * Sincroniza la lista de favoritos con el almacenamiento local.
    */
  function sincronizarLocalStorage() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }
  /**
   * Comprueba si la bebida actual ya está en la lista de favoritos.
   *
   * @returns {boolean} - True si la bebida está en favoritos, false en caso contrario.
   */
  function existeFavorito() {
    const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
    return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
  }

  /**
   * Elimina la bebida actual de la lista de favoritos y muestra una notificación.
   */
  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
    notificaciones.mostrar = true
    notificaciones.texto = 'Eliminado de Favoritos'
  }
  /**
    * Agrega la bebida actual a la lista de favoritos y muestra una notificación.
    */
  function agregarFavorito() {
    favoritos.value.push(bebidas.receta)
    notificaciones.mostrar = true
    notificaciones.texto = 'Se agregó a favoritos'
  }

  /**
   * Maneja la acción de agregar o eliminar una bebida de favoritos y cierra el modal.
   */
  function handleClickFavorito() {
    if (existeFavorito()) {
      eliminarFavorito()
    } else {
      agregarFavorito()
    }
    modal.modal = false
  }
  /**
   * Computed property que indica si no hay bebidas en la lista de favoritos.
   *
   * @type {boolean}
   */
  const noFavoritos = computed(() => {
    return favoritos.value.length === 0
  })

  return {
    handleClickFavorito,
    favoritos,
    existeFavorito,
    noFavoritos
  }
})