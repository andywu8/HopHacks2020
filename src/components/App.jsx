import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Route, Link} from "react-router-dom";
import {Home} from "./Home"
import DHall from './DHall'
import {Layout} from './Layout'
import {NavigationBar} from './Nav'
// import {Jumbotron} from './Jumbotron'


function App() {

  return (
    <React.Fragment>
    <NavigationBar/>
    {/* <Jumbotron></Jumbotron> */}
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/DHall" component={DHall}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
