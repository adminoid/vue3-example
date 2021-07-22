import MainContent from 'c@/MainContent.vue'

const routes = [
  {
    path: '/',
    component: MainContent,
    name: 'main-page'
  },
  {
    path: '/:page',
    component: MainContent,
    name: 'any-page'
  }
]

export default routes
