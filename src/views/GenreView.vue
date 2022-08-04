<template>
  <div class="genre">
    <h1>Tous les genres de films</h1>
    <AllGenres v-for="item in datag" :key="item.id" :id="item.id" :name="item.name" :overview="item.overview" ></AllGenres>
  </div>
</template>

<script>
// @ is an alias to /src
import AllGenres from '@/components/AllGenres.vue'
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'GenreView',
  components: {
    AllGenres
  },
  data () {
    return {
      datag: null
    }
  },
  mounted () {
    this.AllGenres()
  },
  methods: {
    async AllGenres () {
      const res = await apiService.getGenres()
      const genre = await res.json()
      this.datag = genre.genres
    }
  }
}
</script>
