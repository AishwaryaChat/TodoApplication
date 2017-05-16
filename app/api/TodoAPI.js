module.exports = {
  setTodos: (todos) => {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)) // localStorage does not store arrays and objects
      return todos
    }
  },

  getTodos: () => {
    let stringTodos = localStorage.getItem('todos')
    let todos = []

    try {
      todos = JSON.parse(stringTodos) // we have put this in try catch because if JSON.parse doesnot get a vaild data it thros error
    } catch (e) {

    }

    return Array.isArray(todos) ? todos : []
  },

  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    })

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase()
      return searchText.length === 0 || text.indexOf(searchText) > -1
    })

    // sort todos with non-complete first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1
      } else if (a.completed && !b.completed) {
        return 1
      } else {
        return 0
      }
    })
    return filteredTodos
  }
}
