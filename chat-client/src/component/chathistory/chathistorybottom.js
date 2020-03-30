import React from "react";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";
import ChatOption from "./chatoption";
import { connect } from "react-redux";

class ChatHistoryBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      display: "none"
    };
    this.socket = io("http://127.0.0.1:8000").connect();
  }
  handle = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  display = () => {
    if (this.state.display === "none") {
      this.setState((prev) => ({
        ...prev,
        display: "block"
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        display: "none"
      }));
    }
  };

  send = () => {
    if (this.state.text !== "") {
      this.props.dispatch({
        type: "ADD_MESSAGE",
        payload: {
          uid_from: localStorage.getItem("chat-app-uid"),
          from: localStorage.getItem("chat-app-from"),
          to: this.props.name,
          message: this.state.text,
          time: new Date()
        }
      });
      this.socket.emit("send-message", {
        uid_from: localStorage.getItem("chat-app-uid"),
        from: localStorage.getItem("chat-app-from"),
        to: this.props.name,
        message: this.state.text,
        time: new Date()
      });
    }
    this.setState((prev) => ({
      ...prev,
      text: ""
    }));
  };

  handlepress = (e) => {
    if (e.key === "Enter") {
      this.send();

      this.setState((prev) => ({
        ...prev,
        text: ""
      }));
    }
  };
  render() {
    return (
      <div className="chat-history-bottom">
        <div
          className="overlay"
          style={{ display: this.state.display }}
          onClick={this.display}
        ></div>
        <textarea
          className="chat-type"
          placeholder="Enter Your Message..."
          name="text"
          value={this.state.text}
          onChange={this.handle}
        />
        <ChatOption
          display={this.state.display}
          bottom="60px"
          right="80px"
          options={[
            {
              name: "Gallery",
              icon: "insert_photo"
            },
            {
              name: "Share Location",
              icon: "location_on"
            },
            {
              name: "Document",
              icon: "assignment"
            }
          ]}
        />
        <i className="material-icons material-bottom">keyboard_voice</i>
        <i onClick={this.display} className="material-icons material-bottom">
          attach_file
        </i>
        <i onClick={this.send} className="material-icons material-bottom">
          send
        </i>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default withRouter(connect(mapStateToProps)(ChatHistoryBottom));
