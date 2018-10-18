import React, { Component } from "react";
import ProjectDetailSection from '../components/work/ProjectDetailSection';
import ProjectNav from '../components/work/ProjectNav';
 
class ProjectPage extends Component {
  render() {
    const { project, projectList } = this.props;
    return (
      <div>
        <ProjectNav currentProject={project} projectList={projectList} />
        <ProjectDetailSection project={project} />
      </div>
    );
  }
}
 
export default ProjectPage;