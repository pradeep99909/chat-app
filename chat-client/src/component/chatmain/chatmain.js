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
    let body = new FormData();
    body.append("Content-Type", "application/x-www-form-urlencoded");
    body.append("uid", "pradeep");
    await fetch("http://127.0.0.1:8000/get_messages", {
      method: "post",
      mode: "cors",

      body: body
    })
      .then((file) => file.json())
      .then((res) => {
        this.setState((prev) => ({ ...prev, messages: res }));
      });
  };

  get_users = async () => {
    let body = new FormData();
    body.append("Content-Type", "application/x-www-form-urlencoded");
    body.append("uid", "pradeep");
    await fetch("http://127.0.0.1:8000/get_message_user", {
      method: "post",
      mode: "cors",
      body: body
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
            return <ChatUser key={key} name={d._id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default withRouter(chatmain);
