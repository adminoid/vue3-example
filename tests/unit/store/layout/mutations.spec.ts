import mutations from 's@/layout/mutations'

describe('sidebarToggle()', () => {
  it('if set sidebar.open = true, set also chat.open = false', () => {
    const state = {
      sidebar: { open: false },
      chat: { open: true }
    }

    mutations.sidebarToggle(state)
    expect(state.sidebar.open).toEqual(true)
    expect(state.chat.open).toEqual(false)
  })

  it("if set sidebar.open = false, don't change chat.open", () => {
    const state = {
      sidebar: { open: true },
      chat: { open: true }
    }

    mutations.sidebarToggle(state)
    expect(state.sidebar.open).toEqual(false)
    expect(state.chat.open).toEqual(true)
  })
})
