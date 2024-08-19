import createEmptyListMessage from '../emptyListMessage';

const todoListObserver = new MutationObserver(todoListObserverCallback);
const completedListObserver = new MutationObserver(completedListObserverCallback);

const initTodoListObserver = (todoList: HTMLUListElement) => {
  todoListObserver.observe(todoList, {
    subtree: true,
    childList: true,
  });
};

const initCompletedListObserver = (completedList: HTMLUListElement) => {
  completedListObserver.observe(completedList, {
    subtree: true,
    childList: true,
  });
};

// HELPERS

function todoListObserverCallback(mutationList: MutationRecord[]) {
  for (let mutation of mutationList) {
    const todoList = mutation.target as HTMLUListElement;
    observeEmptyList(todoList);
  }
}

function completedListObserverCallback(mutationList: MutationRecord[]) {
  for (let mutation of mutationList) {
    const completedList = mutation.target as HTMLUListElement;
    observeEmptyList(completedList);
  }
}

function observeEmptyList(listElement: HTMLUListElement) {
  const message = listElement.querySelector<HTMLParagraphElement>('.message');
  if (!listElement.hasChildNodes()) {
    const newMessage = createEmptyListMessage(listElement.id);
    listElement.appendChild(newMessage);
  } else if (message && listElement.childNodes.length > 1) {
    listElement.removeChild(message);
  }
}

export { initTodoListObserver, initCompletedListObserver };
