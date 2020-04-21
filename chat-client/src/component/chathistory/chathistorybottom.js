import React from "react";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";
import ChatOption from "./chatoption";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import socket from "../../socket";
import firebase from "../config/config";

class ChatHistoryBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      display: "none",
    };
    this.socket = io("https://chat-server.pradeep99909.now.sh");
  }
  handle = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  display = () => {
    if (this.state.display === "none") {
      this.setState((prev) => ({
        ...prev,
        display: "block",
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        display: "none",
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
          type: "message",
          time: new Date(),
        },
      });
      this.socket.emit("send-message", {
        uid_from: localStorage.getItem("chat-app-uid"),
        from: localStorage.getItem("chat-app-from"),
        to: this.props.name,
        message: this.state.text,
        type: "message",
        time: new Date(),
      });
    }
    this.setState((prev) => ({
      ...prev,
      text: "",
    }));
  };

  handlepress = (e) => {
    if (e.key === "Enter") {
      this.send();

      this.setState((prev) => ({
        ...prev,
        text: "",
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
              icon: "insert_photo",
              fun: () => {
                var a = document.createElement("input");
                a.setAttribute("type", "file");
                a.setAttribute(
                  "accept",
                  "image/png, image/jpeg, image/gif, image/jpeg"
                );
                //a.setAttribute("multiple", true);
                a.click();
                const { dispatch, name } = this.props;
                const { emit } = this.socket;
                a.onchange = async () => {
                  var uid = uuidv4();
                  var storageref = firebase.storage().ref();

                  storageref
                    .child("/messages/" + uid + "/0.jpg")
                    .put(a.files[0]);

                  dispatch({
                    type: "ADD_MESSAGE",
                    payload: {
                      uid_from: localStorage.getItem("chat-app-uid"),
                      from: localStorage.getItem("chat-app-from"),
                      to: name,
                      message: uid,
                      type: "media",
                      time: new Date(),
                    },
                  });
                  socket.emit("send-message", {
                    uid_from: localStorage.getItem("chat-app-uid"),
                    from: localStorage.getItem("chat-app-from"),
                    to: name,
                    message: uid,
                    type: "media",
                    time: new Date(),
                  });

                  this.setState((prev) => ({
                    ...prev,
                    display: "none",
                  }));
                };
              },
            },
            {
              name: "Share Location",
              icon: "location_on",
              fun: () => {
                const { dispatch, name } = this.props;
                const { emit } = this.socket;

                navigator.geolocation.getCurrentPosition((position) => {
                  dispatch({
                    type: "ADD_MESSAGE",
                    payload: {
                      uid_from: localStorage.getItem("chat-app-uid"),
                      from: localStorage.getItem("chat-app-from"),
                      to: name,
                      type: "location",
                      message: [
                        position.coords.longitude,
                        position.coords.latitude,
                      ],
                      time: new Date(),
                    },
                  });
                  socket.emit("send-message", {
                    uid_from: localStorage.getItem("chat-app-uid"),
                    from: localStorage.getItem("chat-app-from"),
                    to: name,
                    type: "location",
                    message: [
                      position.coords.latitude,
                      position.coords.longitude,
                    ],
                    time: new Date(),
                  });
                  this.setState((prev) => ({
                    ...prev,
                    display: "none",
                  }));
                });
              },
            },
            {
              name: "Document",
              icon: "assignment",
              fun: () => {
                var a = document.createElement("input");
                a.setAttribute("type", "file");
                a.setAttribute(
                  "accept",
                  "application/pdf,application/ods,application/pptx,application/html,application/csv,application/xlsx"
                );
                //a.setAttribute("multiple", true);
                a.click();
                const { dispatch, name } = this.props;
                const { emit } = this.socket;
                a.onchange = async () => {
                  var uid = uuidv4();
                  var storageref = firebase.storage().ref();

                  storageref
                    .child("/messages/" + uid + "/" + a.files[0].name)
                    .put(a.files[0]);

                  dispatch({
                    type: "ADD_MESSAGE",
                    payload: {
                      uid_from: localStorage.getItem("chat-app-uid"),
                      from: localStorage.getItem("chat-app-from"),
                      to: name,
                      message: uid,
                      type: "document",
                      time: new Date(),
                    },
                  });
                  socket.emit("send-message", {
                    uid_from: localStorage.getItem("chat-app-uid"),
                    from: localStorage.getItem("chat-app-from"),
                    to: name,
                    message: uid,
                    type: "document",
                    time: new Date(),
                  });
                  this.setState((prev) => ({
                    ...prev,
                    display: "none",
                  }));
                };
              },
            },
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
    messages: state.messages,
  };
};

export default withRouter(connect(mapStateToProps)(ChatHistoryBottom));
