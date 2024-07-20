const createTodoItem = (inputText: string) => {
  const todoItem = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('p');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  todoItem.className = 'todo-item';
  checkbox.type = 'checkbox';
  todoText.innerHTML = inputText;
  editButton.innerHTML = 'Edit';
  deleteButton.innerHTML = 'Delete';
  
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  return todoItem;
};

export default createTodoItem;
