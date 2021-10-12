<script>
  export default {
    async asyncData({ $content, params }) {
      const directores = await $content('directores').fetch()
      return {
        directores
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Información de Directores</h3>
     <p>Esta sección presenta la informaión de directores</p>
   <ul class="lis_prin">
     <li v-for="director of directores" :key="director.slug">
       <NuxtLink :to="{ name: 'directores-slug', params: { slug: director.slug } }">{{director.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>