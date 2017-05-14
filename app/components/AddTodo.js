import React from 'react'
import TodoApp from 'TodoApp'

export default class AddTodo extends React.Component {

  handleSubmit (e) {
    e.preventDefault()
    const text = this.refs.newTodo.value
    if (text.length > 0) {
      this.refs.newTodo.value = ''
      this.props.onAddTodo(text)
    } else {
      this.refs.newTodo.focus() // again will take the corsor in the text box
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' ref='newTodo' placeholder='Add new Todo' />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
