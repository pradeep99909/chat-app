import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  }
  login = (e) => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState((prev) => ({
        ...prev,
        error: "",
        loading: true,
      }));
      fetch(process.env.REACT_APP_SERVER + "auth_login", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }).then((file) => {
        file.json().then((res) => {
          if (!res.success) {
            this.setState((prev) => ({
              ...prev,
              error: res.message,
              loading: false,
            }));
          } else {
            localStorage.setItem("chat-app-from", res.username);
            localStorage.setItem("chat-app-uid", res.uid);
            localStorage.setItem("chat-app-token", res.token);
            localStorage.setItem("chat-app-isLogined", true);
            this.props.history.push("/chat");
          }
        });
      });
    }
  };

  handle = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  render() {
    return (
      <div className="chat-login-main">
        <h3>Login</h3>
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handle}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handle}
          />
          <button onClick={this.login}>
            {this.state.loading ? <div className="load"></div> : null}
            &nbsp;Login
          </button>
          <p
            style={{
              alignSelf: "flex-start",
              fontFamily: "sans-serif",
              color: "red",
              fontSize: 14,
            }}
          >
            {this.state.error}
          </p>
        </form>
        <Link style={{ color: "var(--blue--)" }} to="/account/register">
          Register?
        </Link>
      </div>
    );
  }
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: "",
      loading: false,
    };
  }
  login = (e) => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState((prev) => ({
        ...prev,
        error: "",
        loading: true,
      }));
      fetch("https://chat-server.pradeep99909.now.sh/auth_register", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }),
      }).then((file) => {
        file.json().then((res) => {
          if (!res.success) {
            this.setState((prev) => ({
              ...prev,
              error: res.message,
              loading: false,
            }));
          } else {
            localStorage.setItem("chat-app-from", res.from);
            localStorage.setItem("chat-app-uid", res.uid);
            localStorage.setItem("chat-app-token", res.token);
            localStorage.setItem("chat-app-isLogined", true);
            this.props.history.push("/chat");
          }
        });
      });
    }
  };

  handle = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  render() {
    return (
      <div className="chat-login-main">
        <h3>Register</h3>
        <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handle}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handle}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handle}
          />
          <button onClick={this.login}>
            {this.state.loading ? <div className="load"></div> : null}
            &nbsp;Register
          </button>
          <p
            style={{
              alignSelf: "flex-start",
              fontFamily: "sans-serif",
              color: "red",
              fontSize: 14,
            }}
          >
            {this.state.error}
          </p>
        </form>
      </div>
    );
  }
}

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-auth">
        <h3>Chat App</h3>
        <Switch>
          <Route path="/account/login" component={Login} exact />
          <Route path="/account/register" component={Register} exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Auth);
