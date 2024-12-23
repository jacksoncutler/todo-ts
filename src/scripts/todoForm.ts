import { v4 as uuidv4 } from 'uuid';
import createTodoItem from './todoItem';
import { newTodo, editTodo, deleteTodo } from './util/storage';

const createTodoForm = (id = '', currentText = '') => {
  const todoForm = document.createElement('form');
  const todoInput = document.createElement('input');
  const todoSubmitBtn = document.createElement('button');
  todoForm.appendChild(todoInput);
  todoForm.appendChild(todoSubmitBtn);

  todoForm.id = 'todo-form';
  todoForm.classList.add('todo-form');
  todoForm.classList.add('list-item');
  todoInput.id = 'todo-input';
  todoInput.value = currentText;
  todoSubmitBtn.id = 'todo-submit';
  todoSubmitBtn.title = 'Save';
  todoSubmitBtn.classList.add('save-button');
  todoSubmitBtn.type = 'submit';
  todoSubmitBtn.innerHTML = '';

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.removeEventListener('mousedown', handleOutsideClick);

    if (!id) {
      newItemSave(todoForm, todoInput);
    } else {
      editItemSave(id, todoForm, todoInput);
    }
  });

  setTimeout(() => {
    window.addEventListener('mousedown', handleOutsideClick);
  }, 1);

  return todoForm;

  // HELPERS

  function newItemSave(todoForm: HTMLFormElement, todoInput: HTMLInputElement) {
    const todoList = todoForm.parentElement as HTMLUListElement;
    const text = todoInput.value.trim();
    if (!text) {
      discardItem(todoList, todoForm);
      return;
    }
    const id = uuidv4();
    const todoItem = createTodoItem(id, text);
    todoList.replaceChild(todoItem, todoForm);

    newTodo({
      id: id,
      text: text,
      completed: false,
    });
    return;
  }

  function editItemSave(
    id: string,
    todoForm: HTMLFormElement,
    todoInput: HTMLInputElement
  ) {
    const todoList = todoForm.parentElement as HTMLUListElement;
    const text = todoInput.value.trim();
    if (!text) {
      discardItem(todoList, todoForm);
      deleteTodo(id);
      return;
    }
    const todoItem = createTodoItem(id, text);
    todoList.replaceChild(todoItem, todoForm);

    editTodo(id, text);
    return;
  }

  function discardItem(todoList: HTMLUListElement, todoForm: HTMLFormElement) {
    todoForm.classList.add('hide');
    setTimeout(() => {
      todoList.removeChild(todoForm);
    }, 250);
  }

  function handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.id !== 'todo-input' && target.id !== 'todo-submit') {
      todoForm.requestSubmit();
    }
  }
};

export default createTodoForm;
