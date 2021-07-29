import axios from 'axios'

let mpUrl : string // main page data url
if (process.env.VUE_APP_LOCAL === 'true') {
  mpUrl = `${process.env.VUE_APP_API_HOST}/api/pages/main-page`
} else {
  mpUrl = '/api/main-page.json'
}

export default {
  async getPageData ({ commit }: { commit: Function }) {
    const response = await axios.get(mpUrl)
    commit('setPageData', response.data)
  }
}
