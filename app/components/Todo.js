import React from 'react'

export default class TodoList extends React.Component {
  handleChange () {
    console.log('changed')
  }

  render () {
    const {id, text, completed} = this.props
    return (
      <div onClick={() => {
        this.props.onToggle(id) // can also create a seprate function
      }}>
        <input type='checkbox' onChange={this.handleChange} checked={completed} />
        {text}
      </div>
    )
  }
}
