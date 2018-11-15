import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { ROUTE } from '../common/routes';
import { createBrowserHistory } from 'history';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

    this.history = createBrowserHistory();
    this.history.listen(_ => {window.scrollTo(0, 0)})
    this.homePage = window.location.pathname === '/';

    this.state = {
      appData: data,
      currentProject: null,
      hasScrolled: false,
      introTextHasLoaded: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    if (!this.homePage) this.setState({introTextHasLoaded: true})
  }

  handleAnimationEnd = () => {
    this.setState({introTextHasLoaded: true})
  }

  handleScroll = () => {
    const { hasScrolled } = this.state;

    if (!hasScrolled && this.homePage) {
      if (window.scrollY > 200 && this.homePage) {
        this.setState({hasScrolled: true})
      }
    } else if (hasScrolled) {
      window.removeEventListener('scroll', this.handleScroll);
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
    const { homePage, aboutPage, projects, footer } = this.state.appData;
    const { hasScrolled, introTextHasLoaded } = this.state;

    return (
      <Router history={this.history}>
        <div className={`App ${this.homePage ? 'isHomePage' : ''}`}>
          <Header projectList={projects} introTextHasLoaded={introTextHasLoaded} />

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={400}
                  classNames="fade">
                  <Switch location={location}>
      
                    <Route exact path={ROUTE.HOME} render={(routerProps) => 
                      <HomePage data={homePage} 
                        projects={projects} 
                        hasScrolled={hasScrolled}
                        handleAnimationEnd={this.handleAnimationEnd} 
                        {...routerProps} />} />

                    { this.ProjectRouteList() }

                    <Route path={ROUTE.ABOUT} render={(routerProps) => 
                      <AboutPage data={aboutPage} {...routerProps} />} />

                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />

          <Footer data={footer} />
        </div>
      </Router>
    );
  }
};
