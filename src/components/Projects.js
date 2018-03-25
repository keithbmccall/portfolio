import React, { Component } from "react";

//
import ProjectItems from "./ProjectItems";

export default class Projects extends Component {
	renderProjects = (project, i) => {
		return <ProjectItems project={project} key={i} />;
	};
	render() {
		const projects = this.props.projects.map(this.renderProjects);
		return (
			<div className="Projects-holder">
				<div className="Projects-banner">
					<div className="Section-header">Projects.</div>
				</div>
				<div>{projects}</div>
			</div>
		);
	}
}
