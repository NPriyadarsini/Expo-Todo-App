import { React } from 'react';
import { List, Surface } from 'react-native-paper';
import TodoList from './TodoList.js';


const TodoListDisplay = (context) =>
	<List.Section className="todoList" role="TodoListDisplay">
  <List.Subheader>TodoList</List.Subheader>
		<TodoList {...context}/>
	</List.Section>;

export default TodoListDisplay;
