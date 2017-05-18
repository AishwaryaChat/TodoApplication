export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

// toggleShowCompleted
export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export let addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

// toggleTodo
export let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
