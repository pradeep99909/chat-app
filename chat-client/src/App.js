import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Chat from "./chat";
import { createBrowserHistory } from "history";
import Auth from "./component/chatauth/login";
import reducer from "./reducer/reducer";

import { createStore } from "redux";

import { Provider } from "react-redux";

const history = createBrowserHistory();

var init_state = {
  messages: null,
};

const store = createStore(reducer(init_state));

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
