import getters from 's@/layout/getters'

describe('getters.isShowSidebar()', () => {
  /**
   * Conditions for show sidebar:
   *   sidebar.open == true & chat.open == false
   * Conditions for hide sidebar:
   *   sidebar.open == true & chat.open == true
   */
  it('isShowSidebar', () => {
    // state mock (default for showing sidebar)
    const state = {
      sidebar: {
        open: true
      },
      chat: {
        open: false
      }
    }
    let result = getters.isShowSidebar(state)
    expect(result).toEqual(true)

    state.chat.open = true
    result = getters.isShowSidebar(state)
    expect(result).toEqual(false)
  })
})
