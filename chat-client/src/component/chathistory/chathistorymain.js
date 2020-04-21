import React from "react";
import Loader from "../loader";
import Chat from "./chat";

import io from "socket.io-client";
import { withRouter } from "react-router";

import socket from "../../socket";

import { connect } from "react-redux";
class ChatHistoryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
      error: "",
      display: "none",
    };
  }

  get_chat_history = async (to) => {
    this.props.dispatch({ type: "SET_MESSAGE" });
    await fetch("https://chat-server.pradeep99909.now.sh/chat_history", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        uid: localStorage.getItem("chat-app-uid"),
        to: to,
      }),
    })
      .then((file) => file.json())
      .then((res) => {
        if (res.success) {
          this.props.dispatch({ type: "GET_MESSAGE", payload: res.message });
        } else {
          this.setState((prev) => ({
            ...prev,
            error: res.message,
          }));
        }
      });
  };
  get_chat_history_socket = () => {
    this.socket.in("hello").on(localStorage.getItem("chat-app-uid"), (data) => {
      this.props.dispatch({ type: "ADD_MESSAGE", payload: data });
    });
  };
  componentWillMount = () => {
    this.get_chat_history(this.props.to);
  };
  componentDidMount() {
    this.socket = io("https://chat-server.pradeep99909.now.sh");
    socket.on(localStorage.getItem("chat-app-uid"), (data) => {
      this.props.dispatch({ type: "ADD_MESSAGE", payload: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.to !== prevProps.to) {
      this.get_chat_history(this.props.to);
    }
    var objDiv = document.getElementById("chat-history");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <div className="chat-history-main" id="chat-history">
        {this.props.messages !== null ? (
          this.props.messages.map((d, key) => {
            return (
              <Chat key={key} from={d.from} message={d.message} type={d.type} />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default withRouter(connect(mapStateToProps)(ChatHistoryMain));
