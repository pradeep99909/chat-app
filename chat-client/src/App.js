import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./chat";
import { createBrowserHistory } from "history";
import Auth from "./component/chatauth/login";

import { createStore } from "redux";

import { Provider } from "react-redux";

var init_state = {
  messages: null
  //[
  //   {
  //     id: 0,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 1,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 2,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 3,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 4,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 5,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },

  //   {
  //     id: 6,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 7,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 8,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 9,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 10,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 11,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 12,
  //     from: "pradeep7",
  //     to: "user123",
  //     message: "Hello"
  //   },
  //   {
  //     id: 13,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 14,
  //     from: "pradeep7",
  //     to: "user123",
  //     message: "Hello"
  //   },
  //   {
  //     id: 15,
  //     from: "user123",
  //     to: "pradeep7",
  //     message:
  //       "fgdfgjfgdf;gj;dfjs;sls;g/nsufdsdfuposfposdfsdufspfposdf/nsdfiidsufoiudsfoisdufsdfusduf\nsdfudsfyidsyufuisyfddyfus"
  //   },
  //   {
  //     id: 16,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 17,
  //     from: "pradeep7",
  //     to: "user123",
  //     message: "Hello"
  //   },
  //   {
  //     id: 18,
  //     from: "pradeep7",
  //     to: "user123",
  //     message: "Hello"
  //   },
  //   {
  //     id: 19,
  //     from: "user123",
  //     to: "pradeep7",
  //     message: "Hello"
  //   },
  //   {
  //     id: 20,
  //     from: "pradeep7",
  //     to: "user123",
  //     message: "Hello"
  //   }
  // ]
};

const reducer = function(state = init_state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case "GET_MESSAGE":
      return {
        ...state,
        messages: action.payload
      };

    case "SET_MESSAGE":
      return {
        ...state,
        messages: null
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
            <Route path="/account/login" component={Auth} exact />
            <Route path="/chat" component={Chat}>
              <Route path="/:user" component={Chat} />
            </Route>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
