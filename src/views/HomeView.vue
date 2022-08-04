<template>
     <button class="btn"><router-link v-on:click="home" to="/">films</router-link></button>
    <button class="btn"><router-link v-on:click="tv" to="tv">tv</router-link></button>
  <h1>Tous nos films</h1>
  <div class="home">
    <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :date="item.release_date" :poster="item.poster_path" :vote="item.vote_average" :tag="item.tagline" ></AllMovies>
  </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'HomeView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      page: 1
    }
  },
  datas () {
    return {
      currentState: false
    }
  },
  mounted () {
    this.AllMovies(this.page)
  },
  methods: {
    async AllMovies (page) {
      const res = await apiService.getMovies(page)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>
