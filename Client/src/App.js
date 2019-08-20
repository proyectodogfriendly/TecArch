import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import AuthServices from "./services/auth.services";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: null };
    this.authServices = new AuthServices();
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user });
    console.log(
      "Un componente ha cambiado el usuario en App:",
      this.state.loggedInUser
    );
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices
        .loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }));
    }
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/signup"
            exact
            render={match => <Signup {...match} setUser={this.setTheUser} />}
          />
          <Route
            path="/login"
            exact
            render={match => <Login {...match} setUser={this.setTheUser} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
