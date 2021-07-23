import { shallowMount } from '@vue/test-utils'
import BurgerButton from 'c@/BurgerButton.vue'
import store from '@/ts/store'

describe('BurgerButton.vue', () => {
  it('is open/close button affects to vuex store', async () => {
    const wrapper = shallowMount(BurgerButton, {
      global: {
        plugins: [store]
      }
    })

    const initialSidebarStatus = store.state.layout.sidebar.open
    const link = wrapper.find('.burger')
    await link.trigger('click')

    expect(store.state.layout.sidebar.open).not.toEqual(initialSidebarStatus)
  })
})
