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
        <div
          className="chat-left"
          style={{
            width:
              this.props.location.pathname === "/chat" &&
              window.matchMedia("(max-width: 500px)").matches
                ? "100%"
                : this.props.match.params.user &&
                  window.matchMedia("(max-width: 500px)").matches
                ? "0%"
                : "30%",
            display:
              this.props.location.pathname === "/chat" &&
              window.matchMedia("(max-width: 500px)").matches
                ? "block"
                : this.props.match.params.user &&
                  window.matchMedia("(max-width: 500px)").matches
                ? "none"
                : "block",
          }}
        >
          <ChatHeader />
          {/* <ChatTop /> */}
          <Switch>
            <Route path="/chat" component={ChatMain} exact />
            <Route path="/chat/:user" component={ChatMain} exact />
            <Route path="/" />
          </Switch>
        </div>
        <div
          className="chat-right"
          style={{
            width:
              this.props.location.pathname === "/chat" &&
              window.matchMedia("(max-width: 500px)").matches
                ? "0%"
                : this.props.match.params.user &&
                  window.matchMedia("(max-width: 500px)").matches
                ? "100%"
                : "70%",
            display:
              this.props.location.pathname === "/chat" &&
              window.matchMedia("(max-width: 500px)").matches
                ? "none"
                : this.props.match.params.user &&
                  window.matchMedia("(max-width: 500px)").matches
                ? "flex"
                : "flex",
            justifyContent: "center",
            alignItems: "center",
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
