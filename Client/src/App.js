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

import PortfolioList from "./components/Portfolio-list";
import PortfolioDetail from "./components/PortfolioDetail";

import NavBar from "./components/Navbar";


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
       {/* <Helmet>
                <title>My App</title>
                <meta charSet="utf-8" />
                <meta name="description" content="A React.js application" />
                <script type="text/javascript" src="./javascript/jquery.min.js"></script>
                <script type="text/javascript" src="./javascript/plugins.js"></script>
                <script type="text/javascript" src="./javascript/scripts.js"></script>
                </Helmet> */}
        <NavBar/>
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
          <Route path="/competitions" exact component={CompetitionList} />
          <Route path="/proposals" exact component={ProposalList} />
          <Route path="/proposals/:id" exact component={ProposalDetail} />
          <Route path="/portfolios" exact component={PortfolioList} />
          <Route path="/portfolios/:id" exact component={PortfolioDetail} />
          <Route path="/profile" exact component={ProfileArq} />
        </Switch>
      </>
    );
  }
}
export default App;
