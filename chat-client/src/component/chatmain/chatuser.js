import React from "react";

class chatuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-user">
        <img
          alt="user"
          style={{ borderRadius: "100%" }}
          width="50"
          height="50"
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
        />
        <div className="chat-user-message">
          <h4 style={{ fontSize: 16 }}>John Default</h4>
          <p style={{ fontSize: 14 }} className="chat-message">
            dasasf
          </p>
        </div>
      </div>
    );
  }
}

export default chatuser;
