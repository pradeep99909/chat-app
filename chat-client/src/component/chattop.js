import React from "react";

import ChatTopBox from "./chattopbox";

class ChatTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-top">
        <ChatTopBox height="5px" name="message" />
        <ChatTopBox name="call" />
        <ChatTopBox name="videocam" />
      </div>
    );
  }
}

export default ChatTop;
