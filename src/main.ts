import createTodoForm from './todoForm';

const todoList = document.querySelector<HTMLUListElement>('#todo-list');

const newTodoForm = createTodoForm();
todoList?.appendChild(newTodoForm);


