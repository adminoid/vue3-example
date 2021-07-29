import StatisticCommon from 'c@/pages/Statistic/StatisticCommon.vue'
import StatisticHourly from 'c@/pages/Statistic/StatisticHourly.vue'
import StatisticDaily from 'c@/pages/Statistic/StatisticDaily.vue'
import StatisticPrograms from 'c@/pages/Statistic/StatisticPrograms.vue'
import StatisticAvgCheck from 'c@/pages/Statistic/StatisticAvgCheck.vue'

export default [
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
