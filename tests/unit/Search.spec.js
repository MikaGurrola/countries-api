import { shallowMount } from '@vue/test-utils'
import Search from '../../src/components/Search'

describe('Search', () => {
  const wrapper = shallowMount(Search, { })

  const searchInput = wrapper.find('input')

  it('Should emit values when input changes', async () => {
    searchInput.setValue('Guam')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().search).toBeTruthy()
    expect(wrapper.emitted().search).toEqual([['Guam']])
  })

})