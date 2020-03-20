import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./chat";
import { createBrowserHistory } from "history";
import Auth from "./component/chatauth/login";

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <Route path="/account/login" component={Auth} exact />
          <Route path="/chat" component={Chat}>
            <Route path="/:user" component={Chat} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
