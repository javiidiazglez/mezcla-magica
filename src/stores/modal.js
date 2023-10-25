import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFavoritosStore } from './favoritos'
import { useBebidasStore } from './bebidas'

export const useModalStore = defineStore('modal', () => {

    const favoritos = useFavoritosStore()
    const bebidas = useBebidasStore()
    const modal = ref(false)

    function handleClickModal() {
        modal.value = !modal.value
    }
    const textoBotom = computed(() => {
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar de Favorito' : 'Agregar a favorito'
    })

    return {

        modal,
        handleClickModal,
        textoBotom
    }
})