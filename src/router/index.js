import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import TvView from '../views/TvView.vue'
import InfosView from '../views/InfosView.vue'
import GenreView from '../views/GenreView.vue'
import InfosTvView from '../views/InfosTvView.vue'
import TvListView from '../views/TvListView.vue'

import GenreListView from '../views/GenreListView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/search/',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/tv/',
    name: 'TvView',
    component: TvView
  },
  {
    path: '/infos/:id',
    name: 'InfosView',
    component: InfosView
  },
  {
    path: '/infosTv/:id',
    name: 'InfosTvView',
    component: InfosTvView
  },
  {
    path: '/genre/',
    name: 'GenreView',
    component: GenreView
  },
  {
    path: '/genresList/',
    name: 'GenreListView',
    component: GenreListView
  },
  {
    path: '/tvList/',
    name: 'TvListView',
    component: TvListView
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
