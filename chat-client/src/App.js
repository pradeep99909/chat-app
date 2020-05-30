import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Chat from "./chat";
import { createBrowserHistory } from "history";
import Auth from "./component/chatauth/login";
import getkey from "./getKey";

import { createStore } from "redux";

import { Provider } from "react-redux";

var init_state = {
  messages: null,
};

const reducer = function (state = init_state, action) {
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

    default:
      return state;
  }
};

const store = createStore(reducer);

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter history={history}>
        <Provider store={store}>
          <div className="App">
            <Redirect from="/" to="/chat" />
            <Route path="/account/login" component={Auth} exact />
            <Route path="/account/register" component={Auth} exact />
            <Route path="/chat" component={Chat}>
              <Route path="/:user" component={Chat} />
            </Route>
            <Route path="/search" component={Chat} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
