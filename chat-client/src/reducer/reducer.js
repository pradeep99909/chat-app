import getkey from "./getKey";
import getMessageKey from "./get_message_key";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      var length = state.messages.length;
      var key = getkey(
        state,
        action.payload.to === localStorage.getItem("chat-app-from")
          ? action.payload.from
          : action.payload.to
      );
      if (key !== false) {
        let mess1 = [...state.messages[key].messages, action.payload];
        let val1 = {
          _id: state.messages[key]._id,
          messages: mess1,
        };

        let a1 = state.messages.slice(0, key);
        let b1 = state.messages.slice(key + 1, length);
        return {
          ...state,
          messages: [val1, ...a1, ...b1],
        };
      } else {
        let a2 = [...state.messages];
        let mess2 = [action.payload];
        let val2 = {
          _id:
            action.payload.to === localStorage.getItem("chat-app-from")
              ? action.payload.from
              : action.payload.to,
          messages: mess2,
        };
        return {
          ...state,
          messages: [val2, ...a2],
        };
      }

    case "GET_MESSAGE":
      return {
        ...state,
        messages: action.payload,
      };

    case "SET_MESSAGE":
      return {
        ...state,
        messages: null,
      };

    case "DELETE_MESSAGE":
      var key_user = getkey(state, action.payload.user);
      var key_id = getMessageKey(
        state.messages[key_user].messages,
        action.payload.id
      );
      state.messages[key_user].messages = [
        ...state.messages[key_user].messages.slice(0, key_id),
        ...state.messages[key_user].messages.slice(
          key_id + 1,
          state.messages[key_user].messages.length
        ),
      ];
      return {
        ...state,
        messages: [...state.messages],
      };

    default:
      return state;
  }
}

export default reducer;
