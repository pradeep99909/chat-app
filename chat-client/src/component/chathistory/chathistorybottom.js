import React from "react";

class ChatHistoryBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handle = (e) => {
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  render() {
    return (
      <div className="chat-history-bottom">
        <input
          type="text"
          className="chat-type"
          placeholder="Enter Your Message..."
          name="text"
          onChange={this.handle}
        />
        <i className="material-icons material-bottom">keyboard_voice</i>
        <i className="material-icons material-bottom">attach_file</i>
        <i className="material-icons material-bottom">send</i>
      </div>
    );
  }
}

export default ChatHistoryBottom;
