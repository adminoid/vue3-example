import MainPage from 'c@/pages/MainPage.vue'
import ExampleOne from 'c@/pages/ExampleOne.vue'
import ExampleTwo from 'c@/pages/ExampleTwo.vue'
import Page404 from 'c@/pages/Page404.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main-page'
  },
  {
    path: '/example-one',
    component: ExampleOne
  },
  {
    path: '/example-two',
    component: ExampleTwo
  },
  {
    path: '/:pathMatch(.*)*',
    component: Page404
  }
]

export default routes
