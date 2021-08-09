import mutations from 's@/layout/mutations'

const mutationsMobile = { ...mutations, getters: { isMobile: true } }
const mutationsDesktop = { ...mutations, getters: { isMobile: false } }

describe('sidebarToggle()', () => {
  it('if set sidebar opens, set also chat.open = false, with mobile screen', () => {
    const state = {
      sidebar: { open: false },
      chat: { open: true }
    }

    mutationsMobile.sidebarOpen(state)
    expect(state.sidebar.open).toEqual(true)
    expect(state.chat.open).toEqual(false)
  })

  it('if set sidebar opens, chat staying open, with desktop screen', () => {
    const state = {
      sidebar: { open: false },
      chat: { open: true }
    }

    mutationsDesktop.sidebarOpen(state)
    expect(state.sidebar.open).toEqual(true)
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
