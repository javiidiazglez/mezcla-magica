<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useBebidasStore } from "../stores/bebidas";
import { useNotificacionStore } from '../stores/notificaciones'

const route = useRoute();

const store = useBebidasStore();
const notificaciones = useNotificacionStore();

const paginaInicio = computed(() => {
  return route.name === "inicio";
});

const handleSubmit = () => {
  if (Object.values(store.busqueda).includes('')) {
    notificaciones.texto = 'Todos los campos son obligatorios'
    notificaciones.mostrar = true
    notificaciones.error = true
    return
  }

  store.obtenerRecetas()
}
</script>
<template>
  <header class="bg-image mx-auto" :class="{ header: paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <RouterLink :to="{ name: 'inicio' }" class="flex items-center">
            <img class="w-32" src="favicon.svg" alt="logotipo" />
            <h1 class="text-5xl font-extrabold text-white leading-tight ml-4">
              Mezcla Mágica
            </h1>
          </RouterLink>
        </div>

        <nav class="flex gap-8 text-white">
          <RouterLink :to="{ name: 'inicio' }" class=" uppercase font-bold" active-class="text-yellow-500">
            Inicio
          </RouterLink>
          <RouterLink :to="{ name: 'favorites' }" class=" uppercase font-bold" active-class="text-yellow-500">
            Favoritos
          </RouterLink>
          <RouterLink :to="{ name: 'contacto' }" class=" uppercase font-bold" active-class="text-yellow-500">
            Contacto
          </RouterLink>
        </nav>
      </div>
      <form v-if="paginaInicio" class="md:w-1/2 2xl:w-1/3 bg-gray-400 my-32 p-10 rounded-lg shadow space-y-6"
        @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <label class="block uppercase font-extrabold text-lg" for="ingrediente">Nombre o
            Ingredientes</label>
          <input type="text" id="ingrediente" class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingrediente: Ej. Vodka, Tequila, etc" v-model="store.busqueda.nombre" />
        </div>
        <div class="space-y-4">
          <label class="block uppercase font-extrabold text-lg" for="categoria">Categoría</label>
          <select id="categoria" class="p-3 w-full rounded-lg focus:outline-none" v-model="store.busqueda.categoria">
            <option value="">Seleccione categoría</option>
            <option v-for="categoria in store.categorias" :value="categoria.strCategory" :key="categoria.strCategory">
              {{ categoria.strCategory }}
            </option>
          </select>
        </div>
        <input type="submit"
          class="bg-green-600 hover:bg-green-500 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          value="Buscar Recetas" />
      </form>
    </div>
  </header>
</template>
<style>
.bg-image {
  background-image: url("/img/copa_cocktail.jpg");
  background-size: cover;
  background-position: center;

}

.header {
  background-image: url("/img/copa_cocktail.jpg");
  background-size: cover;
  background-position: center;
}
</style>
