import createTodoForm from './todoForm';

const createNewTodoBtn = () => {
  const newTodoBtn = document.createElement('button');

  newTodoBtn.id = 'new-todo-btn';
  newTodoBtn.innerHTML = 'New Task';

  newTodoBtn.addEventListener('click', () => {
    const todoList = document.querySelector<HTMLUListElement>('#todo-list');
    const todoForm = createTodoForm();
    if (!todoList) return;

    todoForm.classList.add('hide');
    todoList.appendChild(todoForm);
    const todoInput = todoForm.childNodes[0] as HTMLInputElement;
    todoInput.focus();
    setTimeout(() => {
      todoForm.classList.remove('hide');
    }, 0);
  });

  return newTodoBtn;
};

export default createNewTodoBtn;
