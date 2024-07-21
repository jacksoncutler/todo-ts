import createNewTodoBtn from './scripts/newTodoBtn';

const todoList = document.querySelector<HTMLUListElement>('#todo-list');

const newTodoBtn = createNewTodoBtn();
todoList?.appendChild(newTodoBtn);


