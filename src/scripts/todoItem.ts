import createTodoForm from './todoForm';
import { loadTodo, setCompleted, deleteTodo } from './util/storage';

const createTodoItem = (id: string, text: string) => {
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
  checkbox.checked = loadTodo(id)?.completed || false;
  todoText.innerHTML = text;
  editButton.innerHTML = 'Edit';
  deleteButton.innerHTML = 'Delete';

  checkbox.addEventListener('change', () => {
    const todoList = document.querySelector<HTMLUListElement>('#todo-list');
    const completedList =
      document.querySelector<HTMLUListElement>('#completed-list');
    if (!todoList || !completedList) return;

    if (checkbox.checked) {
      todoList.removeChild(todoItem);
      completedList.appendChild(todoItem);
      todoItem.classList.add('fade-start');
      setTimeout(() => {
        todoItem.classList.remove('fade-start');
      }, 5);
    } else {
      completedList.removeChild(todoItem);
      todoList.appendChild(todoItem);
      todoItem.classList.add('fade-start');
      setTimeout(() => {
        todoItem.classList.remove('fade-start');
      }, 5);
    }

    setCompleted(id, checkbox.checked);
  });

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
