const createEmptyListMessage = (id: string, text: string) => {
  const message = document.createElement('p');
  message.id = id;
  message.classList.add('message');
  message.innerHTML = text;
  return message;
};

export default createEmptyListMessage;