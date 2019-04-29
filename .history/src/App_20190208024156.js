import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Splash from "./components/Splash";
import Skills from "./components/Skills";
import "./App.css";
//
import browns from "./images/browns_pic.png";
import sounds from "./images/sounds_pic.png";
import colorado from "./images/colorado_pic.png";
import nowander from "./images/nowander.png";
import gerald from "./images/gerald.png";
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
import css from "./images/icons/css.png";
import html from "./images/icons/html.png";
import js from "./images/icons/js.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "Colorado",
          hero: colorado,
          shortText: `Colorado is a React Native app, on the iOS platform, for reading the RGB and HEX color values from images using the iPhone camera or images off the Camera Roll. There is also the ability to compare real-world items side-by-side with a digital color swatch. On the first build I used Express on the backend to store user created content in the form of color palettes for future reference. I've since switched to use iOS device storage for speed considerations.`,
          github: "https://github.com/keithmccall/colorado",
          website:
            "https://itunes.apple.com/us/app/colorado-color-palette/id1362360671?mt=8",
          stack: [reacticon, express, postgresql, xcode, ngrok]
        },
        {
          name: "WIREDSOUNDS",
          hero: sounds,
          shortText: `WIRED-SOUNDS is a iTunes-like web app built using Express, Mustache and Postgresql. This fun app is a one stop place for a music fan's relationship with their favorite artists, using the iTunes api for song info and the Google News RSS feed for recent news posts relating to the artist.`,
          github: "https://github.com/keithmccall/SOUND",
          website: "http://wiredsounds.herokuapp.com/",
          stack: [express, postgresql, mustache]
        },
        {
          name: "NFL Trivia League",
          hero: browns,
          shortText: `NFL trivia league is a jQuery trivia game based around the a simulation of an NFL season. As the coach of the Browns you answer 16 general NFL trivia questions which determine your wins and losses for the week. Finish in the top 6 of AFC to qualify for the playoffs!`,
          github: "https://github.com/keithmccall/Browns-Game",
          website: "https://keithmccall.github.io/Browns-Game/",
          stack: [jquery]
        },
        {
          name: "Gerald Cannon's Projects",
          hero: gerald,
          shortText: `This site is to serve as visual artist Gerald Cannon's work. Created in vanilla Javascript, jQuery, HTML, and CSS. Created within my first month of picking up development.`,
          github: "https://github.com/keithmccall/GeraldCannon",
          website:
            "https://keithmccall.github.io/GeraldCannon/pages/geraldcannon.html",
          stack: [jquery, js, html, css]
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
