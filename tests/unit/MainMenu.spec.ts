import { shallowMount } from '@vue/test-utils'
import MainMenu from 'c@/MainMenu.vue'

describe('MainMenu.vue', () => {
  it('expand menu item by id and collapse then', async () => {
    const wrapper = shallowMount(MainMenu, {
      global: {
        stubs: ['router-link']
      }
    })
    wrapper.vm.expand(3)
    wrapper.vm.expand(7)
    expect(wrapper.vm.expandedRef).toEqual([3, 7])
    wrapper.vm.expand(3)
    expect(wrapper.vm.expandedRef).toEqual([7])
  })
})
