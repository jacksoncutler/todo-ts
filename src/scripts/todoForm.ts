import createTodoItem from './todoItem';
import createNewTodoBtn from './newTodoBtn';
import { saveTodo } from './util/storage';

const createTodoForm = (currentText = '') => {
  const todoForm = document.createElement('form');
  const todoInput = document.createElement('input');
  const todoSubmitBtn = document.createElement('button');
  todoForm.appendChild(todoInput);
  todoForm.appendChild(todoSubmitBtn);

  todoForm.id = 'todo-form';
  todoForm.className = 'todo-form';
  todoInput.id = 'todo-input';
  todoInput.value = currentText;
  todoSubmitBtn.type = 'submit';
  todoSubmitBtn.innerHTML = 'Save Task';

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!currentText) {
      newItemEvent(todoForm, todoInput);
    } else {
      editItemEvent(todoForm, todoInput);
    }
  });

  return todoForm;

  // HELPERS

  function newItemEvent(
    todoForm: HTMLFormElement,
    todoInput: HTMLInputElement
  ) {
    const todoList = todoForm.parentElement as HTMLUListElement;
    const text = todoInput.value;
    if (!text) return;

    const todoItem = createTodoItem(text);
    todoList.replaceChild(todoItem, todoForm);
    const newTodoBtn = createNewTodoBtn();
    todoList.appendChild(newTodoBtn);
  }

  function editItemEvent(
    todoForm: HTMLFormElement,
    todoInput: HTMLInputElement
  ) {
    const todoList = todoForm.parentElement as HTMLUListElement;
    const text = todoInput.value;
    if (!text) return;

    const todoItem = createTodoItem(text);
    todoList.replaceChild(todoItem, todoForm);
  }
};

export default createTodoForm;
