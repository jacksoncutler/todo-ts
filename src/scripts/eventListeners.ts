import createTodoItem from './todoItem';
import createTodoForm from './todoForm';
import createNewTodoBtn from './newTodoBtn';

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

const onTodoItemEdit = (event: MouseEvent) => {
  const todoEditBtn = event.target as HTMLButtonElement;
  const todoItem = todoEditBtn.parentElement;
  const todoParagraph = todoItem?.childNodes[1] as HTMLParagraphElement;
  const todoList = todoItem?.parentElement;
  if (!todoItem || !todoParagraph.innerHTML || !todoList) return;

  const todoForm = createTodoForm(todoParagraph.innerHTML);
  todoList.replaceChild(todoForm, todoItem);
  const todoInput = todoForm.childNodes[0] as HTMLInputElement;
  todoInput.focus();
};

const onTodoItemDelete = (event: MouseEvent) => {
  const todoEditBtn = event.target as HTMLButtonElement;
  const todoItem = todoEditBtn.parentElement;
  const todoList = todoItem?.parentElement;
  if (!todoItem || !todoList) return;

  todoList.removeChild(todoItem);
};

const onNewTodoBtnClick = (event: MouseEvent) => {
  const newTodoBtn = event.target as HTMLButtonElement;
  const todoList = document.querySelector<HTMLUListElement>('#todo-list');
  if (!todoList) return;

  const todoForm = createTodoForm();
  todoList.replaceChild(todoForm, newTodoBtn);
  const todoInput = todoForm.childNodes[0] as HTMLInputElement;
  todoInput.focus();
};

// HELPERS

function renderNewTodoBtn(todoList: HTMLUListElement) {
  if (todoList.lastChild?.nodeName !== 'BUTTON') {
    const newTodoBtn = createNewTodoBtn();
    todoList?.appendChild(newTodoBtn);
  }
}

export {
  onTodoFormSubmit,
  onTodoItemEdit,
  onTodoItemDelete,
  onNewTodoBtnClick,
};
