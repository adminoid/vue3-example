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

describe('chatToggle()', () => {
  it('if chat opens, close sidebar on mobile', () => {
    const state = {
      chat: { open: false },
      sidebar: { open: true }
    }

    mutationsMobile.chatOpen(state)
    expect(state.chat.open).toEqual(true)
    expect(state.sidebar.open).toEqual(false)
  })

  it('if chat opens, sidebar staying open on desktop', () => {
    const state = {
      chat: { open: false },
      sidebar: { open: true }
    }

    mutationsDesktop.chatToggle(state)
    expect(state.chat.open).toEqual(true)
    expect(state.sidebar.open).toEqual(true)
  })
})
