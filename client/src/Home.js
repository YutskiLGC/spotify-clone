import React from "react";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <div className="header">Spotify Clone!
      <Navbar />
      </div>
      <div className="left-side">
        <p>some user information here</p>
        <div className="right-side">
          <p>some more information here!</p>
        </div>
      </div>
      <div className="play-now">
        <p>now playing! artist name: title: length: release date: </p>
      </div>
    </div>
  );
}