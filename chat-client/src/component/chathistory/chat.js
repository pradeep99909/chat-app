import React from "react";
import mapboxgl from "mapbox-gl";
import firebase from "../config/config";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ChatDelete from "./chatdelete";
require("dotenv").config();

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      image: null,
      display_delete_option: "none",
    };
  }

  componentWillMount() {
    this.setState((prev) => ({
      ...prev,
      display: "none",
    }));
    if (this.props.type === "media" || this.props.type === "document") {
      var storageRef = firebase.storage().ref();
      storageRef
        .child("/messages/" + decodeURI(this.props.message) + "/0.jpg")
        .getDownloadURL()
        .then((url) => {
          this.setState((prev) => ({
            ...prev,
            image: url,
          }));
        });
    }
  }
  componentDidMount() {
    if (this.props.type === "location") {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic2lzYXBpNzkzOSIsImEiOiJjazYwbnFjM3QwOTdkM21wa3p3MGFoODBlIn0.X0_rZjn7eQ2jIOOhqPG1AA";
      var map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/dark-v10",
        zoom: 9,
        center: [this.props.message[1], this.props.message[0]],
      });
      //mapboxgl.LngLat(-73.9749, 40.7736);
      new mapboxgl.Marker()
        .setLngLat([this.props.message[1], this.props.message[0]])
        .addTo(map);
      map.addControl(new mapboxgl.NavigationControl());
    }
  }

  delete_options = () => {
    if (this.state.display_delete_option === "none") {
      this.setState((prev) => ({
        ...prev,
        display_delete_option: "flex",
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        display_delete_option: "none",
      }));
    }
  };

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
      <div
        className="chat1"
        style={{
          backgroundColor:
            localStorage.getItem("chat-app-from") === this.props.from
              ? "var(--blue--)"
              : "var(--white--)",
          alignSelf:
            localStorage.getItem("chat-app-from") === this.props.from
              ? "flex-start"
              : "flex-end",
          maxWidth: this.props.type === "media" ? null : "300px",
        }}
      >
        <div
          className="chat-message-name"
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>{this.props.from}</div>
          <i
            className="material-icons"
            onClick={this.display}
            style={{
              fontSize: 18,
              cursor: "pointer",
              transform: "rotate(270deg)",
              alignItems: "center",
              padding: "2px",
            }}
          >
            more_vert
          </i>
        </div>
        {this.props.type === "message" ? (
          <p
            style={{
              fontFamily: "sans-serif",
              overflowWrap: "break-word",
              marginBlockEnd: 0,
              marginBlockStart: 0,
            }}
            className="chat-message"
          >
            {this.props.message}
          </p>
        ) : this.props.type === "media" ? (
          <img
            src={
              this.state.image
              //||
              //"https://motiongraphicsphoebe.files.wordpress.com/2018/10/8ee212dac057d412972e0c8cc164deee.gif"
            }
            height="auto"
            width="300"
            loading="lazy"
            alt="message"
          />
        ) : this.props.type === "location" ? (
          <div
            ref={(el) => (this.mapContainer = el)}
            style={{ width: "280px", height: "150px", borderRadius: "10px" }}
          ></div>
        ) : this.props.type === "document" ? (
          <a href={this.state.image} download>
            File
          </a>
        ) : (
          <p
            style={{
              fontFamily: "sans-serif",
              overflowWrap: "break-word",
              marginBlockEnd: 0,
              marginBlockStart: 0,
            }}
            className="chat-message"
          >
            {this.props.message}
          </p>
        )}
        <div
          className="chat-main-option"
          style={{
            display: this.state.display,
            marginLeft:
              localStorage.getItem("chat-app-from") !== this.props.from
                ? "0px"
                : "150px",
            alignItems:
              localStorage.getItem("chat-app-from") !== this.props.from
                ? "flex-start"
                : "flex-end",
          }}
        >
          <div className="option">Updated Message</div>
          <div className="option" onClick={this.delete_options}>
            Delete Message
          </div>
        </div>
        <ChatDelete
          display={this.state.display_delete_option}
          id={this.props.id}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

export default withRouter(connect(mapStateToProps)(Chat));
