import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

export default class About extends Component {
	render() {
		return (
			<div className="About-holder">
				<div className="Flex-1">
					<div className="Section-header">About.</div>
				</div>
				<div className="Flex-1">
					<div className="About-text">
						<p>
							I am a full stack web developer and graphic designer
							with over 7 years working in project management and
							5 years experience in fashion and graphic design. I
							realized my desire to work towards building tools
							that will make the world more efficient.
						</p>
						<p>
							I'm passionate about user experience and ease of
							use. Specializing in React, React Native, Express
							and Ruby on Rails currently seeking Junior
							Development roles.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
