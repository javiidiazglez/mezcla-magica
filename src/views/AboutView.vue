

<script>
export default {
  name: 'AboutView'
}
</script>

<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <div class="w-2/3 flex flex-col">
        <div>
          <div class="flex flex-row items-center my-16">
            <div>
              <img src="../assets/perezoso.webp" class="h-auto max-w-sm rounded-full" alt="Javi">
            </div>
            <div class="flex flex-wrap mx-10">
              <p><span class="font-bold text-4xl">Javi</span></p>
              <p>"Mi pasión por la Informática me ha llevado a trabajar en proyectos personales que me han permitido
                desarrollar y perfeccionar mis habilidades.</p>
              <p>Además de ello, soy una persona que nunca deja de buscar oportunidades para crecer. Mi principal idea es
                enfrentarme en desafíos y aportar mi granito de arena.</p>
              <p>"Como dijo Albert Einstein, 'La mente que se abre a una nueva idea nunca volverá a su tamaño original'.
                Estoy aquí para expandir mi mente y mi trayectoria, ¿te unes a mi viaje?"</p>
              <a class="m-5" href="https://www.linkedin.com/in/javiidiazglez/"><img src="@/assets/linkedin-black.svg"
                  alt="linkedin"></a>
              <a class="m-5" href="https://github.com/javiidiazglez"><img src="@/assets/github-black.svg"
                  alt="github"></a>
              <a class="m-5" href="https://t.me/javiidiazglez"><img src="@/assets/telegram-black.svg" alt="telegram"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>