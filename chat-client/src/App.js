import React from "react";
import "./App.css";
import ChatHeader from "./component/header";
import ChatTop from "./component/chattop";
import { BrowserRouter, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div class="chat-left">
            <ChatHeader />
            <ChatTop />
            <Switch></Switch>
          </div>
          <div class="chat-right"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
