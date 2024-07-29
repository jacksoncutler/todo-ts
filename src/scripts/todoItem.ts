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
  todoItem.classList.add('todo-item');
  todoItem.classList.add('list-item');
  checkbox.type = 'checkbox';
  checkbox.checked = loadTodo(id)?.completed || false;
  todoText.innerHTML = text;
  editButton.classList.add('edit-button');
  deleteButton.classList.add('delete-button');

  todoItem.addEventListener('click', (event) => {
    const targetNode = event.target as HTMLElement;
    if (targetNode.nodeName === 'BUTTON') return;

    checkbox.checked = !checkbox.checked;

    const todoList = document.querySelector<HTMLUListElement>('#todo-list');
    const completedList =
      document.querySelector<HTMLUListElement>('#completed-list');
    if (!todoList || !completedList) return;

    if (checkbox.checked) {
      todoList.removeChild(todoItem);
      completedList.appendChild(todoItem);
      todoItem.classList.add('hide');
      setTimeout(() => {
        todoItem.classList.remove('hide');
      }, 100);
    } else {
      completedList.removeChild(todoItem);
      todoList.appendChild(todoItem);
      todoItem.classList.add('hide');
      setTimeout(() => {
        todoItem.classList.remove('hide');
      }, 0);
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
    todoItem.classList.add('hide');
    setTimeout(() => {
      todoList.removeChild(todoItem);
    }, 250);

    deleteTodo(id);
  });

  return todoItem;
};

export default createTodoItem;
