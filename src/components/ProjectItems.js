import React, { Component } from "react";

export default class ProjectItems extends Component {
	render() {
		const { project } = this.props;
		return (
			<div className="Projects">
				<div>
					<a target="_blank" href={project.website}>
						<img src={project.hero} className="Projects-img" />
						<div className="Projects-textbox">
							<p className="Projects-text">{project.shortText}</p>
							<div className="Projects-links">
								<a target="_blank" href={project.github}>
									Github
								</a>
								<br />
								<a target="_blank" href={project.website}>
									Site
								</a>
							</div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
