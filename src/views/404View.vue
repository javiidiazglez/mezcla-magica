
  
<script>
export default {
  name: '404View',
};
</script>
  
<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-row justify-center items-center my-16">
      <div class="text-center">
        <h1 class="text-6xl font-extrabold text-red-500 mb-4">¡Oops!</h1>
        <p class="text-2xl text-gray-600 mb-8">Parece que te has perdido...</p>
        <RouterLink to="/" class="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700">Volver a la página
          de inicio</RouterLink>
      </div>
    </div>
  </div>
</template>

  