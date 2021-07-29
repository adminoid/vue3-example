import MainPage from 'c@/pages/MainPage.vue'
import Metrics from 'c@/pages/Metrics.vue'
import Monitoring from 'c@/pages/Monitoring.vue'
import Settings from 'c@/pages/Settings.vue'
import Statistic from 'c@/pages/Statistic.vue'
import Finance from 'c@/pages/Finance.vue'
import Bonus from 'c@/pages/Bonus.vue'
import Accounting from 'c@/pages/Accounting.vue'
import Economics from 'c@/pages/Economics.vue'
import Analytics from 'c@/pages/Analytics.vue'
import Page404 from 'c@/pages/Page404.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
    name: 'main-page'
  },
  {
    path: '/metrics',
    component: Metrics
  },
  {
    path: '/monitoring',
    component: Monitoring
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/statistic',
    component: Statistic
  },
  {
    path: '/finance',
    component: Finance
  },
  {
    path: '/bonus',
    component: Bonus
  },
  {
    path: '/accounting',
    component: Accounting
  },
  {
    path: '/economics',
    component: Economics
  },
  {
    path: '/analytics',
    component: Analytics
  },
  {
    path: '/:pathMatch(.*)*',
    component: Page404
  }
]

export default routes
