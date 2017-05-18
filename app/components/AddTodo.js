import React from 'react'
const {connect} = require('react-redux')

import TodoApp from 'TodoApp'
const actions = require('actions')

class AddTodo extends React.Component {

  handleSubmit (e) {
    e.preventDefault()
    const text = this.refs.newTodo.value
    const {dispatch} = this.props
    if (text.length > 0) {
      this.refs.newTodo.value = ''
      dispatch(actions.addTodo(text))
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

export default connect()(AddTodo)
