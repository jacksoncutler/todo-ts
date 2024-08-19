import createTodoItem from './scripts/todoItem';
import createNewTodoBtn from './scripts/newTodoBtn';
import createEmptyListMessage from './scripts/emptyListMessage';
import { loadTodos } from './scripts/util/storage';
import {
  initTodoListObserver,
  initCompletedListObserver,
} from './scripts/util/mutationObserver';

const toolbar = document.querySelector<HTMLDivElement>('#toolbar');
const todoList = document.querySelector<HTMLUListElement>('#todo-list');
const completedList =
  document.querySelector<HTMLUListElement>('#completed-list');

toolbar?.appendChild(createNewTodoBtn());

loadTodos().forEach((todo) => {
  const todoItem = createTodoItem(todo.id, todo.text);
  if (!todo.completed) todoList?.appendChild(todoItem);
  else completedList?.appendChild(todoItem);
});

if (todoList && completedList) {
  if (!todoList.hasChildNodes()) {
    todoList.appendChild(createEmptyListMessage(todoList.id));
  }
  if (!completedList.hasChildNodes()) {
    completedList.appendChild(createEmptyListMessage(completedList.id));
  }
  initTodoListObserver(todoList);
  initCompletedListObserver(completedList);
}
