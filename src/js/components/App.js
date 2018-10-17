import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../scss/components/_App.scss';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import AboutPage from '../pages/AboutPage';
import data from "../../data/app.json";


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      appData: data,
      dataIsLoaded: false
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />

          <div className="content">
            <Route exact path="/" render={(routerProps) => <HomePage data={this.state.appData.homePage} {...routerProps} />} />
            <Route path="/work" render={(routerProps) => <ProjectPage data={this.state.appData.projectPage} {...routerProps} />} />
            <Route path="/about" render={(routerProps) => <AboutPage data={this.state.appData.aboutPage} {...routerProps} />} />

            {/* <Route path="/work" component={ProjectPage}/>
            <Route path="/about" component={AboutPage}/> */}
          </div>

          <Footer />
        </div>
      </HashRouter>
    );
  }
};
