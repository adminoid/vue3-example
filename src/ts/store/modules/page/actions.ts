import axios from 'axios'

export default {
  async getPageData ({ commit }: { commit: Function }, pageName: string) {
    console.log(pageName)
    const response = await axios.get(`/api/pages/${pageName}`)
    console.log(response.data)
    // commit('setPageData', { pageName, data: response.data })
  }
}
