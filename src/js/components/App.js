import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../scss/components/_App.scss';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import AboutPage from '../pages/AboutPage';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <div className="content">
            <Route exact path="/" component={HomePage}/>
            <Route path="/work" component={ProjectPage}/>
            <Route path="/about" component={AboutPage}/>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
