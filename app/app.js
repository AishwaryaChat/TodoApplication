import React from 'react'
import ReactDOM from 'react-dom'
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
const {Provider} = require('react-redux')

import TodoApp from 'TodoApp'
const actions = require('actions')
const store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New store', store.getState())
})

store.dispatch(actions.addTodo('Clean the cupboard'))
store.dispatch(actions.setSearchText('clean'))
store.dispatch(actions.addTodo('Clean the bathroom'))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
