<template>
  <div class="infosTv">
   <h1>{{ data.name}}</h1>
   <p>{{ data.overview}}</p>
   <img :src="'https://image.tmdb.org/t/p/w300' + data.poster_path" alt="lol" />
  </div>
</template>
<script>
import ApiServices from '@/services/ApiServices.js'

const apiService = new ApiServices()
export default {
  name: 'InfosTv',
  components: {
  },
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.AllInfosTv(this.id)
  },
  methods: {
    async AllInfosTv (id) {
      const res = await apiService.getInfosTv(id)
      const infosTv = await res.json()
      this.data = infosTv
    }
  }
}
</script>
