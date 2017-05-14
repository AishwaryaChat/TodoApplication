//  container component
import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Todo 1'
        },
        {
          id: 2,
          text: 'Todo 2'
        },
        {
          id: 3,
          text: 'Todo 3'
        },
        {
          id: 4,
          text: 'Todo 4'
        }
      ]
    }
  }

  handleSearch () {

  }

  handleAddTodo (newTodo) {
    let todos = this.state.todos
    todos.push({
      id: todos.length + 1,
      text: newTodo
    })
    this.setState(
      todos
    )
  }

  render () {
    const {todos} = this.state
    return (
      <div>
        <TodoSearch onHandleSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}
