import createTodoItem from './todoItem';

const onTodoFormSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  
  const todoForm = event.target as HTMLFormElement;
  const todoInput = todoForm.childNodes[0] as HTMLInputElement;
  const todoList = document.querySelector<HTMLUListElement>('#todo-list');
  if (!todoInput?.value || !todoList) return;

  const todoItem = createTodoItem(todoInput.value);
  todoList.replaceChild(todoItem, todoForm);
  renderNewTodoBtn(todoList);
};

// HELPER FUNCTIONS

function renderNewTodoBtn(todoList: HTMLUListElement) {
    if (todoList.lastChild?.nodeName !== 'BUTTON') {
      const newTodoBtn = document.createElement('button');
      newTodoBtn.id = 'new-todo-btn';
      newTodoBtn.innerHTML = 'New Task';

      todoList?.appendChild(newTodoBtn);
    };
}

export { onTodoFormSubmit };
