import { TextInput } from "react-native-paper";
import * as React from 'react';
import ActionButton from "./ActionButton";

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};

const Input = (context) => {
	const { state ,actions} = context;

	return (
		<TextInput
			label="Enter The Task"
			role="input"
			type="text"
			value={ state.input }
			onChangeText={ () =>
				actions.setInput() }
			onKeyPress={ (evt) => {
				actionKeys[evt.code] && actionKeys[evt.code](context);
				} }
		/>
	);
};

export default Input;