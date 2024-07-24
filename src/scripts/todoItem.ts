import createTodoForm from './todoForm';
import { deleteTodo } from './util/storage';

const createTodoItem = (id: string, inputText: string) => {
  const todoItem = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('p');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  todoItem.dataset.id = id;
  todoItem.className = 'todo-item';
  checkbox.type = 'checkbox';
  todoText.innerHTML = inputText;
  editButton.innerHTML = 'Edit';
  deleteButton.innerHTML = 'Delete';

  editButton.addEventListener('click', () => {
    const todoList = todoItem.parentElement as HTMLUListElement;
    const todoForm = createTodoForm(id, todoText.innerHTML);
    todoList.replaceChild(todoForm, todoItem);

    const todoInput = todoForm.childNodes[0] as HTMLInputElement;
    todoInput.focus();
  });

  deleteButton.addEventListener('click', () => {
    const todoList = todoItem.parentElement as HTMLUListElement;
    todoList.removeChild(todoItem);

    deleteTodo(id);
  });

  return todoItem;
};

export default createTodoItem;
