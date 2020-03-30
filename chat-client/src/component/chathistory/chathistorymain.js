import React from "react";
import Loader from "../loader";

import io from "socket.io-client";
import { withRouter } from "react-router";

import { connect } from "react-redux";
class ChatHistoryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
      error: "",
      display: "none"
    };
  }

  get_chat_history = async (to) => {
    this.props.dispatch({ type: "SET_MESSAGE" });
    await fetch("http://127.0.0.1:8000/chat_history", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        uid: localStorage.getItem("chat-app-uid"),
        to: to
      })
    })
      .then((file) => file.json())
      .then((res) => {
        if (res.success) {
          this.props.dispatch({ type: "GET_MESSAGE", payload: res.message });
        } else {
          this.setState((prev) => ({
            ...prev,
            error: res.message
          }));
        }
      });
  };
  get_chat_history_socket = () => {
    this.socket.on(localStorage.getItem("chat-app-uid"), (data) => {
      this.props.dispatch({ type: "ADD_MESSAGE", payload: data });
    });
  };
  componentWillMount = () => {
    // var objDiv = document.getElementById("chat-history-main");
    // objDiv.scrollTo({
    //   left: 0,
    //   top: objDiv.scrollHeight - objDiv.clientHeight,
    //   behavior: "smooth"
    // });
    this.get_chat_history(this.props.to);
  };
  componentDidMount() {
    this.socket = io("http://localhost:8000");
    this.socket.on(localStorage.getItem("chat-app-uid"), (data) => {
      this.props.dispatch({ type: "ADD_MESSAGE", payload: data });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.to !== prevProps.to) {
      this.get_chat_history(this.props.to);
    }
  }

  display = (e) => {
    var t = e.currentTarget.getAttribute("data-key");
    var key = document.getElementById(t);
    this.setState((prev) => ({
      ...prev,
      display: "none"
    }));
    if (key.style.display === "none") {
      key.style.display = "block";
    } else {
      key.style.display = "none";
    }
  };
  render() {
    return (
      <div className="chat-history-main">
        {this.props.messages !== null ? (
          this.props.messages.map((d, key) => {
            return (
              <div
                className="chat1"
                key={key}
                style={{
                  backgroundColor:
                    localStorage.getItem("chat-app-from") === d.from
                      ? "var(--blue--)"
                      : "var(--white--)",
                  alignSelf:
                    localStorage.getItem("chat-app-from") === d.from
                      ? "flex-start"
                      : "flex-end"
                }}
              >
                <div
                  className="chat-message-name"
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div>{d.from}</div>
                  <i
                    data-key={key}
                    className="material-icons"
                    onClick={this.display}
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      transform: "rotate(270deg)",
                      alignItems: "center",
                      padding: "2px"
                    }}
                  >
                    more_vert
                  </i>
                </div>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    overflowWrap: "break-word",
                    marginBlockEnd: 0,
                    marginBlockStart: 0
                  }}
                  className="chat-message"
                >
                  {d.message}
                </p>
                <div
                  className="chat-main-option"
                  ref={(node) => {
                    this.key = node;
                  }}
                  id={key}
                  style={{
                    display: this.state.display,
                    marginLeft:
                      localStorage.getItem("chat-app-from") !== d.from
                        ? "0px"
                        : "150px",
                    alignItems:
                      localStorage.getItem("chat-app-from") !== d.from
                        ? "flex-start"
                        : "flex-end"
                  }}
                >
                  <div className="option">Updated Message</div>
                  <div className="option">Delete Message</div>
                </div>
              </div>
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
    messages: state.messages
  };
};

export default withRouter(connect(mapStateToProps)(ChatHistoryMain));
