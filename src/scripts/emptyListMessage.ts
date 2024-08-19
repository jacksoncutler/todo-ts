const createEmptyListMessage = (listId: string) => {
  const message = document.createElement('p');
  message.classList.add('message');
  switch (listId) {
    case 'todo-list':
      message.id = 'empty-todo-list';
      message.innerHTML = 'No tasks in progress';
      break;
    case 'completed-list':
      message.id = 'empty-completed-list';
      message.innerHTML = 'No tasks completed';
      break;
  }
  return message;
};

export default createEmptyListMessage;
