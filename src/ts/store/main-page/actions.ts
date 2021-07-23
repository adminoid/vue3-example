import axios from 'axios'

export default {
  async getPageData ({ commit }: { commit: Function }) {
    const response = await axios.get('/api/pages/main-page')
    commit('setPageData', response.data)
  }
}
