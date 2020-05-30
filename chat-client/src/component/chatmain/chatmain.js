import React from "react";
import ChatUser from "./chatuser";

import { withRouter } from "react-router-dom";
import Loader from "../loader";

import { connect } from "react-redux";

class chatmain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
      users: null,
    };
  }

  get_messages = async () => {
    const { dispatch } = this.props;
    await fetch(process.env.REACT_APP_SERVER + "/get_messages", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        //authorization: "Bearer " + localStorage.getItem("chat-app-token"),
      },
      body: JSON.stringify({ uid: localStorage.getItem("chat-app-uid") }),
    }).then((file) =>
      file.json().then((res) => {
        //this.setState((prev) => ({ ...prev, messages: res.message }));
        dispatch({ type: "GET_MESSAGE", payload: res.message });
      })
    );
  };

  get_users = async () => {
    await fetch("https://chat-server.pradeep99909.now.sh/get_message_user", {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ uid: localStorage.getItem("chat-app-uid") }),
    })
      .then((file) =>
        file.json().then((res) => {
          this.setState((prev) => ({ ...prev, users: res }));
        })
      )
      .catch((err) => alert(JSON.stringify(err)));
  };

  async UNSAFE_componentWillMount() {
    this.get_messages();
    this.get_users();
  }

  render() {
    return (
      <div className="chat-main">
        {this.props.messages !== null ? (
          this.props.messages.length !== 0 ? (
            this.props.messages.map((d, key) => {
              return (
                <ChatUser
                  key={key}
                  name={d._id}
                  top_message={
                    d.messages[d.messages.length - 1].type === "media"
                      ? d.messages[d.messages.length - 1].from +
                        " sent you an Image"
                      : d.messages[d.messages.length - 1].type === "document"
                      ? d.messages[d.messages.length - 1].from +
                        " sent you an Document"
                      : d.messages[d.messages.length - 1].message
                  }
                />
              );
            })
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#838383",
                  fontSize: 14,
                  fontFamily: "sans-serif",
                }}
              >
                No Conversion
              </p>
            </div>
          )
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
export default withRouter(connect(mapStateToProps)(chatmain));
