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

  componentDidMount() {
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
