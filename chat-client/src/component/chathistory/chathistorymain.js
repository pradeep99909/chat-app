import React from "react";
import Loader from "../loader";

class ChatHistoryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    };
  }
  get_chat_history = async () => {
    this.setState((prev) => ({ ...prev, messages: null }));
    await fetch("http://127.0.0.1:8000/chat_history", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        uid: localStorage.getItem("chat-app-uid"),
        to: this.props.to
      })
    })
      .then((file) => file.json())
      .then((res) => {
        this.setState((prev) => ({ ...prev, messages: res }));
      });
  };
  componentWillMount() {
    this.get_chat_history();
  }
  componentWillUpdate() {
    //this.get_chat_history();
  }
  render() {
    return (
      <div className="chat-history-main">
        {this.state.messages !== null ? (
          this.state.messages.map((d) => {
            return (
              <div
                className="chat1"
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
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  {d.from}
                </div>
                <div
                  style={{ fontFamily: "sans-serif" }}
                  className="chat-message"
                >
                  {d.message}
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

export default ChatHistoryMain;
