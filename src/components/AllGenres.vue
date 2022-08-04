<template>
  <div class="genre">
    <router-link :to="{name:'GenreListView', params: {id:id}}"><p>Movies:{{ name }}</p></router-link>
    <router-link :to="{name:'TvListView', params: {id:id}}"><p>Tv:{{ name }}</p></router-link>
  </div>
</template>

<script>
export default {
  name: 'AllGenres',
  props: ['id', 'name', 'overview']
}
</script>

<style scoped>
.genre {
  position: relative;
  margin-left: 320px;
  height: 200px;
  width: 80%;
  left: 10px;
  top: 140px;
  padding: 3px 10px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background: #2a264f;
  color: #fff;
  border-radius: 5px;
  transform: translate(-160px, 0);
  transiton: all 0.5s ease;
}
</style>
