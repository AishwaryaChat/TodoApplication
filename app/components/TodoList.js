import React from 'react'
import Todo from 'Todo'

export default class TodoList extends React.Component {

  renderTodos () {
    const {todos} = this.props
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
      )
    })
  }

  render () {
    return (
      <div>{this.renderTodos()}</div> // y not bind(this)
    )
  }
}
