import React from "react";
import { withRouter } from "react-router-dom";
class ChatHistoryBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handle = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  send = async () => {
    await fetch("http://127.0.0.1:8000/send_message", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        uid_from: localStorage.getItem("chat-app-uid"),
        from: localStorage.getItem("chat-app-from"),
        to: this.props.name,
        message: this.state.text,
        time: new Date()
      })
    })
      .then((file) => file.json())
      .then((res) => {
        this.setState((prev) => ({ ...prev, messages: res }));
      });
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
        <input
          type="text"
          className="chat-type"
          placeholder="Enter Your Message..."
          name="text"
          value={this.state.text}
          onChange={this.handle}
          onKeyPress={this.handlepress}
        />
        <i className="material-icons material-bottom">keyboard_voice</i>
        <i className="material-icons material-bottom">attach_file</i>
        <i onClick={this.send} className="material-icons material-bottom">
          send
        </i>
      </div>
    );
  }
}

export default withRouter(ChatHistoryBottom);
