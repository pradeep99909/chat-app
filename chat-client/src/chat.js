import React from "react";
import ChatHeader from "./component/header";
import ChatTop from "./component/chattop";
import ChatMain from "./component/chatmain/chatmain";
import { Switch, Route } from "react-router-dom";
import ChatHistory from "./component/chathistory/chathistory";
import empty from "./component/chathistory/empty";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (!localStorage.getItem("chat-app-isLogined")) {
      this.props.history.push("/account/login");
    }
  }
  render() {
    return (
      <div className="chat">
        <div className="chat-left" style={{ width: "30%" }}>
          <ChatHeader />
          <ChatTop />
          <Switch>
            <Route path="/chat" component={ChatMain} exact />
            <Route path="/chat/:user" component={ChatMain} exact />
          </Switch>
        </div>
        <div
          className="chat-right"
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Switch>
            <Route path="/chat/:user" component={ChatHistory} exact />
            <Route component={empty} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Chat;
