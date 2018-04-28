import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import NavTabs from "./components/NavTabs/NavTabs";
import Search from "./components/pages/Search/Search";
import Saved from "./components/pages/Saved/Saved";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Router>
          <div>
            <NavTabs />
            <Route exact path='/' render={() => <Redirect to="/search" />} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
