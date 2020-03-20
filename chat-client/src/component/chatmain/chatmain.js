import React from "react";
import ChatUser from "./chatuser";

import { withRouter } from "react-router-dom";
import Loader from "../loader";

class chatmain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
      users: null
    };
  }

  get_messages = async () => {
    await fetch("http://127.0.0.1:8000/get_messages", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({ uid: localStorage.getItem("chat-app-uid") })
    })
      .then((file) => file.json())
      .then((res) => {
        this.setState((prev) => ({ ...prev, messages: res }));
      });
  };

  get_users = async () => {
    await fetch("http://127.0.0.1:8000/get_message_user", {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({ uid: localStorage.getItem("chat-app-uid") })
    })
      .then((file) => file.json())
      .then((res) => {
        this.setState((prev) => ({ ...prev, users: res }));
      });
  };

  async UNSAFE_componentWillMount() {
    this.get_messages();
    this.get_users();
  }

  render() {
    return (
      <div className="chat-main">
        {this.state.users !== null ? (
          this.state.users.map((d, key) => {
            return (
              <ChatUser
                key={key}
                name={d._id}
                top_message={this.state.messages}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default withRouter(chatmain);
