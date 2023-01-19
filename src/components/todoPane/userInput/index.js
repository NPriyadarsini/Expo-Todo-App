import { React } from 'react';
import { Surface } from 'react-native-paper';
import Input from './input.js';


const UserInputs = (context) =>
	<Surface>
			<Input { ...context }/>
	</Surface>

export default UserInputs;
