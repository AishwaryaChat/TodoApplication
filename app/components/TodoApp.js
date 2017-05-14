//  container component
import React from 'react'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
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
          text: 'Todo 3'
        }
      ]
    }
  }

  handleAddTodo (newTodo) {
    alert(newTodo)
  }

  render () {
    const {todos} = this.state
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
}
