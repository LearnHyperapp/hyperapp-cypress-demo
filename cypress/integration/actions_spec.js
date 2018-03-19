import {actions} from '../../src/actions'

describe('actions', () => {
  context('add', () => {
    it('adds an item', () => {
      const state = {
        input: 'foo',
        todos: []
      }
      const result = actions.add()(state)
      expect(result).to.deep.equal({
        input: '',
        todos: [{
          done: false,
          id: 1,
          value: 'foo'
        }]
      })
    })
  })
})
