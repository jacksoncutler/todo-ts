import { v4 as uuidv4 } from 'uuid';
import createTodoItem from './todoItem';
import createNewTodoBtn from './newTodoBtn';
import { newTodo, editTodo } from './util/storage';

const createTodoForm = (id = '', currentText = '') => {
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

    if (!id) {
      newItemEvent(todoForm, todoInput);
    } else {
      editItemEvent(id, todoForm, todoInput);
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

    const id = uuidv4();
    const todoItem = createTodoItem(id, text);
    todoList.replaceChild(todoItem, todoForm);

    newTodo({
      id: id,
      text: text,
      completed: false,
    });
  }

  function editItemEvent(
    id: string,
    todoForm: HTMLFormElement,
    todoInput: HTMLInputElement
  ) {
    const todoList = todoForm.parentElement as HTMLUListElement;
    const text = todoInput.value;
    if (!text) return;

    const todoItem = createTodoItem(id, text);
    todoList.replaceChild(todoItem, todoForm);

    editTodo(id, text);
  }
};

export default createTodoForm;
