import AddButton from './AddButton.js';


const ActionButton = (context) => (context.state.editing
	? editButton(context)
	: AddButton(context));

export default ActionButton;