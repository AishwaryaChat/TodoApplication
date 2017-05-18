const redux = require('redux')
import {searchTextReducer, showCompletedReducer, addTodoReducer} from './../reducers/reducers.js'

export let configure = () => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: addTodoReducer
  })
  let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
