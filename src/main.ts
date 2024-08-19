import createTodoItem from './scripts/todoItem';
import createNewTodoBtn from './scripts/newTodoBtn';
import { loadTodos } from './scripts/util/storage';
import { initTodoObserver, initCompletedObserver } from './scripts/util/mutationObserver';

const toolbar = document.querySelector<HTMLDivElement>('#toolbar');
const todoList = document.querySelector<HTMLUListElement>('#todo-list');
const completedList =
  document.querySelector<HTMLUListElement>('#completed-list');

const newTodoBtn = createNewTodoBtn();
toolbar?.appendChild(newTodoBtn);

loadTodos().forEach((todo) => {
  const todoItem = createTodoItem(todo.id, todo.text);
  if (!todo.completed) todoList?.appendChild(todoItem);
  else completedList?.appendChild(todoItem);
});

if (todoList && completedList) {
  initTodoObserver(todoList);
  initCompletedObserver(completedList);
}
