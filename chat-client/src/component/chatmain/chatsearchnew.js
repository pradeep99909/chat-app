import React from "react";
import ChatUser from "./chatuser";

class ChatSearchNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      search: null,
    };
  }

  search = (input) => {
    fetch(process.env.REACT_APP_SERVER + "auth/user_search", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ user: input }),
    }).then((file) =>
      file.json().then((data) => {
        this.setState((prev) => ({
          ...prev,
          search: data.people[0].users,
        }));
      })
    );
  };

  handle = (e) => {
    const { value, name } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    this.search(this.state.input);
  };

  render() {
    return (
      <div className="chat-serach-new">
        <input
          type="text"
          name="input"
          placeholder="Enter Username"
          onChange={this.handle}
        />
        <div className="chat-search-main">
          {this.state.search !== null
            ? this.state.search.map((d, key) => {
                return <ChatUser name={d.username} top_message={null} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default ChatSearchNew;
