import counterStore from '@/store/modules/counter'
import { describe, vi } from 'vitest'

describe('Counter Store', () => {
  describe('Mutation', () => {
    test('setCounter', () => {
      const state = { counter: 0 }
      const value = 10
      counterStore.mutations.setCounter(state, value)
      expect(state.counter).toEqual(value)
    })
  })

  describe('Actions', () => {
    test('setCounter', () => {
      const commit = vi.fn()
      const value = 20
      counterStore.actions.setCounter({ commit }, value)
      expect(commit).toHaveBeenCalledWith('setCounter', value)
    })
  })

  describe('Getters', () => {
    test('getCounter', () => {
      const state = { counter: 20 }
      expect(counterStore.getters.getCounter(state)).toEqual(20)
    })
  })
})