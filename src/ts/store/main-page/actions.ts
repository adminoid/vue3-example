import axios from 'axios'
const host = process.env.VUE_APP_API_HOST

export default {
  async getPageData ({ commit }: { commit: Function }) {
    const response = await axios.get(`${host}/api/pages/main-page`)
    commit('setPageData', response.data)
  }
}
