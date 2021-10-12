<script>
  export default {
    async asyncData({ $content, params }) {
      const peliculas = await $content('peliculas').fetch()
      return {
        peliculas
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Información de Películas</h3>
     <p>Esta sección presenta la información de las películas</p>
   <ul class="lis_prin" >
     <li v-for="pelicula of peliculas" :key="pelicula.slug">
       <NuxtLink :to="{ name: 'peliculas-slug', params: { slug: pelicula.slug } }">{{pelicula.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>