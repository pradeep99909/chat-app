import React from "react";
import ChatHistoryTop from "./chathistorytop";
import ChatHistoryBottom from "./chathistorybottom";
import ChatHistoryMain from "./chathistorymain";

class chathistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-history" style={{ width: "100%", height: "100%" }}>
        <ChatHistoryTop name={this.props.match.params.user} />
        <ChatHistoryMain />
        <ChatHistoryBottom
          name={this.props.match.params.user}
          uid_to={this.props.match.params.user}
        />
      </div>
    );
  }
}

export default chathistory;
