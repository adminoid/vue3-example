import AccountingConsumables from 'c@/pages/Accounting/AccountingConsumables.vue'
import AccountingProperties from 'c@/pages/Accounting/AccountingProperties.vue'
import AccountingTaxSalary from 'c@/pages/Accounting/AccountingTaxSalary.vue'
import AccountingObjectLogs from 'c@/pages/Accounting/AccountingObjectLogs.vue'
import AccountingService from 'c@/pages/Accounting/AccountingService.vue'

export default [
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
