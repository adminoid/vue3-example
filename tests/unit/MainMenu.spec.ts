import { shallowMount } from '@vue/test-utils'
import MainMenu from 'c@/MainMenu.vue'

describe('MainMenu.vue', () => {
  it('expand menu item by id and collapse then', async () => {
    const wrapper = shallowMount(MainMenu, {
      global: {
        stubs: ['router-link']
      }
    })
    wrapper.vm.expand(3, true)
    wrapper.vm.expand(7, true)
    expect(wrapper.vm.expanded).toEqual([3, 7])
    wrapper.vm.expand(3, false)
    expect(wrapper.vm.expanded).toEqual([7])
  })
})
