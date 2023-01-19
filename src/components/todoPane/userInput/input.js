import { TextInput } from "react-native-paper";

const Input = (context) => {
	const { state } = context;

	return (
		<TextInput
			label="Enter The Task"
			role="input"
			type="text"
			value={ state.input }
			onChange={ (evt) =>
				context.actions.setInput(evt.target.value) }
			
		/>
	);
};

export default Input;