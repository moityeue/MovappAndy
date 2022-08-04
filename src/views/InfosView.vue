<template>
  <div class="infos">
      <h1>{{ data.title }}</h1>
      <p>{{ data.overview }}</p>
   <img :src="'https://image.tmdb.org/t/p/w300' + data.poster_path" alt="lol" />
  </div>
</template>

<script>
// @ is an alias to /src
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'InfosView',
  components: {
  },
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.AllInfos(this.id)
  },
  methods: {
    async AllInfos (id) {
      const res = await apiService.getInfos(id)
      const infos = await res.json()
      this.data = infos
    }
  }
}
</script>
