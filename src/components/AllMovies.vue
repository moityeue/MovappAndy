<template>
  <div class="movie">
      <h1>{{ title }}</h1>
      <img :src="'https://image.tmdb.org/t/p/w300' + poster" alt="lol" />
      <router-link :to="{name:'InfosView', params: {id:id}}">More Infos</router-link>
  </div>
</template>

<script>
export default {
  name: 'AllMovies',
  props: ['id', 'title', 'overview', 'poster', 'vote', 'date']
}

</script>

<style scoped>

.movie {
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
.movie > poster {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background-size: 310px 440px;
  background-position: left bottom;
  transition: all 0.5s ease-in-out;
}
.movie > router-link {
  text-decoration: none;
  color: #0000;
}
.movie > h1 {
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

.movie > title {
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
.movie:hover > img {
  transform: rotate(10deg) scale(1) translate(20px, 0);
  transform-origin: 200px 100px;
  opacity: 0.5;
}
.movie:hover > p {
  opacity: 0.8;
  transform: rotate(0deg);
}
</style>
