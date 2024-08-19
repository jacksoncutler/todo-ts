import createEmptyListMessage from '../emptyListMessage';

const todoObserver = new MutationObserver(todoObserverCallback);
const completedObserver = new MutationObserver(completedObserverCallback);

const initTodoObserver = (todoList: HTMLUListElement) => {
  todoObserver.observe(todoList, {
    subtree: true,
    childList: true,
  });
};

const initCompletedObserver = (completedList: HTMLUListElement) => {
  completedObserver.observe(completedList, {
    subtree: true,
    childList: true,
  });
};

// HELPERS

function todoObserverCallback(mutationList: MutationRecord[]) {
  for (let mutation of mutationList) {
    const todoList = mutation.target as HTMLUListElement;
    observeEmptyList(todoList, 'empty-todo-list', 'No tasks in progress');
  }
}

function completedObserverCallback(mutationList: MutationRecord[]) {
  for (let mutation of mutationList) {
    const completedList = mutation.target as HTMLUListElement;
    observeEmptyList(completedList, 'empty-completed-list', 'No tasks completed');
  }
}

function observeEmptyList(
  listElement: HTMLUListElement,
  messageId: string,
  messageText: string
) {
  const message = listElement.querySelector<HTMLParagraphElement>(
    `#${messageId}`
  );
  if (!listElement.hasChildNodes()) {
    const message = createEmptyListMessage(messageId, messageText);
    listElement.appendChild(message);
  } else if (message && listElement.childNodes.length > 1) {
    listElement.removeChild(message);
  }
}

export { initTodoObserver, initCompletedObserver };
