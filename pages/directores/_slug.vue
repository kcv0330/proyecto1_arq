<script>
  export default {
    async asyncData({ $content, params }) {
      const director = await $content('directores', params.slug).fetch()
      const peliculas = await $content('peliculas').where({ directorId: params.slug }).fetch()
      return { director, peliculas }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+director.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{director.name}}</h4>
	   Nacionalidad: {{director.nationality}} 
	   Nacimiento: {{director.birth_year}}</br>
	   <b>Biografía</b></br>
	    <nuxt-content :document="director" />
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