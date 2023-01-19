import { React } from 'react';
import { Surface } from 'react-native-paper';
import UserInputs from './userInput/index';

const TodoPane = (context) =>
	<Surface className="todoPane" role="TodoPane">
		<UserInputs { ...context }/>
	</Surface>;

export default TodoPane;