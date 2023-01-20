import TodoManager from "../services/TodoManager";

const setIndex=(context)=>({
  index:context.data,
 });
const setInput = ({ data: input }) => ({
	input,
});
const addTodo = (context) => ({
	input: '',
	todoList: TodoManager.addTodo(context),
});
const setEditing = ({ data }) => ({
	editing: data,
	input: data.todo,
});
const editTodo = (context) => ({
	todoList: TodoManager.editTodo(context),
	input: '',
	editing: null,
});
const actions ={
  setIndex,
  setInput,
  addTodo,
  setEditing,
  editTodo,
};

export default actions;