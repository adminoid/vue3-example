import MainPage from 'c@/pages/MainPage.vue'
import Metrics from 'c@/pages/Metrics.vue'
import Monitoring from 'c@/pages/Monitoring.vue'
// Settings pages
import Settings from 'c@/pages/Settings.vue'
import SettingsCash from 'c@/pages/SettingsCash.vue'
import SettingsChemDosage from 'c@/pages/SettingsChemDosage.vue'
import SettingsCustomers from 'c@/pages/SettingsCustomers.vue'
import SettingsDescription from 'c@/pages/SettingsDescription.vue'
import SettingsOneTime from 'c@/pages/SettingsOneTime.vue'
import SettingsOptions from 'c@/pages/SettingsOptions.vue'
import SettingsPosts from 'c@/pages/SettingsPosts.vue'
import SettingsPressure from 'c@/pages/SettingsPressure.vue'
import SettingsProgramCost from 'c@/pages/SettingsProgramCost.vue'

import Statistic from 'c@/pages/Statistic.vue'
import Finance from 'c@/pages/Finance.vue'
import Bonus from 'c@/pages/Bonus.vue'
import Accounting from 'c@/pages/Accounting.vue'
import Economics from 'c@/pages/Economics.vue'
import Analytics from 'c@/pages/Analytics.vue'
// service components
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
    children: [
      {
        path: 'cash',
        component: SettingsCash
      },
      {
        path: 'chem-dosage',
        component: SettingsChemDosage
      },
      {
        path: 'customers',
        component: SettingsCustomers
      },
      {
        path: 'description',
        component: SettingsDescription
      },
      {
        path: 'one-time',
        component: SettingsOneTime
      },
      {
        path: 'options',
        component: SettingsOptions
      },
      {
        path: 'posts',
        component: SettingsPosts
      },
      {
        path: 'pressure',
        component: SettingsPressure
      },
      {
        path: 'program-cost',
        component: SettingsProgramCost
      }
    ]
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

export default routes as any
