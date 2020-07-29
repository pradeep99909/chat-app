import React from "react";

class ChatDelete extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "flex",
    };
  }
  componentWillMount() {
    this.setState((prev) => ({
      ...prev,
      display: this.props.display,
    }));
  }
  delete_message = (id) => {
    fetch(process.env.REACT_APP_SERVER + "delete_message", {
      method: "DELETE",
      headers: {
        "Content-Type": "text/plain",
        Accept: "application/json",
      },
      body: JSON.stringify({ id }),
    }).then((file) =>
      file.json().then((res) => {
        console.log(JSON.stringify(res));
      })
    );
  };

  no = () => {
    //if (this.state.display === "flex") {
    this.setState((prev) => ({
      ...prev,
      display: "none",
    }));
    //}
  };

  render() {
    return (
      <div
        className="chat-delete"
        style={{
          height: "100%",
          width: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "fixed",
          display: this.props.display,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3,
          background: "rgb(0,0,0,0.5)",
        }}
      >
        <div
          className="chat-delete-main"
          style={{
            display: "flex",
            padding: 10,
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "var(--white--)",
            width: 500,
            height: 200,
          }}
        >
          <div>
            <h3
              style={{
                color: "var(--black--)",
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              Are you sure to delete this message?
            </h3>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ backgroundColor: "var(--blue--)" }}
              onClick={() => this.delete_message(this.props.id)}
            >
              Yes
            </button>
            <button onClick={() => this.no}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatDelete;
