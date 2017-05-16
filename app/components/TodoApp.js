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
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }

  componentDidUpdate () { // this gets fired after either the props or state for the components changes
    TodoAPI.setTodos(this.state.todos)
  }

  handleSearch (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  handleAddTodo (newTodo) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTodo,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }

  handleToggle (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        todo.completedAt = todo.completed ? moment().unix() : undefined
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  render () {
    const {todos, showCompleted, searchText} = this.state
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}
