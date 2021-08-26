import React, { useState } from "react";
import DeckCollection from "./DeckCollection"
import DeckPage from "./DeckPage";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { Divider } from "@material-ui/core";

function App() {

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/"><DeckCollection /></Route>
          <Route path="/deck/:deckId"><DeckPage /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>

  );
  // return (
  //   <Router>
  //     <Header />
  //     <Route path="/" exact component={DeckCollection} />
  //     <Footer />
  //   </Router> 
  // );
}

export default App;
