import React from "react";
import { withRouter } from "react-router";
import ChatOption from "./chatoption";

class ChatHistoryTop extends React.Component {
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
  back = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="chat-history-top">
        <div
          className="overlay"
          style={{ display: this.state.display }}
          onClick={this.display}
        ></div>
        {window.matchMedia("(max-width: 500px)").matches ? (
          <i
            className="material-icons"
            onClick={this.back}
            style={{
              cursor: "pointer",
              width: "40px",
              textAlign: "center",
              color: "white",
            }}
          >
            arrow_back_ios
          </i>
        ) : null}
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
          style={{
            borderRadius: "100%",
            paddingLeft: window.matchMedia("(max-width: 500px)").matches
              ? 0
              : 10,
          }}
          height="50"
          width="50"
        />
        <h3
          style={{
            color: "white",
            paddingLeft: 10,
            fontFamily: "sans-serif",
            fontSize: 18,
          }}
        >
          {this.props.name}
        </h3>
        <i
          className="material-icons"
          style={{
            color: "var(--white--)",
            justifySelf: "flex-end",
            display: "flex",
            marginLeft: "auto",
            marginRight: "20px",
            cursor: "pointer",
          }}
          onClick={this.display}
        >
          more_vert
        </i>
        <ChatOption
          display={this.state.display}
          top="60px"
          right="5px"
          options={[
            {
              name: "Get Info",
              icon: "info",
              fun: () => {
                alert("Get Info");
              },
            },
            {
              name: "Clear Chat",
              icon: "delete_sweep",
              fun: () => {
                alert("Clear Chats");
              },
            },
            {
              name: "Settings",
              icon: "settings",
              fun: () => {
                alert("Settings");
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default withRouter(ChatHistoryTop);
