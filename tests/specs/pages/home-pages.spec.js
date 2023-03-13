import { describe, expect, vi } from "vitest"
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HomePage from '@/pages/HomePage.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('HomePage.vue', () => {
  describe('Button Components', () => { 
    let store, state, actions, getters

    beforeEach(() => {
      state = {
        counter: 0
      }
      actions = {
        setCounter: () => state.counter+=1
      }
      getters = {
        getCounter: vi.fn()
      }
      store = new Vuex.Store({
        modules: {
          counter: {
            namespaced: true,
            state,
            actions,
            getters
          }
        }
      })
    })

    test('Click button', () => {
      const wrapper = shallowMount(HomePage, { store, localVue })
      const countbutton = wrapper.find('#countButton')
      countbutton.trigger('click')
      expect(getters.getCounter).toHaveBeenCalled()
    })

    test('Increment counter when button clicked', () => {
      const wrapper = shallowMount(HomePage, { store, localVue })
      const countbutton = wrapper.find('#countButton')
      const count = state.counter
      countbutton.trigger('click')
      expect(state.counter).toEqual(count+1)
    })
  })
})