<template>
    <div class="search">
      <input placeholder="rechercher votre film" type="text" @input="search = $event.target.value"/>
      <div class="allmovies" v-if="data !== null" >
            <AllMovies v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :poster="item.poster_path" :origin="item.origin_country" ></AllMovies>
      </div>
      <div v-else><h1>Il n'y a pas de recherche correspondante</h1></div>
    </div>
</template>

<script>
import AllMovies from '@/components/AllMovies.vue'
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'SearchView',
  components: {
    AllMovies
  },
  data () {
    return {
      data: null,
      search: ''
    }
  },
  BeforeMount () {
    this.searchMovies(this.search)
  },
  watch: {
    search () {
      this.searchMovies(this.search)
    }
  },
  methods: {
    async searchMovies (search) {
      const res = await apiService.getSearch(search)
      const movies = await res.json()
      this.data = movies.results
    }
  }
}
</script>
