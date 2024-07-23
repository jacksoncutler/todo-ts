import Todo from "./Todo";

function loadTodos(): Todo[] {
  const todosString = localStorage.getItem('todos');
  if (!todosString) return [];
  const todos = JSON.parse(todosString);
  return todos;
}

function saveTodo(todo: Todo) {
  const todos = loadTodos();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export { loadTodos, saveTodo };
