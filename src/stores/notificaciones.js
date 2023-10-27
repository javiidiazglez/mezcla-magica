import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

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