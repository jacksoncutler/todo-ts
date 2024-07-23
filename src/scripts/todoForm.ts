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

    const todoList = todoForm.parentElement as HTMLUListElement;
    const text = todoInput.value;
    if (!text) return;

    saveTodo({
      id: '1',
      text: text,
      completed: false,
    })
    
    const todoItem = createTodoItem(text);
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
