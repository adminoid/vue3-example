import axios from 'axios'

console.log(process.env.VUE_APP_LOCAL, typeof process.env.VUE_APP_LOCAL)

let mpUrl : string // main page data url
if (process.env.VUE_APP_LOCAL === 'true') {
  mpUrl = `${process.env.VUE_APP_API_HOST}/api/pages/main-page`
} else {
  mpUrl = '/api/main-page.json'
}

console.log(mpUrl)

export default {
  async getPageData ({ commit }: { commit: Function }) {
    const response = await axios.get(mpUrl)
    commit('setPageData', response.data)
  }
}
