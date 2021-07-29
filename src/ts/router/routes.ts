import MainPage from 'c@/pages/MainPage.vue'
import Metrics from 'c@/pages/Metrics.vue'
import Monitoring from 'c@/pages/Monitoring.vue'
import Bonus from 'c@/pages/Bonus.vue'

// Settings pages
import Settings from 'c@/pages/Settings.vue'
import sectionSettings from '@/ts/router/sections/settings'

// Statistic pages
import Statistic from 'c@/pages/Statistic.vue'
import sectionStatistic from '@/ts/router/sections/statistic'

// Finance pages
import Finance from 'c@/pages/Finance.vue'
import sectionFinance from '@/ts/router/sections/finance'

// Accounting pages
import Accounting from 'c@/pages/Accounting.vue'
import sectionAccounting from '@/ts/router/sections/accounting'

// Economics pages
import Economics from 'c@/pages/Economics.vue'
import sectionEconomics from '@/ts/router/sections/economics'

import Analytics from 'c@/pages/Analytics.vue'

// Service components
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
    component: Settings,
    children: sectionSettings
  },
  {
    path: '/statistic',
    component: Statistic,
    children: sectionStatistic
  },
  {
    path: '/finance',
    component: Finance,
    children: sectionFinance
  },
  {
    path: '/bonus',
    component: Bonus
  },
  {
    path: '/accounting',
    component: Accounting,
    children: sectionAccounting
  },
  {
    path: '/economics',
    component: Economics,
    children: sectionEconomics
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

export default routes as any
