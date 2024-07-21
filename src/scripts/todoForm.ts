import { onTodoFormSubmit } from './eventListeners';

const createTodoForm = (currentText = '') => {
  const todoForm = document.createElement('form');
  const todoInput = document.createElement('input');
  const todoSubmitBtn = document.createElement('button');

  todoForm.id = 'todo-form';
  todoForm.className = 'todo-form';
  todoForm.addEventListener('submit', onTodoFormSubmit);
  todoInput.id = 'todo-input';
  todoInput.value = currentText;
  todoSubmitBtn.type = 'submit';
  todoSubmitBtn.innerHTML = 'Save Task';

  todoForm.appendChild(todoInput);
  todoForm.appendChild(todoSubmitBtn);

  return todoForm;
};

export default createTodoForm;
