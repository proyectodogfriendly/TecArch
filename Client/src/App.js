import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import AuthServices from "./services/auth.services";

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import CompetitionList from "./components/Competition-list";
import ProposalList from "./components/Proposal-list";
import ProposalDetail from "./components/ProposalDetail";
import ProfileArq from "./components/ProfileArq";
import CanvasBack from "./components/CanvasBack";

import PortfolioList from "./components/Portfolio-list";
import PortfolioDetail from "./components/PortfolioDetail";

import Footer from "./components/Footer";

import NavBar from "./components/Navbar";
import Inicio from "./components/Inicio";
import CompetitionCard from "./components/CompetitionCard";

import Map from "./components/Map";

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
    this.fetchUser();
    return (
      <>
        <NavBar
          userInSession={this.state.loggedInUser}
          setUser={this.setTheUser}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={match => (
              <Inicio
                className="casa-perps"
                {...match}
                setUser={this.setTheUser}
              />
            )}
          />
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
          <Route
            path="/competitions"
            exact
            render={() => (
              <CompetitionList userInSession={this.state.loggedInUser} />
            )}
          />

          <Route
            path="/proposals/competitions/:id"
            exact
            component={ProposalList}
          />
          <Route path="/proposals/:id" exact component={ProposalDetail} />
          <Route path="/portfolios" exact component={PortfolioList} />
          <Route path="/portfolios/:id" exact component={PortfolioDetail} />
          <Route
            path="/profile"
            exact
            render={() => (
              <ProfileArq userInSession={this.state.loggedInUser} />
            )}
          />
        </Switch>
        <Footer />
        {/* <Map/> */}
      </>
    );
  }
}
export default App;
