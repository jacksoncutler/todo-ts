import createTodoForm from './todoForm';

const createNewTodoBtn = () => {
  const newTodoBtn = document.createElement('button');
  
  newTodoBtn.id = 'new-todo-btn';
  newTodoBtn.innerHTML = 'New Task';

  newTodoBtn.addEventListener('click', () => {
    const todoList = newTodoBtn.parentElement as HTMLUListElement;
    const todoForm = createTodoForm();
    todoList.replaceChild(todoForm, newTodoBtn);

    const todoInput = todoForm.childNodes[0] as HTMLInputElement;
    todoInput.focus();
  });

  return newTodoBtn;
};

export default createNewTodoBtn;
