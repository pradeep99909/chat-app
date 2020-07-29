import React from "react";
import ChatOption from "./chathistory/chatoption";
import { withRouter } from "react-router";

class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
  }
  display = () => {
    if (this.state.display === "none") {
      this.setState((prev) => ({
        ...prev,
        display: "block",
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        display: "none",
      }));
    }
  };
  render() {
    return (
      <div className="chat-header">
        <div className="chat-header-box">
          <h1>Chat App</h1>
        </div>
        <div className="chat-header-box">
          <i className="material-icons">search</i>
          <i
            className="material-icons"
            onClick={() => {
              this.props.history.push("/search");
            }}
          >
            chat
          </i>
          <i className="material-icons" onClick={this.display}>
            more_vert
          </i>
        </div>
        <ChatOption
          display={this.state.display}
          top="60px"
          left="150px"
          options={[
            {
              name: "Settings",
              //icon: "insert_photo",
              fun: () => {},
            },
            {
              name: "Logout",
              //icon: "assignment",
              fun: () => {
                localStorage.clear();
                this.props.history.push("/account/login");
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default withRouter(ChatHeader);
