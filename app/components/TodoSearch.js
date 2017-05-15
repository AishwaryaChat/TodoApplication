import React from 'react'

export default class TodoSearch extends React.Component {
  onSearch () {
    const showCompleted = this.refs.showCompleted.checked
    const searchText = this.refs.searchText.value

    this.props.handleSearch(showCompleted, searchText)
  }
  render () {
    return (
      <div>
        <div>
          <input type='text' ref='searchText' placeholder='Seach Todo' onChange={this.onSearch} />
        </div>
        <div>
          <input type='checkbox' ref='showCompleted' onChange={this.onSearch} />
          <label>
            Show Todos
          </label>
        </div>
      </div>
    )
  }
}
