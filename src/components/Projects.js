import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import browns from "../images/browns_pic.png";
import sounds from "../images/sounds_pic.png";
import colorado from "../images/colorado_pic.png";
import nowander from "../images/nowander.png";

export default class Projects extends Component {
	render() {
		return (
			<div className="Projects-holder">
				<div>
					<div className="Section-header">Projects.</div>
				</div>
				<div>
					<div className="Projects-container">
						<div className="Projects">
							<div>
								<img src={colorado} className="Projects-img" />
								<div className="Projects-text">
									Colorado is a React Native app on the iOS
									platform for taking reading the RGB and HEX
									color values from images using the iPhone
									camera or images off the Camera Roll. There
									is also the ability to compare real-world
									items side-by-side with a digital color
									swatch.
								</div>
							</div>
						</div>
						<div className="Projects">
							<div>
								<img src={sounds} className="Projects-img" />
								<div className="Projects-text">
									WIRED-SOUNDS is a one stop place for a music
									fan's relationship with their favorite
									artists, using the iTunes api for song info
									and the Google News RSS feed for recent news
									posts relating to the artist.
								</div>
							</div>
						</div>
						<div className="Projects">
							<div>
								<img src={browns} className="Projects-img" />
								<div className="Projects-text">
									NFL trivia league is a JavaScript based
									trivia game based around the a simulation of
									the NFL. As the Browns you answer 16 general
									NFL trivia questions which determine your
									wins and losses for the week. Finish in the
									top 6 of AFC to qualify for the playoffs!
								</div>
							</div>
						</div>
						<div className="Projects">
							<div>
								<img src={nowander} className="Projects-img" />
								<div className="Projects-text">
									No Wander is a web-based collaborative
									travel organizing application. Where a user
									can create Itineraries and then other team
									members can add activities to participate in
									for the trip. This was a group project at
									General Assembly.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
