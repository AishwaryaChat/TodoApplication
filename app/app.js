import React from 'react'
import ReactDOM from 'react-dom'
const {Router, Route, IndexRoute, hashHistory} = require('react-router')

import TodoApp from 'TodoApp'
const actions = require('actions')
const store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New store', store.getState())
})

store.dispatch(actions.addTodo('Clean the cupboard'))
store.dispatch(actions.setSearchText('clean'))
store.dispatch(actions.toggleShowCompleted())

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={TodoApp}>
    </Route>
  </Router>, document.getElementById('app')
)
