export default class ApiService {
  getMovies (page) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c38c21f03099727f4431e76974a7d86f&language=en-FR&page=${page}`)
  }

  getSearch (search) {
    return fetch(`https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=c38c21f03099727f4431e76974a7d86f&query=${search}`)
  }

  getTv (page) {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c38c21f03099727f4431e76974a7d86f&page=${page}`)
  }

  getGenres () {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c38c21f03099727f4431e76974a7d86f&language=en-FR')
  }

  getInfos (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c38c21f03099727f4431e76974a7d86f&language=fr-FR`)
  }

  getInfosTv (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c38c21f03099727f4431e76974a7d86f&language=fr-FR`)
  }

  getGenresMovies (page, genre) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c38c21f03099727f4431e76974a7d86f&language=en-FR&page=${page}&with_genres=${genre}`)
  }

  getGenresTv (page, genre) {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c38c21f03099727f4431e76974a7d86f&page=${page}&with_genres=${genre}`)
  }
}
