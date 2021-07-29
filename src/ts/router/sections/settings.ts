import SettingsCash from 'c@/pages/Settings/SettingsCash.vue'
import SettingsChemDosage from 'c@/pages/Settings/SettingsChemDosage.vue'
import SettingsCustomers from 'c@/pages/Settings/SettingsCustomers.vue'
import SettingsDescription from 'c@/pages/Settings/SettingsDescription.vue'
import SettingsOneTime from 'c@/pages/Settings/SettingsOneTime.vue'
import SettingsOptions from 'c@/pages/Settings/SettingsOptions.vue'
import SettingsPosts from 'c@/pages/Settings/SettingsPosts.vue'
import SettingsPressure from 'c@/pages/Settings/SettingsPressure.vue'
import SettingsProgramCost from 'c@/pages/Settings/SettingsProgramCost.vue'

export default [
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
