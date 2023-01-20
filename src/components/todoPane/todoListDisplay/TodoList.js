import TodoManager from '../../../services/TodoManager';
import { React } from 'react';
import Todo from './Todo';

const TodoList = (context) => {
	const { state } = context;
	const { filter } = state;
	const noTodos = TodoManager.hasNoTodos(context);

	const filteredTodo
	= TodoManager.filterTodos(context, filter);

	return noTodos
		? []
		: filteredTodo.map((todo,id) => <Todo key={id} {...{ ...context, data: todo }}/>);
};

export default TodoList;