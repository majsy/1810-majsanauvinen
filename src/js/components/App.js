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
import  { ROUTE } from '../common/routes'


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      appData: data
    }
  }

  ProjectRouteList() {
    const { projects } = this.state.appData;

    return projects.map((item) => (
      <Route path={`${ROUTE.WORK}${item.id}`} 
        key={item.id} 
        render={(routerProps) => 
        <ProjectPage project={item} projectList={projects} {...routerProps} />
      } />
    ));
  }

  render() {
    const { homePage, aboutPage, projects, footer, header } = this.state.appData;

    return (
      <HashRouter>
        <div className="App">
          <Header />

          <Route exact path={ROUTE.HOME} render={(routerProps) => <HomePage data={homePage} projects={projects} {...routerProps} />} />
          { this.ProjectRouteList() }
          <Route path={ROUTE.ABOUT} render={(routerProps) => <AboutPage data={aboutPage} {...routerProps} />} />

          <Footer data={footer} />
        </div>
      </HashRouter>
    );
  }
};
