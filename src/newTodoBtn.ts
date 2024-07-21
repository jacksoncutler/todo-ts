import { onNewTodoBtnClick } from './eventListeners';

const createNewTodoBtn = () => {
  const newTodoBtn = document.createElement('button');
  newTodoBtn.id = 'new-todo-btn';
  newTodoBtn.innerHTML = 'New Task';
  newTodoBtn.addEventListener('click', onNewTodoBtnClick);

  return newTodoBtn;
}

export default createNewTodoBtn;