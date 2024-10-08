import Todo from './Todo';

function loadTodos(): Todo[] {
  const todosString = localStorage.getItem('todos');
  if (!todosString) return [];
  const todos = JSON.parse(todosString);
  return todos;
}

function loadTodo(id: string) {
  const todos = loadTodos();
  const todo = todos.find((todo) => todo.id === id);
  return todo;
}

function newTodo(todo: Todo) {
  const todos = loadTodos();
  todos.unshift(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function editTodo(id: string, text: string) {
  const todos = loadTodos();
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;
  todo.text = text;
  localStorage.setItem('todos', JSON.stringify(todos));
}

function setCompleted(id: string, completed: boolean) {
  const todos = loadTodos();
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;
  todo.completed = completed;
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(id: string) {
  const beforeDelete = loadTodos();
  const todos = beforeDelete.filter((todo) => todo.id !== id);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export { loadTodos, loadTodo, newTodo, editTodo, setCompleted, deleteTodo };
