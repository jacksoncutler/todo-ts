import createNewTodoBtn from './newTodoBtn';

const todoList = document.querySelector<HTMLUListElement>('#todo-list');

const newTodoBtn = createNewTodoBtn();
todoList?.appendChild(newTodoBtn);


