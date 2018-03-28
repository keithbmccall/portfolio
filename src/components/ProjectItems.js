import React, { Component } from "react";

export default class ProjectItems extends Component {
	renderStack = (stack, key) => {
		console.log("boomin");
		return <img src={stack} className="Icons" />;
	};
	render() {
		const { project } = this.props;
		const stackUsed = project.stack.map(this.renderStack);
		return (
			<div className="Projects">
				<div>
					<a target="_blank" href={project.website}>
						<img src={project.hero} className="Projects-img" />
						<div className="Projects-textbox">
							<div className="Projects-text">
								<p>{project.shortText}</p>
								<div className="Flex-1">
									<span className="Tech">Tech: </span>
									{stackUsed}
								</div>
							</div>
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
