import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
//
import browns from "./images/browns_pic.png";
import sounds from "./images/sounds_pic.png";
import colorado from "./images/colorado_pic.png";
import nowander from "./images/nowander.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "Colorado",
          hero: colorado,
          shortText:
            "Colorado is a React Native app on the iOS platform for taking reading the RGB and HEX color values from images using the iPhone camera or images off the Camera Roll. There is also the ability to compare real-world items side-by-side with a digital color swatch.",
          github: "https://github.com/keithmccall/colorado",
          website: "https://github.com/keithmccall/colorado"
        },
        {
          name: "WIREDSOUNDS",
          hero: sounds,
          shortText:
            "WIRED-SOUNDS, built using Express and Mustache. This fun app is a one stop place for a music fan's relationship with their favorite artists, using the iTunes api for song info and the Google News RSS feed for recent news posts relating to the artist.",
          github: "https://github.com/keithmccall/SOUND",
          website: "http://wiredsounds.herokuapp.com/"
        },
        {
          name: "NFL Trivia League",
          hero: browns,
          shortText:
            "NFL trivia league is a JavaScript based trivia game based around the a simulation of the NFL. As the Browns you answer 16 general NFL trivia questions which determine your wins and losses for the week. Finish in the top 6 of AFC to qualify for the playoffs!",
          github: "https://github.com/keithmccall/Browns-Game",
          website: "https://keithmccall.github.io/Browns-Game/"
        },
        {
          name: "No Wander",
          hero: nowander,
          shortText:
            "No Wander is a React & Express collaborative travel organizing application. Where a user can create Itineraries and then other team members can add activities to participate in for the trip. This was a group assignment at General Assembly.",
          github: "https://github.com/JMCJr/BSTL-Prj-3",
          website: "https://no-wander.herokuapp.com/dashboard"
        }
      ]
    };
  }
  render() {
    return (
      <div className="Outer-ring">
        <div>
          <span className="Keith">Keith McCall</span>
          <span className="Title">Full Stack Developer</span>
        </div>
        <About />
        <Projects projects={this.state.projects} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
