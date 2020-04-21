import React from "react";

class ChatOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="chat-option"
        style={{
          display: this.props.display,
          top: this.props.top ? this.props.top : null,
          right: this.props.right ? this.props.right : null,
          bottom: this.props.bottom ? this.props.bottom : null,
          left: this.props.left ? this.props.left : null,
        }}
      >
        {this.props.options.map((d, key) => {
          return (
            <div className="options" onClick={d.fun}>
              <i className="material-icons">{d.icon}</i>
              <p>{d.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChatOption;
