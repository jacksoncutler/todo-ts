import createTodoItem from './scripts/todoItem';
import createNewTodoBtn from './scripts/newTodoBtn';
import { loadTodos } from './scripts/util/storage';

const toolbar = document.querySelector<HTMLDivElement>('#toolbar');
const todoList = document.querySelector<HTMLUListElement>('#todo-list');
const completedList = document.querySelector<HTMLUListElement>('#completed-list');

loadTodos().forEach((todo) => {
  const todoItem = createTodoItem(todo.id, todo.text);
  if (!todo.completed)
    todoList?.appendChild(todoItem);
  else
    completedList?.appendChild(todoItem);
});

const newTodoBtn = createNewTodoBtn();
toolbar?.appendChild(newTodoBtn);
