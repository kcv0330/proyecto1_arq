<template>
 <div class="container">
   <HeaderView />
   <h2 style="margin-top: 15px">Películas Animadas</h2>
	  <p>Esta sección presenta información de películas animadas, directores y estudios cinematográficos.</p>
    <ul class="lis_prin">
	  <li> <NuxtLink to="/peliculas_index">Información de Películas</NuxtLink></li>
	  <li> <NuxtLink to="/directores_index">Información de Directores</NuxtLink></li>
	  <li> <NuxtLink to="/estudios_index">Información de Estudios Cinematográficos</NuxtLink></li>
	</ul>
   <FooterView />
 </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>