import { React } from 'react';
import { Button } from 'react-native-paper';
import TodoManager from '../../../services/todoManager';

const EditButton = (context) =>
	<Button
		role="editButton"
		disabled={ TodoManager.hasInput(context) }
		onClick={ () => context.actions.editTodo() }
	>
		EDIT</Button>;

export default EditButton;