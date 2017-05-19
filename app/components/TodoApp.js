//  container component
import React from 'react'
import uuid from 'node-uuid'
const moment = require('moment')

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import TodoAPI from 'TodoAPI'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }

  componentDidUpdate () { // this gets fired after either the props or state for the components changes
    TodoAPI.setTodos(this.state.todos)
  }

  render () {
    const {todos, showCompleted, searchText} = this.state
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div>
        <TodoSearch />
        <TodoList />
        <AddTodo />
      </div>
    )
  }
}
