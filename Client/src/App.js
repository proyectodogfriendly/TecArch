import React from "react";
import "./App.css";

import { Switch, Route } from 'react-router-dom'
import CompetitionList from './components/Competition-list'
import ProposalList from './components/Proposal-list'
import ProposalDetail from './components/ProposalDetail'

function App() {
  return (

    <>
      <Switch>
        <Route path="/competitions" exact component={CompetitionList} />
        <Route path="/proposals" exact component={ProposalList} />
        <Route path="/proposals/:id" exact component={ProposalDetail} />
        {/* 
        <Route path="/newCoaster" exact component={CoasterForm} /> */}
      </Switch>
    </>
  );
}

export default App;
