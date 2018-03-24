import React, { Component } from "react";

export default class ProjectItems extends Component {
	render() {
		const { project } = this.props;
		return (
			<div className="Projects">
				<div>
					<a href={project.website}>
						<img src={project.hero} className="Projects-img" />
						<div className="Projects-textbox">
							<p className="Projects-text">{project.shortText}</p>
							<div className="Projects-links">
								<a href={project.github}>Github Repo</a>
							</div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
