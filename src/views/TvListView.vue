<template>
  <div class="tvList">
    <AllTvList v-for="item in data" :key="item.id" :genre="item.genre_ids" :id="item.id" :name="item.name" :overview="item.overview" :date="item.release_date" :poster="item.poster_path" :vote="item.vote_average" :tag="item.tagline" ></AllTvList>
  </div>
</template>
<script>
import AllTvList from '@/components/AllTvList.vue'
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'TvListView',
  components: {
    AllTvList
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
    this.AllTvList(this.page)
    this.AllTvList(this.genreid)
  },
  methods: {
    async AllTvList (page, genreid) {
      const res = await apiService.getGenresTv(page, genreid)
      const genresTv = await res.json()
      this.data = genresTv.results
      console.log(genresTv.results)
    }
  }
}
</script>
