import React from 'react'
import {connect} from 'react-redux'

import Todo from 'Todo'
const TodoAPI = require('TodoAPI')

class TodoList extends React.Component {

  constructor (props) {
    super(props)
    this.renderTodos = this.renderTodos.bind(this)
  }

  renderTodos () {
    const {todos, showCompleted, searchText} = this.props

    return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
      return (
        <Todo key={todo.id} {...todo} />
      )
    })
  }

  render () {
    return (
      <div>{this.renderTodos()}</div> // y not bind(this)
    )
  }
}

module.exports = connect(
  (state) => state
)(TodoList)
