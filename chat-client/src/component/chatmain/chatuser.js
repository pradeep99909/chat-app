import React from "react";
import { withRouter } from "react-router-dom";
class chatuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="chat-user"
        onClick={() => {
          this.props.history.push("/chat/" + this.props.name);
        }}
      >
        <img
          alt="user"
          style={{ borderRadius: "100%" }}
          width="50"
          height="50"
          src="https://i.stack.imgur.com/l60Hf.png"
        />
        <div className="chat-user-message">
          <h4 style={{ fontSize: 16 }}>{this.props.name}</h4>
          <p
            style={{ fontSize: 14, textOverflow: "ellipsis", width: "100%" }}
            className="chat-message"
          >
            {this.props.top_message}
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(chatuser);
