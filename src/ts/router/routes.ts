import MainPage from 'c@/pages/MainPage.vue'
import Metrics from 'c@/pages/Metrics.vue'
import Monitoring from 'c@/pages/Monitoring.vue'
// Settings pages
import Settings from 'c@/pages/Settings.vue'
import SettingsCash from 'c@/pages/Settings/SettingsCash.vue'
import SettingsChemDosage from 'c@/pages/Settings/SettingsChemDosage.vue'
import SettingsCustomers from 'c@/pages/Settings/SettingsCustomers.vue'
import SettingsDescription from 'c@/pages/Settings/SettingsDescription.vue'
import SettingsOneTime from 'c@/pages/Settings/SettingsOneTime.vue'
import SettingsOptions from 'c@/pages/Settings/SettingsOptions.vue'
import SettingsPosts from 'c@/pages/Settings/SettingsPosts.vue'
import SettingsPressure from 'c@/pages/Settings/SettingsPressure.vue'
import SettingsProgramCost from 'c@/pages/Settings/SettingsProgramCost.vue'
// Statistic pages
import Statistic from 'c@/pages/Statistic.vue'
import StatisticCommon from 'c@/pages/Statistic/StatisticCommon.vue'
import StatisticHourly from 'c@/pages/Statistic/StatisticHourly.vue'
import StatisticDaily from 'c@/pages/Statistic/StatisticDaily.vue'
import StatisticPrograms from 'c@/pages/Statistic/StatisticPrograms.vue'
import StatisticAvgCheck from 'c@/pages/Statistic/StatisticAvgCheck.vue'
// Finance
import Finance from 'c@/pages/Finance.vue'
import FinanceCash from 'c@/pages/Finance/FinanceCash.vue'
import FinanceCollectionHistory from 'c@/pages/Finance/FinanceCollectionHistory.vue'

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
    component: Statistic,
    children: [
      {
        path: 'common',
        component: StatisticCommon
      },
      {
        path: 'hourly',
        component: StatisticHourly
      },
      {
        path: 'daily',
        component: StatisticDaily
      },
      {
        path: 'programs',
        component: StatisticPrograms
      },
      {
        path: 'avg-check',
        component: StatisticAvgCheck
      }
    ]
  },
  {
    path: '/finance',
    component: Finance,
    children: [
      {
        path: 'cash',
        component: FinanceCash
      },
      {
        path: 'collection-history',
        component: FinanceCollectionHistory
      }
    ]
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
