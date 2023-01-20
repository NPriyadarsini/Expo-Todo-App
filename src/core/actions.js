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
const actions ={
  setIndex,
  setInput,
  addTodo,
  setEditing,
};

export default actions;