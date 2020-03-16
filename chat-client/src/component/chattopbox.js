import React from "react";

class ChatTopBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="chat-top-box"
        style={{ width: 100 / 3 + "%", height: "70px" }}
      >
        <i className="material-icons">{this.props.name}</i>
        <div className="bar" style={{ height: this.props.height }}></div>
      </div>
    );
  }
}

export default ChatTopBox;
