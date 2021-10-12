<script>
  export default {
    async asyncData({ $content, params }) {
      const estudios = await $content('estudios').fetch()
      return {
        estudios
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Información de Estudios Cinematográficos</h3>
     <p>Esta sección presenta la información de los estudios cinematográficos</p>
   <ul class="lis_prin" >
     <li v-for="estudio of estudios" :key="estudio.slug">
       <NuxtLink :to="{ name: 'estudios-slug', params: { slug: estudio.slug } }">{{estudio.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>