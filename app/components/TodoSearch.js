import React from 'react'

export default class TodoSearch extends React.Component {
  onHandleSearch () {
    const showCompleted = this.refs.showCompleted.checked
    const searchText = this.refs.searchText.value

    this.props.handleSearch(searchText, showCompleted)
  }
  render () {
    return (
      <div>
        <div>
          <input type='text' ref='searchText' placeholder='Search Todos' onChange={this.onHandleSearch} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />
              Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
}
