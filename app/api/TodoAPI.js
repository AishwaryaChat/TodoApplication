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
  }
}
