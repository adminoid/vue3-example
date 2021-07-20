import { shallowMount } from '@vue/test-utils'
import TopNavbar from 'c@/TopNavbar.vue'
import store from '@/ts/store'

describe('TopNavbar.vue', () => {
  it('is open/close button affects to vuex store', async () => {
    const wrapper = shallowMount(TopNavbar, {
      global: {
        plugins: [store]
      }
    })

    const initialSidebarStatus = store.state.layout.sidebar.open
    const link = wrapper.find('.navbar__sidebar-open')
    await link.trigger('click')

    expect(store.state.layout.sidebar.open).not.toEqual(initialSidebarStatus)
  })
})
