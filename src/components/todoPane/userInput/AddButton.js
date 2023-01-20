import { React } from 'react';
import { Button } from 'react-native-paper';

const AddButton = (context) => {
	const { actions } = context;

	return (
		<Button flex={1}
			role="addButton"
			onClick={ () => actions.addTodo() }
		>
			Add
		</Button>
	);
};

export default AddButton;
