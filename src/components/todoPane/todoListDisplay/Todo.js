import { React } from 'react';
import { List, Text } from 'react-native-paper';

const Todo = (context) => {
	const { actions, data } = context;
	const {id,todo } = data;
  console.log(todo);

	return (
		<List.Item 
    key={id}
    role="todo"
    title={<Text variant="bodySmall">{todo}</Text>}
    onPress={ () => actions.setEditing()}
    left={() => <List.Icon icon="star" />}/>
	);
};

export default Todo;
