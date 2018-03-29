import React, { Component } from "react";
import express from "../images/icons/express.png";

export default class ProjectItems extends Component {
	renderStack = (stack, key) => {
		if (stack == express) {
			console.log("exp");
			return <img src={stack} className="Express-icon" />;
		} else {
			return <img src={stack} className="Icons" />;
		}
	};
	render() {
		const { project } = this.props;
		const stackUsed = project.stack.map(this.renderStack);
		return (
			<div className="Projects">
				<div>
					<a target="_blank" href={project.website}>
						<img src={project.hero} className="Projects-img" />
						<div className="Mobile-projects">
							<div className="Projects-textbox">
								<div className="Projects-text">
									<p>{project.shortText}</p>
									<div className="Mobile-stack">
										<span className="Tech">Tech: </span>
										<div>{stackUsed}</div>
									</div>
								</div>
								<div className="Projects-links">
									<a target="_blank" href={project.github}>
										Github
									</a>

									<a target="_blank" href={project.website}>
										Website
									</a>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
