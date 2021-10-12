<script>
  export default {
    async asyncData({ $content, params }) {
      const estudios = await $content('estudios', params.slug).fetch()
      const peliculas = await $content('peliculas').where({ estudioId: params.slug }).fetch()
      return { estudios, peliculas }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+estudios.image">
     </div>
     <div class="six columns">
       <h4>{{estudios.name}}</h4>
	   País: {{estudios.country}}</br>
	   <b>Historia</b></br>
	   <nuxt-content :document="estudios" />
	 </div>
	 <div class="three columns"></div>
	   <h5>Películas</h5>
	   <ul>
	     <li v-for="pelicula of peliculas" :key="pelicula.slug">
		   <NuxtLink :to="'/peliculas/'+pelicula.slug">{{pelicula.name}}</NuxtLink></br>
	     </li>
	   </ul>

   </div>
   <FooterView />
 </div>
</template>