import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import TodoPane from './todoPane';

const TodoPaneFrame = (context) =>
	
<Surface
	style={styles.surface}
		elevation={ 1 }
	>
		<Text  variant="headlineMedium">TodoPane</Text>
		<TodoPane {...context}/>
	</Surface>;
export default TodoPaneFrame;

const styles = StyleSheet.create({
  surface: {
    padding: 1,
    height: "99%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});