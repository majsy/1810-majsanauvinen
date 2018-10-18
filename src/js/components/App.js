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
      isAboutPage: false
    }
  }

  ProjectRouteList() {
    const { projects } = this.state.appData;

    return projects.map((item) => (
      <Route path={`/work/${item.id}`} 
        key={item.id} 
        render={(routerProps) => 
        <ProjectPage project={item} projectList={projects} {...routerProps} />
      } />
    ));
  }

  render() {
    const { homePage, aboutPage, projects } = this.state.appData;

    // const isAboutPage = (match, location) => {
    //   if (!match) {
    //     return true
    //   }
    // }

    return (
      <HashRouter>
        <div className="App">
          <Header />

          <Route exact path="/" render={(routerProps) => <HomePage data={homePage} projects={projects} {...routerProps} />} />
          { this.ProjectRouteList() }
          <Route path="/about" render={(routerProps) => <AboutPage data={aboutPage} {...routerProps} />} />

          <Footer />
        </div>
      </HashRouter>
    );
  }
};
