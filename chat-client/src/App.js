import React from "react";
import "./App.css";

import ChatHeader from "./component/header";
import ChatTop from "./component/chattop";
import ChatMain from "./component/chatmain/chatmain";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatHistory from "./component/chathistory/chathistory";
import empty from "./component/chathistory/empty";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div class="chat-left" style={{ width: "30%" }}>
            <ChatHeader />
            <ChatTop />
            <ChatMain />
          </div>
          <div
            class="chat-right"
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Switch>
              <Route path="/chat/:user" component={ChatHistory} />
              <Route path="/" component={empty} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
