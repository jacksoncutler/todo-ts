const createTodoForm = () => {
  const todoForm = document.createElement('form');
  const todoInput = document.createElement('input');
  const todoSubmitBtn = document.createElement('button');

  todoForm.id = 'todo-form';
  todoForm.className = 'todo-form';
  todoInput.id = 'todo-input';
  todoSubmitBtn.type = 'submit';
  todoSubmitBtn.innerHTML = 'Save Task';

  todoForm.appendChild(todoInput);
  todoForm.appendChild(todoSubmitBtn);

  return todoForm;
};

export default createTodoForm;
