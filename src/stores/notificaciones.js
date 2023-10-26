import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

/**
 * Store para gestionar notificaciones.
 *
 * @typedef {Object} NotificacionStore
 * @property {string} texto - Texto de la notificación.
 * @property {boolean} error - Indica si la notificación es de error.
 * @property {boolean} mostrar - Indica si se debe mostrar la notificación.
 */

/**
 * Define el store 'notificacion' para gestionar notificaciones.
 *
 * @function
 * @name useNotificacionStore
 * @returns {NotificacionStore}
 */
export const useNotificacionStore = defineStore('notificacion', () => {

  const texto = ref('')
  const error = ref(false)
  const mostrar = ref(false);
  
  /**
   * Observa cambios en la propiedad 'mostrar' y oculta la notificación después de 3 segundos.
   */
  watch(mostrar, () => {
    if (mostrar.value) {
      setTimeout(() => {
        texto.value = '',
          error.value = false,
          mostrar.value = false
      }, 3000)
    }
  })

  return {
    texto,
    error,
    mostrar,
  }
})