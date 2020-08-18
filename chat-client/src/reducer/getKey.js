module.exports = function getkey(state, val) {
  for (let key = 0; key < state.messages.length; key++) {
    if (state.messages[key]._id === val) {
      return key;
    }
  }
  return false;
};
