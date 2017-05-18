import React from 'react'
import Todo from 'Todo'
import {connect} from 'react-redux'

class TodoList extends React.Component {

  constructor (props) {
    super(props)
    this.renderTodos = this.renderTodos.bind(this)
  }

  renderTodos () {
    const {todos} = this.props

    return todos.map((todo) => {
      console.log(this.props)
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
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList)
