import React from 'react'
import {connect} from 'react-redux'

const actions = require('actions')

class TodoSearch extends React.Component {

  render () {
    const {showCompleted, searchText, dispatch} = this.props
    return (
      <div>
        <div>
          <input type='text' ref='searchText' placeholder='Seach Todo' value={searchText} onChange={() => {
            let searchText = this.refs.searchText.value
            dispatch(actions.setSearchText(searchText))
          }} />
        </div>
        <div>
          <input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={() => {
            dispatch(actions.toggleShowCompleted())
          }} />
          <label>
            Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch)
