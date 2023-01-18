import { React } from 'react';
import { Surface } from 'react-native-paper';
import TodoListDisplay from './todoListDisplay';
import UserInputs from './userInputs';

const TodoPane = (context) =>
	<Surface className="todoPane" role="TodoPane">
		<UserInputs { ...context }/>
		<TodoListDisplay { ...context }/>
	</Surface>;

export default TodoPane;