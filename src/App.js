import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Splash from "./components/Splash";
import "./App.css";
//
import browns from "./images/browns_pic.png";
import sounds from "./images/sounds_pic.png";
import colorado from "./images/colorado_pic.png";
import nowander from "./images/nowander.png";
//
import express from "./images/icons/express.png";
import node from "./images/icons/node.png";
import postgresql from "./images/icons/postgresql.png";
import python from "./images/icons/python.png";
import rails from "./images/icons/rails.png";
import ruby from "./images/icons/ruby.png";
import mustache from "./images/icons/mustache.png";
import jquery from "./images/icons/jquery.png";
import reacticon from "./images/icons/react.png";
import xcode from "./images/icons/xcode.png";
import ngrok from "./images/icons/ngrok.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "Colorado",
          hero: colorado,
          shortText:
            "Colorado is a React Native app, on the iOS platform, for reading the RGB and HEX color values from images using the iPhone camera or images off the Camera Roll. There is also the ability to compare real-world items side-by-side with a digital color swatch. I used Express on the backend to store user created content in the form of color palettes for future reference.",
          github: "https://github.com/keithmccall/colorado",
          website: "https://github.com/keithmccall/colorado",
          stack: [reacticon, express, postgresql, xcode, ngrok]
        },
        {
          name: "WIREDSOUNDS",
          hero: sounds,
          shortText:
            "WIRED-SOUNDS is a iTunes-like web app built using Express, Mustache and Postgresql. This fun app is a one stop place for a music fan's relationship with their favorite artists, using the iTunes api for song info and the Google News RSS feed for recent news posts relating to the artist.",
          github: "https://github.com/keithmccall/SOUND",
          website: "http://wiredsounds.herokuapp.com/",
          stack: [express, postgresql, mustache]
        },
        {
          name: "NFL Trivia League",
          hero: browns,
          shortText:
            "NFL trivia league is a jQuery trivia game based around the a simulation of an NFL season. As the coach of the Browns you answer 16 general NFL trivia questions which determine your wins and losses for the week. Finish in the top 6 of AFC to qualify for the playoffs!",
          github: "https://github.com/keithmccall/Browns-Game",
          website: "https://keithmccall.github.io/Browns-Game/",
          stack: [jquery]
        },
        {
          name: "No Wander",
          hero: nowander,
          shortText:
            "No Wander is a React & Express collaborative travel organizing application. Where a user can create Itineraries and then other team members can add activities to participate in for the trip. This was a group assignment at General Assembly.",
          github: "https://github.com/JMCJr/BSTL-Prj-3",
          website: "https://no-wander.herokuapp.com/dashboard",
          stack: [reacticon, express]
        }
      ]
    };
  }
  render() {
    return (
      <div className="Outer-ring">
        <Splash />
        <About />
        <Projects projects={this.state.projects} />
        <Contact />
      </div>
    );
  }
}

export default App;
