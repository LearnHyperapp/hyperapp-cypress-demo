/// <reference types="cypress" />
import { h } from 'hyperapp'
import { mount } from 'cypress-hyperapp-unit-test'
import TodoItem from '../../src/todo-item'

describe('todo item', () => {
  it('shows an item', () => {
    const view = (state, actions) => h(TodoItem, {
      id: '1',
      value: 'test item',
      done: false
    })
    mount(null, null, view)
    cy.contains('test item')
  })

  it('marks done items', () => {
    const view = (state, actions) => h(TodoItem, {
      id: '1',
      value: 'test item',
      done: true
    })
    mount(null, null, view)
    cy.contains('test item').should('have.class', 'done')
  })

  it('calls toggle on click', () => {
    const toggle = cy.spy().as('toggle')
    const view = (state, actions) => h(TodoItem, {
      id: '1',
      value: 'test item',
      done: false,
      toggle
    })
    mount(null, null, view)
    cy.contains('test item').click()
    cy.get('@toggle').should('be.calledOnce')
  })
})
