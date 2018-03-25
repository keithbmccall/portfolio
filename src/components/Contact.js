import React, { Component } from "react";

export default class Contact extends Component {
	render() {
		return (
			<div className="Contact-holder">
				<div className="Flex-1 Contact-banner">
					<div className="Section-header">Contact.</div>
				</div>
				<div className="Flex-1 ">
					<div className="Contact-text">
						<div className="Contact-title">General Inquiries</div>
						<div className="Contact-subtitle">
							<a href="mailto:keithbmccall@gmail.com">
								keithbmccall@gmail.com
							</a>
						</div>
						<div className="Contact-title">Connect</div>
						<div className="Contact-subtitle">
							<a href="https://github.com/keithmccall/">Github</a>
							<br />
							<a href="https://www.linkedin.com/in/keithbmccall/">
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
