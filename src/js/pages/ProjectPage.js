import React, { Component } from 'react';
import ProjectDetailSection from '../components/work/ProjectDetailSection';
// import ProjectNav from '../components/work/ProjectNav';
import ProjectNavSection from '../components/work/ProjectNavSection';
import '../../scss/components/_Page.scss';
 
class ProjectPage extends Component {
  render() {
    const { project, projectList } = this.props;
    return (
      <div className="Page page">
        {/* <ProjectNav currentProject={project} projectList={projectList} /> */}
        <ProjectDetailSection project={project} />
        <ProjectNavSection currentProject={project} projectList={projectList} />
      </div>
    );
  }
}
 
export default ProjectPage;