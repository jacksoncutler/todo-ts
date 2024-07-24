import createTodoItem from './scripts/todoItem';
import createNewTodoBtn from './scripts/newTodoBtn';
import { loadTodos } from './scripts/util/storage';

const todoList = document.querySelector<HTMLUListElement>('#todo-list');

loadTodos().forEach((todo) => {
  const todoItem = createTodoItem(todo.id, todo.text);
  todoList?.appendChild(todoItem);
});

const newTodoBtn = createNewTodoBtn();
todoList?.appendChild(newTodoBtn);
