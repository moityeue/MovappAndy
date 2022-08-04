<template>
   <button class="btn"><router-link v-on:click="home" to="/">films</router-link></button>
    <button class="btn"><router-link v-on:click="tv" to="tv">tv</router-link></button>
  <h1>Toutes nos séries</h1>
  <div class="tv">
    <AllTv v-for="item in data" :key="item.id" :id="item.id" :name="item.name" :overview="item.overview" :poster="item.poster_path" ></AllTv>
  </div>
</template>

<script>
// @ is an alias to /src
import AllTv from '@/components/AllTv.vue'
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'TvView',
  components: {
    AllTv
  },
  data () {
    return {
      data: null,
      page: 1
    }
  },
  mounted () {
    this.AllTv(this.page)
  },
  methods: {
    async AllTv (page) {
      const res = await apiService.getTv(page)
      const tv = await res.json()
      this.data = tv.results
    }
  }
}
</script>
