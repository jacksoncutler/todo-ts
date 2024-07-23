import createTodoItem from './todoItem';
import createNewTodoBtn from './newTodoBtn';

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

    const todoList = todoForm.parentElement as HTMLUListElement;
    if (!todoInput.value) return;

    const todoItem = createTodoItem(todoInput.value);
    todoList.replaceChild(todoItem, todoForm);
    renderNewTodoBtn(todoList);
  });

  return todoForm;

  // HELPERS
  
  function renderNewTodoBtn(todoList: HTMLUListElement) {
    if (todoList.lastChild?.nodeName !== 'BUTTON') {
      const newTodoBtn = createNewTodoBtn();
      todoList?.appendChild(newTodoBtn);
    }
  }
};

export default createTodoForm;
