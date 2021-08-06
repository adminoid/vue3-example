import mutations from 's@/layout/mutations'

describe.skip('sidebarToggle()', () => {
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

describe.skip('chatToggle()', () => {
  it('if set chat.open = true, set also sidebar.open = false', () => {
    const state = {
      sidebar: { open: true },
      chat: { open: false }
    }

    mutations.chatToggle(state)
    expect(state.chat.open).toEqual(true)
    expect(state.sidebar.open).toEqual(false)
  })

  it("if set chat.open = false, don't change sidebar.open", () => {
    const state = {
      sidebar: { open: true },
      chat: { open: true }
    }

    mutations.chatToggle(state)
    expect(state.chat.open).toEqual(false)
    expect(state.sidebar.open).toEqual(true)
  })
})
