import { rndString } from "@laufire/utils/random";

const TodoManager = { 
  addTodo: ({ config, state }) =>
  [
    ...state.todoList,
    {
      id: rndString(config.idLength),
      todo: state.input,
      completed: false,
    },
  ],
  editTodo: ({ state: { todoList, editing, input }}) =>
		todoList.map((todo) =>
			(todo.id !== editing.id
				? todo
				: {
					...todo,
					todo: input,
				})),

  hasInput: ({ state: { input }}) =>
		input === '',

  hasNoTodos: ({ state: { todoList }}) => todoList.length === 0,

  filters: {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	},
  
  filterTodos: ({ state: { todoList, filter }}) =>
		todoList.filter(TodoManager.filters[filter]),
}

export default TodoManager;