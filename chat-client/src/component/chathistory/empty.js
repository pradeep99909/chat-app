import React from "react";
import image from "../empty_inbox.png";
class empty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <img
        src={image}
        width="300"
        height="300"
        style={{ backdropFilter: "red" }}
      />
    );
  }
}

export default empty;
