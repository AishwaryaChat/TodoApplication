import React from 'react'
import ReactDOM from 'react-dom'
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
import TodoApp from 'TodoApp'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={TodoApp}>
    </Route>
  </Router>, document.getElementById('app')
)
