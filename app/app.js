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

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
