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
      err: null,
    };
  }

  async get_test() {
    await fetch("http://localhost:8000/test", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: "localStorage.getItem(chat-app-uid)",
        to: "to",
      }),
    })
      .then((file) => file.json())
      .then((res) => {
        if (res.success) {
          //this.props.dispatch({ type: "GET_MESSAGE", payload: res.message });
          alert(JSON.stringify(res));
        } else {
          this.setState((prev) => ({
            ...prev,
            error: res.message,
          }));
        }
      });
  }

  get_messages = async () => {
    const { dispatch } = this.props;
    await fetch("http://localhost:8000/get_messages", {
      method: "POST",
      mode: "cors",
      //credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //Authorization: "Brearer " + localStorage.getItem("chat-app-token"),
      },
      body: JSON.stringify({ uid: localStorage.getItem("chat-app-uid") }),
    }).then((file) => {
      if (file.status === 200) {
        file.json().then((res) => {
          dispatch({ type: "GET_MESSAGE", payload: res.message });
        });
      } else {
        this.setState((prev) => ({
          ...prev,
          err: "Something went wrong. Please check your Internet connection",
        }));
      }
    });
  };

  get_users = async () => {
    await fetch("http://localhost:8000/get_message_user", {
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
      .catch((err) => {
        this.setState((prev) => ({
          ...prev,
          err: "No Connection to Internet",
        }));
      });
  };

  async UNSAFE_componentWillMount() {
    //this.get_messages();
    this.get_test();
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
                No Conversation
              </p>
            </div>
          )
        ) : this.state.err !== null ? (
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
                textAlign: "center",
              }}
            >
              {this.state.err}
            </p>
          </div>
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
