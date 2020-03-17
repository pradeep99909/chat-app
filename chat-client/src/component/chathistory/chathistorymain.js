import React from "react";
import Loader from "../loader";

class ChatHistoryMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-history-main">
        <Loader />
      </div>
    );
  }
}

export default ChatHistoryMain;
