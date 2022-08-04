<template>
  <div class="genresList">
      <p>{{ name }}</p>
      <h1>{{ title }}</h1>
      <h1>{{ id }}</h1>
      <p>{{ overview }}</p>
      <router-link :to="{name:'InfosView', params: {id:id}}">More Infos</router-link>
      <img :src="'https://image.tmdb.org/t/p/w300' + poster" alt="lol" />
  </div>
</template>

<script>
export default {
  name: 'AllGenresList',
  props: ['id', 'overview', 'title', 'date', 'poster']
}

</script>

<style scoped>

.genresList {
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 100%;
  margin: 1rem;
  background: #2a264f;
  border: 5px solid #1a163f;
  border-radius: 1px;
  box-shadow: 0 0 10px #2a264f;
}
.genresList > poster {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background-size: 310px 440px;
  background-position: left bottom;
  transition: all 0.5s ease-in-out;
}
.genresList > router-link {
  text-decoration: none;
  color: #0000;
}
.genresList > h1 {
  height: 22%;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 300;
  color: #FFFC;
  padding: 15px 10px;
  position: relative;
  bottom: 0;
  left: 0px;
  box-shadow: 0 -95px 28px -25px #000 inset;
}

.genresList > title {
  height: 22%;
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #ffff;
  padding: 15px 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 -95px 28px -25px #000 inset;
}
.genresList:hover > img {
  transform: rotate(10deg) scale(1) translate(20px, 0);
  transform-origin: 200px 100px;
  opacity: 0.5;
}
.genresList:hover > p {
  opacity: 0.8;
  transform: rotate(0deg);
}
</style>
