import { shallowMount } from '@vue/test-utils'
import Dropdown from '../../src/components/Dropdown'

describe('Dropdown', () => {
  const wrapper = shallowMount(Dropdown, {
    propsData: {
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]
    }
  })

  const dropdownButton = wrapper.find('.dropdown>button')

  it('Contains all country Regions', () => {
    expect(wrapper.findAll('.options button').length).toEqual(6)
  })

  it('Should open Drop down on click', () => {
    expect(wrapper.vm.isOpen).toBe(false)
    dropdownButton.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
  })

  
  it('Selecting a region should close dropdown && inlcude clear filter', async () => {
    wrapper.find('.options>button:first-of-type').trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.options button').length).toEqual(7)
  })

  it('Clearing filter should reset options', async () => {
    expect(wrapper.vm.isOpen).toBe(false)
    dropdownButton.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
    wrapper.find('.options>button:last-of-type').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isOpen).toBe(false)
    expect(wrapper.findAll('.options button').length).toEqual(6)
  })


})