import axios from 'axios'
// change when host changed (for dev testing api only)
const host = 'http://localhost:8081'

export default {
  async getPageData ({ commit }: { commit: Function }) {
    const response = await axios.get(`${host}/api/pages/main-page`)
    commit('setPageData', response.data)
  }
}
