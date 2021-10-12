<script>
  export default {
    async asyncData({ $content, params }) {
      const pelicula = await $content('peliculas', params.slug).fetch()
      const director = await $content('directores').where({ id: pelicula.directorId }).only(['name']).fetch()
      const estudio = await $content('estudios').where({ id: pelicula.estudioId }).only(['name']).fetch()
      return { pelicula, director, estudio }
    }
  }
</script>

<template>
  <div class="container">
  </br></br>
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+pelicula.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{pelicula.name}}</h4>
	   Director: <NuxtLink :to="'/directores/'+pelicula.directorId">{{director[0].name}}</NuxtLink></br>
	   Estudio: <NuxtLink :to="'/estudios/'+pelicula.estudioId">{{estudio[0].name}}</NuxtLink></br>
	   Año: {{pelicula.year}} </br>
	   <nuxt-content :document="pelicula" />
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>