function getMessageKey(messages, id) {
  for (let i = 0; i < messages.length; i++) {
    if (messages[i]._id === id) {
      return i;
    }
  }
  return false;
}

export default getMessageKey;
