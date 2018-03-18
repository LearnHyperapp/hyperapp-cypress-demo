import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import TodoItem from '../../src/todo-item'

describe('todo item', () => {
  beforeEach(() => {
    const state = {}
    const actions = {}
    const view = (state, actions) => h(TodoItem, {
      id: '1',
      value: 'test item',
      done: false,
      toggle: () => {}
    })
    mount(state, actions, view)
  })

  it('calls toggle on click', () => {
  })
})
