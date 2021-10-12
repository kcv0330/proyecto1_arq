<template>
  <header>
	  <div class="title">Películas Animadas</div>
	  <nav>
		  <nuxt-link to="/">Inicio</nuxt-link>
		  <nuxt-link to="/peliculas_index">Películas Animadas</nuxt-link>
		  <nuxt-link to="/directores_index">Directores</nuxt-link>
		  <nuxt-link to="/estudios_index">Estudios Cinematográficos</nuxt-link>
	  </nav>
  </header>
</template>

<style>
header {
	padding: 15px 30px;
	background-color: #FFF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

header .title {
	color: #212121;
	font-size: 24px;
	font-weight: 900;
	text-transform: uppercase;
}

nav {
	display: flex;
	align-items: center;
	margin: 0 -15px;
}

nav a {
	display: block;
	margin: 0 15px;
	color: #9f25cf;
}
</style>