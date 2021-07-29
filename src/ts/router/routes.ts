import MainPage from 'c@/pages/MainPage.vue'
import Metrics from 'c@/pages/Metrics.vue'
import Monitoring from 'c@/pages/Monitoring.vue'
import Bonus from 'c@/pages/Bonus.vue'

// Settings pages
import Settings from 'c@/pages/Settings.vue'
import sectionSettings from '@/ts/router/sections/settings'

// Statistic pages
import Statistic from 'c@/pages/Statistic.vue'
import StatisticCommon from 'c@/pages/Statistic/StatisticCommon.vue'
import StatisticHourly from 'c@/pages/Statistic/StatisticHourly.vue'
import StatisticDaily from 'c@/pages/Statistic/StatisticDaily.vue'
import StatisticPrograms from 'c@/pages/Statistic/StatisticPrograms.vue'
import StatisticAvgCheck from 'c@/pages/Statistic/StatisticAvgCheck.vue'

// Finance pages
import Finance from 'c@/pages/Finance.vue'
import FinanceCash from 'c@/pages/Finance/FinanceCash.vue'
import FinanceCollectionHistory from 'c@/pages/Finance/FinanceCollectionHistory.vue'

// Accounting pages
import Accounting from 'c@/pages/Accounting.vue'
import AccountingConsumables from 'c@/pages/Accounting/AccountingConsumables.vue'
import AccountingProperties from 'c@/pages/Accounting/AccountingProperties.vue'
import AccountingTaxSalary from 'c@/pages/Accounting/AccountingTaxSalary.vue'
import AccountingObjectLogs from 'c@/pages/Accounting/AccountingObjectLogs.vue'
import AccountingService from 'c@/pages/Accounting/AccountingService.vue'

// Economics pages
import Economics from 'c@/pages/Economics.vue'
import EconomicsProfitability from 'c@/pages/Economics/EconomicsProfitability.vue'
import EconomicsPayback from 'c@/pages/Economics/EconomicsPayback.vue'

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
    component: Accounting,
    children: [
      {
        path: 'consumables',
        component: AccountingConsumables
      },
      {
        path: 'properties',
        component: AccountingProperties
      },
      {
        path: 'tax-salary',
        component: AccountingTaxSalary
      },
      {
        path: 'object-logs',
        component: AccountingObjectLogs
      },
      {
        path: 'service',
        component: AccountingService
      }
    ]
  },
  {
    path: '/economics',
    component: Economics,
    children: [
      {
        path: 'profitability',
        component: EconomicsProfitability
      },
      {
        path: 'payback',
        component: EconomicsPayback
      }
    ]
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
