import React from "react";
import "./App.css";
import image from "./component/empty_inbox.png";
import ChatHeader from "./component/header";
import ChatTop from "./component/chattop";
import ChatMain from "./component/chatmain/chatmain";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            <Switch>
              <Route path="/chat" component={ChatMain} exact />
            </Switch>
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
              <Route path="/chat/:user" component={ChatHistory}
            </Switch>
            <img
              src={image}
              width="300"
              height="300"
              style={{ backdropFilter: "red" }}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
