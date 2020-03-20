import React from "react";
import { withRouter } from "react-router";

class ChatHistoryTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-history-top">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
          style={{ borderRadius: "100%", paddingLeft: 10 }}
          height="50"
          width="50"
        />
        <h3
          style={{
            color: "white",
            paddingLeft: 10,
            fontFamily: "sans-serif",
            fontSize: 18
          }}
        >
          {this.props.name}
        </h3>
      </div>
    );
  }
}

export default withRouter(ChatHistoryTop);
