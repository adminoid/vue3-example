import axios from 'axios'
const apiHost = process.env.VUE_APP_API_HOST

export default {
  async getPageData ({ commit }: { commit: Function }) {
    const response = await axios.get(`${apiHost}/api/pages/main-page`)
    commit('setPageData', response.data)
  }
}
