//  container component
import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import uuid from 'node-uuid'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Todo 1',
          completed: false
        },
        {
          id: uuid(),
          text: 'Todo 2',
          completed: true
        },
        {
          id: uuid(),
          text: 'Todo 3',
          completed: true
        },
        {
          id: uuid(),
          text: 'Todo 4',
          completed: false
        }
      ]
    }
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
          completed: false
        }
      ]
    })
  }

  handleToggle (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todos: updatedTodos
    })
  }

  render () {
    const {todos} = this.state
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}
