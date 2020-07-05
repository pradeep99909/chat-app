import React from "react";
import Loader from "../loader";
import Chat from "./chat";
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
    //this.props.dispatch({ type: "SET_MESSAGE" });
    await fetch("http://localhost:8000/chat_history", {
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
    //this.socket.in("hello").on(localStorage.getItem("chat-app-uid"), (data) => {
    ///this.props.dispatch({ type: "ADD_MESSAGE", payload: data });
    //});
  };
  componentWillMount = () => {
    //this.get_chat_history(this.props.to);
  };
  componentDidMount() {
    // this.socket = io("http://localhost:8000");
    socket.on(localStorage.getItem("chat-app-uid"), (data) => {
      this.props.dispatch({ type: "ADD_MESSAGE", payload: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages !== prevProps.messages) {
      //return this.props.messages;
    }
    var objDiv = document.getElementById("chat-history");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <div className="chat-history-main" id="chat-history">
        {this.props.messages !== null ? (
          this.props.messages
            .filter((don) => {
              if (don._id === this.props.to) {
                return don;
              }
            })
            .map((arr) => {
              return arr.messages.map((d, key) => {
                return (
                  <Chat
                    key={key}
                    to={this.props.to}
                    from={d.from}
                    message={d.message}
                    type={d.type}
                    time={d.time}
                    id={d._id}
                  />
                );
              });
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
    ...state,
    messages: state.messages,
  };
};

export default withRouter(connect(mapStateToProps)(ChatHistoryMain));
