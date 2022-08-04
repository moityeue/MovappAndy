<template>
  <div class="infosTv">
      <h1>{{ data.name }}</h1>
      <p>{{ data.overview }}</p>
      <p>{{ data.id }}</p>
      <img :src="'https://image.tmdb.org/t/p/w300' + poster" alt="lol" />
</div>
</template>

