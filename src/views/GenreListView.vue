<template>
  <div class="genre">
    <AllGenresList v-for="item in data" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :date="item.release_date" :poster="item.poster_path" :vote="item.vote_average" :tag="item.tagline" ></AllGenresList>
  </div>
</template>
<script>
import AllGenresList from '@/components/AllGenresList.vue'
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'GenreListView',
  components: {
    AllGenresList
  },
  data () {
    return {
      data: null,
      pageid: this.$route.params.id,
      genreid: this.$route.params.id
    }
  },
  datas () {
    return {
      currentState: false
    }
  },
  mounted () {
    this.AllGenresList(this.page)
    this.AllGenresList(this.genreid)
  },
  methods: {
    async AllGenresList (page, genreid) {
      const res = await apiService.getGenresMovies(page, genreid)
      const genresMovies = await res.json()
      this.data = genresMovies.results
    }
  }
}
</script>
