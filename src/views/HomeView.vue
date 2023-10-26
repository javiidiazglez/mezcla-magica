<script setup>
import { useBebidasStore } from "../stores/bebidas";
import Receta from "../components/Receta.vue";

const bebidas = useBebidasStore();
</script>
<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <p v-if="bebidas.noRecetas" class="my-12 text-center font-extrabold text-red-500 text-4xl">
    No hay Resultados. Utiliza el formulario para más buscar recetas.
  </p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <Receta v-for="receta in bebidas.recetas" :receta="receta" :key="receta.idDrink" />
  </div>
</template>
<!-- <h1 class="text-6xl font-extrabold text-red-500 mb-4">¡Oops!</h1> -->
