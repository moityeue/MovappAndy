<template>
  <div class="tv">
      <h1>{{ name }}</h1>
      <p>{{ vote }}</p>
      <p>{{ id }}</p>
      <img :src="'https://image.tmdb.org/t/p/w200' + poster" alt="lol" />
      <router-link :to="{name:'InfosTvView', params: {id:id}}">More Infos</router-link>
  </div>
</template>

<script>

export default {
  name: 'AllTv',
  props: ['id', 'name', 'overview', 'poster', 'vote']
}
</script>

<style scoped>

.tv {
  position: relative;
  overflow: hidden;
  width: 320px;
  height:100% ;
  margin: 1rem;
  background: #2a264f;
  border: 5px solid #1a163f;
  border-radius: 1px;
  box-shadow: 0 0 10px #2a264f;
}
.tv > a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}
.tv > name {
  height: 22%;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  font-weight: 300;
  color: #FFFC;
  padding: 15px 10px;
  position: relative;
  bottom: 0;
  left: 0px;
  box-shadow: 0 -95px 28px -25px #000 inset;
}
.tv:hover > img {
  transform: rotate(10deg) scale(1) translate(20px, 0);
  transform-origin: 200px 100px;
  opacity: 0.5;
}
.tv:hover > p {
  opacity: 0.8;
  transform: rotate(0deg);
}
</style>
