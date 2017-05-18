import React from 'react'
const moment = require('moment')
import {connect} from 'react-redux'

const actions = require('actions')

class Todo extends React.Component {
  handleChange () {
    console.log('changed')
  }

  render () {
    const {id, text, completed, createdAt, completedAt, dispatch} = this.props
    let renderDate = () => {
      let message = 'Created '
      let timestamp = createdAt
      if (completed) {
        message = 'Completed '
        timestamp = completedAt
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }
    return (
      <div onClick={() => {
        dispatch(actions.toggleTodo(id))
      }}>
        <input type='checkbox' onChange={this.handleChange} checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

export default connect()(Todo)
