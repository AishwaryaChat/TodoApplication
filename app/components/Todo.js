import React from 'react'
const moment = require('moment')

export default class TodoList extends React.Component {
  handleChange () {
    console.log('changed')
  }

  render () {
    const {id, text, completed, createdAt, completedAt} = this.props
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
        this.props.onToggle(id) // can also create a seprate function
      }}>
        <input type='checkbox' onChange={this.handleChange} checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}
