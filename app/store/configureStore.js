const redux = require('redux')
import {searchTextReducer, showCompletedReducer, addTodoReducer} from './../reducers/reducers.js'

export let configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: addTodoReducer
  })
  let store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
